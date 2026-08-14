// Post-build step: crawls the built SPA with a headless browser and writes
// a fully-rendered HTML snapshot per route. Search/AI crawlers that don't
// execute JS (or execute it unreliably) then see real content on first
// request instead of an empty <div id="root"></div> shell.
import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Vercel's build container is missing shared libs the stock Puppeteer
// Chromium needs (libnspr4.so etc). @sparticuz/chromium ships a build
// packaged for exactly that constrained environment; use it there, and
// plain puppeteer's bundled browser for local builds.
const onVercel = Boolean(process.env.VERCEL);
const puppeteer = onVercel ? (await import('puppeteer-core')).default : (await import('puppeteer')).default;
const chromium = onVercel ? (await import('@sparticuz/chromium')).default : null;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const buildDir = path.join(__dirname, '..', 'build');
const PORT = 5657;

const ROUTES = [
  '/',
  '/pricing',
  '/home-services',
  '/about',
  '/contact',
  '/portfolio',
  '/services',
  '/privacy',
];

const MIME = {
  '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.woff': 'font/woff',
  '.woff2': 'font/woff2', '.txt': 'text/plain', '.xml': 'application/xml',
};

// Serves the untouched build/ dir with SPA fallback, mirroring how a static
// host behaves before any prerendered snapshots exist.
function startServer() {
  const server = http.createServer(async (req, res) => {
    const urlPath = req.url.split('?')[0];
    let filePath = path.join(buildDir, decodeURIComponent(urlPath));
    try {
      const stat = await fs.stat(filePath);
      if (stat.isDirectory()) filePath = path.join(filePath, 'index.html');
    } catch {
      filePath = path.join(buildDir, 'index.html');
    }
    try {
      const data = await fs.readFile(filePath);
      res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
      res.end(data);
    } catch {
      res.writeHead(404);
      res.end();
    }
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

async function main() {
  const server = await startServer();
  const browser = await puppeteer.launch(
    onVercel
      ? {
          headless: true,
          args: chromium.args,
          executablePath: await chromium.executablePath(),
        }
      : {
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
        }
  );
  const snapshots = {};

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
      // Give react-helmet a tick to flush head tags after route render.
      await new Promise((r) => setTimeout(r, 200));
      snapshots[route] = await page.content();
      await page.close();
      console.log(`Rendered ${route} (${snapshots[route].length} bytes)`);
    }
  } finally {
    await browser.close();
    server.close();
  }

  // Flat <route>.html files + Vercel's cleanUrls (vercel.json) map /about ->
  // /about.html. Directory-style /about/index.html was tried first but
  // Vercel's static resolver didn't pick it up for extensionless paths.
  for (const [route, html] of Object.entries(snapshots)) {
    const outPath = route === '/'
      ? path.join(buildDir, 'index.html')
      : path.join(buildDir, `${route.slice(1)}.html`);
    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, html);
  }

  console.log(`\nPrerendered ${ROUTES.length} routes into ${buildDir}`);
}

// Never fail the overall build over this — worst case we fall back to the
// plain client-rendered output that was already shipping before this script
// existed.
main().catch((err) => {
  console.error('Prerender step failed, shipping client-rendered build as-is:', err);
  process.exit(0);
});

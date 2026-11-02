import React from 'react';
import { Link } from 'react-router-dom';

// In-content cross links between trade pages and city pages. Search Console
// reported some trade pages (e.g. HVAC) were only discovered via the sitemap,
// with no internal page linking to them from body content. Nav/footer links
// alone carry little weight, so every trade page links its siblings and the
// local pages here.

const TRADES = [
  { slug: 'contractors', name: 'General Contractors & Remodelers' },
  { slug: 'hvac-plumbing-electrical', name: 'HVAC, Plumbing & Electrical' },
  { slug: 'cleaning-landscaping', name: 'Cleaning, Landscaping & Maintenance' },
  { slug: 'roofing-restoration', name: 'Roofing & Restoration' },
];

export const CITY_LINKS = [
  { slug: 'oceanside', name: 'Oceanside' },
  { slug: 'carlsbad', name: 'Carlsbad' },
  { slug: 'vista', name: 'Vista' },
  { slug: 'escondido', name: 'Escondido' },
];

const linkStyle = { color: '#fff', textDecoration: 'underline' } as const;

const join = (items: { to: string; name: string }[]) =>
  items.map((it, i) => (
    <React.Fragment key={it.to}>
      {i > 0 && (i === items.length - 1 ? ', and ' : ', ')}
      <Link to={it.to} style={linkStyle}>{it.name}</Link>
    </React.Fragment>
  ));

const RelatedLinks: React.FC<{ currentTrade: string }> = ({ currentTrade }) => {
  const trades = TRADES.filter((t) => t.slug !== currentTrade).map((t) => ({ to: `/home-services/${t.slug}`, name: t.name }));
  const cities = CITY_LINKS.map((c) => ({ to: `/web-design/${c.slug}`, name: c.name }));
  return (
    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)' }}>
        We also build websites for {join(trades)}.
      </p>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)' }}>
        Based in San Diego, working with home service businesses in {join(cities)}.
      </p>
    </div>
  );
};

export default RelatedLinks;

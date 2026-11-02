import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Local landing pages ("web design <city>"). Search Console shows Causory's
// best rankings are local North County queries ("web designer oceanside",
// "seo oceanside"), so each city gets its own page with copy specific to that
// market, not a find-and-replace template. Keep claims general and true: no
// invented local clients, addresses, or stats.

type TradeSlug = 'contractors' | 'hvac-plumbing-electrical' | 'cleaning-landscaping' | 'roofing-restoration';

interface City {
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  marketTitle: string;
  market: string[];
  areas: string[];
  tradeFocus: { slug: TradeSlug; text: string }[];
  faqs: { q: string; a: string }[];
}

const tradeNames: Record<TradeSlug, string> = {
  contractors: 'General Contractors & Remodelers',
  'hvac-plumbing-electrical': 'HVAC, Plumbing & Electrical',
  'cleaning-landscaping': 'Cleaning, Landscaping & Maintenance',
  'roofing-restoration': 'Roofing & Restoration',
};

const sharedFaqs = (city: string) => [
  {
    q: `How much does a website cost for a ${city} home service business?`,
    a: 'Plans start at a $700 one-time setup fee, then a flat $200/mo Website Care Plan that covers hosting, security, updates, content changes, and support. There are no surprise invoices for small edits. The full breakdown by plan is on our pricing page.',
  },
  {
    q: 'How long does it take to launch?',
    a: 'Most sites launch in 2–4 weeks from kickoff, depending on the plan and how quickly we get your photos, service list, and feedback. Before you commit to anything, we can build a free concept so you can see the direction first.',
  },
];

export const CITIES: Record<string, City> = {
  oceanside: {
    name: 'Oceanside',
    title: 'Web Design in Oceanside, CA for Home Service Businesses | Causory',
    description:
      'Oceanside web design and local SEO for contractors, HVAC, plumbing, cleaning, and roofing businesses. Custom sites built to turn Google searches into calls. $700 setup + $200/mo.',
    h1: 'Web Design & Local SEO in Oceanside, CA',
    intro:
      "Websites for Oceanside contractors and home service pros, built so that when someone searches for your trade in Oceanside, you're the one they call.",
    marketTitle: 'Oceanside is a market where new customers arrive constantly',
    market: [
      "With Camp Pendleton right next door, Oceanside has a steady stream of households moving in and out. A family that just moved here doesn't have a plumber, an electrician, or a house cleaner yet. They don't have neighbors to ask either, so they Google it. Whoever shows up looking established and easy to contact gets the job, and often the next ten.",
      "The coast also means salt air, which is hard on AC condensers, roofs, exterior paint, and fixtures. That creates recurring work. Your website should make it obvious you handle it, with service pages that match what Oceanside homeowners actually search for instead of one generic \"Services\" page.",
    ],
    areas: ['South Oceanside', 'Downtown & the Coast Highway corridor', 'Fire Mountain', 'Rancho del Oro', 'Mission San Luis Rey', 'Morro Hills'],
    tradeFocus: [
      { slug: 'hvac-plumbing-electrical', text: 'Emergency-ready pages with click-to-call up front, for the "AC went out" and "water heater leaking" searches that happen on a phone.' },
      { slug: 'cleaning-landscaping', text: 'Recurring-service and move-in/move-out cleaning pages for a city with lots of people moving in and out.' },
      { slug: 'roofing-restoration', text: 'Before/after galleries and repair content for coastal wear and storm damage.' },
    ],
    faqs: [
      {
        q: 'Do you only work with Oceanside businesses?',
        a: "No. We're based in San Diego and work with home service businesses across North County and beyond. But Oceanside is where many of our local searches come from, so we know how customers here look for help.",
      },
      {
        q: 'Can you help my Oceanside business show up on Google Maps?',
        a: 'Yes. Every site launches with local on-page SEO (titles, service-area content, and structured data), and our Growth and Authority plans include Google Business Profile integration. Your website and your Maps listing then reinforce each other instead of telling different stories.',
      },
      ...sharedFaqs('Oceanside'),
    ],
  },
  carlsbad: {
    name: 'Carlsbad',
    title: 'Web Design in Carlsbad, CA for Contractors & Home Services | Causory',
    description:
      'Carlsbad web design for remodelers, landscapers, HVAC, and home service businesses. Premium-looking custom sites that win higher-value jobs. $700 setup + $200/mo.',
    h1: 'Web Design for Carlsbad Home Service Businesses',
    intro:
      'Carlsbad homeowners expect quality and compare carefully before they hire. Your website has to look like the premium company you are.',
    marketTitle: 'In Carlsbad, your website is part of the bid',
    market: [
      "A kitchen remodel in La Costa or a landscape redesign in Aviara is a big decision, and homeowners here research carefully. They compare galleries, read reviews, and judge whether your company looks as polished as the work they want done. A dated or template-looking site quietly takes you out of the running before you ever get to quote.",
      'We build sites that show your best projects first, explain your process clearly, and make requesting an estimate easy. That way the homeowners who reach out are already sold on the quality and are ready to talk about scope.',
    ],
    areas: ['Carlsbad Village', 'La Costa', 'Aviara', 'Bressi Ranch', 'Calavera Hills', 'Olde Carlsbad'],
    tradeFocus: [
      { slug: 'contractors', text: 'Project galleries grouped by remodel type, plus process and financing pages for long, considered purchases.' },
      { slug: 'cleaning-landscaping', text: 'Design-forward landscaping portfolios and recurring maintenance plans that turn one install into a standing contract.' },
      { slug: 'hvac-plumbing-electrical', text: 'Maintenance-plan pages and upgrade content (heat pumps, panel upgrades, EV chargers) alongside emergency service.' },
    ],
    faqs: [
      {
        q: 'My work is high-end. Will the site actually look high-end?',
        a: "That's the point. Every site is custom-designed, not a template, and built around your real project photos. We'd rather show fewer, better projects than a cluttered gallery, because Carlsbad clients judge the whole presentation.",
      },
      {
        q: 'Do you write the content, or do I?',
        a: "We do. You tell us about your services, your process, and what makes you different, and we write it. You review it before launch, and later changes are covered by the Website Care Plan.",
      },
      ...sharedFaqs('Carlsbad'),
    ],
  },
  vista: {
    name: 'Vista',
    title: 'Web Design in Vista, CA for Home Service Businesses | Causory',
    description:
      'Vista web design for plumbers, electricians, HVAC, contractors, and cleaning businesses. Custom, mobile-first sites built to get more calls. $700 setup + $200/mo.',
    h1: 'Websites for Vista Contractors & Home Service Pros',
    intro:
      'Plenty of good Vista trades businesses still run on word of mouth and a Facebook page. A real website turns those referrals into booked jobs and brings in customers who have never heard of you.',
    marketTitle: 'Vista customers search on their phones, and they call the first good option',
    market: [
      "Vista is home to a lot of owner-operated trades businesses, and much of their work comes from referrals. That works until a referral looks you up and finds nothing, or finds a competitor first. A homeowner in Shadowridge with a broken AC on a hot afternoon isn't scrolling far. They call the first company that looks legitimate and has a call button.",
      "We build mobile-first sites with your phone number, service area, and best reviews right up top. You don't need a huge site. You need one that shows up, looks trustworthy, and makes it easy to call you.",
    ],
    areas: ['Shadowridge', 'Downtown Vista', 'Vista Business Park area', 'Buena Creek', 'Hilltop', 'Bonsall & Fallbrook edges'],
    tradeFocus: [
      { slug: 'hvac-plumbing-electrical', text: 'Click-to-call design and service pages for inland heat: AC repair, tune-ups, and maintenance plans.' },
      { slug: 'contractors', text: "Project galleries and quote forms that make a small crew look like the established company it is." },
      { slug: 'cleaning-landscaping', text: 'Simple booking-request flows and recurring-service pages for cleaning and yard maintenance.' },
    ],
    faqs: [
      {
        q: "I've never had a website. Where do I even start?",
        a: "With a quick conversation. Tell us what you do, where you work, and what kind of jobs you want more of. We handle the design, the writing, the hosting, and the technical setup. You review and approve. Most owners spend an hour or two total.",
      },
      {
        q: 'Is a website worth it if I already get plenty of referrals?',
        a: "Referrals still Google you before they call. If they find nothing, or only a Facebook page, some of them call someone else. A website makes sure the people who already heard you're good can confirm it in 30 seconds.",
      },
      ...sharedFaqs('Vista'),
    ],
  },
  escondido: {
    name: 'Escondido',
    title: 'Web Design in Escondido, CA for Home Service Businesses | Causory',
    description:
      'Escondido web design for HVAC, roofing, restoration, landscaping, and contractor businesses. Custom sites that turn local searches into calls. $700 setup + $200/mo.',
    h1: 'Web Design for Escondido Home Service Businesses',
    intro:
      "Hot inland summers, older homes, and big lots keep Escondido trades busy. Your website should make sure that work comes to you.",
    marketTitle: 'Escondido homes keep the trades busy all year',
    market: [
      "Escondido gets much hotter than the coast in summer, so AC repair and replacement searches spike and stay high. The city also has a lot of older housing, including the historic homes around Old Escondido, which means steady demand for electrical upgrades, re-piping, roofing, and restoration work that newer neighborhoods don't need yet.",
      "Larger lots and hillside properties out toward San Pasqual Valley and Hidden Meadows bring landscaping, irrigation, and brush-clearing work too. We build service pages that match each of those searches, so a homeowner looking for exactly what you do lands on a page about exactly that.",
    ],
    areas: ['Old Escondido', 'Downtown & Grand Avenue', 'Felicita', 'San Pasqual Valley', 'Hidden Meadows', 'Kit Carson / South Escondido'],
    tradeFocus: [
      { slug: 'hvac-plumbing-electrical', text: 'Summer-ready AC pages with click-to-call, plus panel-upgrade and re-pipe content for older homes.' },
      { slug: 'roofing-restoration', text: 'Before/after restoration galleries and repair content suited to older and historic homes.' },
      { slug: 'cleaning-landscaping', text: 'Landscaping, irrigation, and property-maintenance pages for larger lots and hillside properties.' },
    ],
    faqs: [
      {
        q: 'We serve Escondido and the surrounding unincorporated areas. Can the site reflect that?',
        a: "Yes. We build your service area into the site's content and structured data, so customers in nearby communities like Hidden Meadows and Valley Center can tell you cover them, and so can Google.",
      },
      {
        q: 'Can you show off restoration and remodel work on older homes?',
        a: "Absolutely. Before/after galleries are one of the most effective things a restoration or remodeling site can have. We organize them by project type so homeowners see the work most like theirs first.",
      },
      ...sharedFaqs('Escondido'),
    ],
  },
};

const CITY_ORDER = ['oceanside', 'carlsbad', 'vista', 'escondido'];

const text = { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)' } as const;
const linkStyle = { color: '#fff', textDecoration: 'underline' } as const;

const CityPage: React.FC = () => {
  const { city: slug = '' } = useParams();
  const city = CITIES[slug];
  if (!city) return <Navigate to="/" replace />;

  const url = `https://causory.com/web-design/${slug}`;
  const others = CITY_ORDER.filter((s) => s !== slug);

  return (
    <>
      <Helmet>
        <title>{city.title}</title>
        <meta name="description" content={city.description} />
        <link rel="canonical" href={url} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                name: `Web design for home service businesses in ${city.name}, CA`,
                serviceType: 'Web Design',
                url,
                areaServed: { '@type': 'City', name: `${city.name}, CA` },
                provider: { '@type': 'LocalBusiness', name: 'Causory', url: 'https://causory.com', telephone: '+1-619-300-8337' },
              },
              {
                '@type': 'FAQPage',
                mainEntity: city.faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              },
            ],
          })}
        </script>
      </Helmet>

      <section id={`web-design-${slug}`} className="home-services">
        <div className="home-services-overlay"></div>
        <div className="container">
          <div className="niche-content">
            <h1 className="section-title scroll-animate">{city.h1}</h1>
            <p className="niche-intro scroll-animate delay-1">
              {city.intro} Part of our{' '}
              <Link to="/home-services" style={linkStyle}>Website as a Service for home service businesses</Link>.
            </p>

            <div className="ai-main-content" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#fff' }}>{city.marketTitle}</h2>
              {city.market.map((p) => (
                <p key={p.slice(0, 24)} style={text}>{p}</p>
              ))}

              <h3 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: '#fff' }}>
                What we build for {city.name} trades
              </h3>
              {city.tradeFocus.map((t) => (
                <p key={t.slug} style={text}>
                  <Link to={`/home-services/${t.slug}`} style={linkStyle}><strong>{tradeNames[t.slug]}</strong></Link>: {t.text}
                </p>
              ))}
            </div>

            <div className="niche-grid">
              <div className="niche-info scroll-animate slide-left delay-2">
                <h4>📍 Areas we serve in and around {city.name}</h4>
                <p>{city.areas.join(' · ')}</p>

                <h4>📈 Local SEO built in</h4>
                <p>
                  Service-area content, location-aware titles, and structured data so Google understands exactly where you work.{' '}
                  <Link to="/services#seo" style={linkStyle}>How our SEO works</Link>.
                </p>

                <h4>🛠️ One flat monthly plan</h4>
                <p>
                  A $700 setup fee to launch, then $200/mo for hosting, security, updates, and changes.{' '}
                  <Link to="/pricing" style={linkStyle}>See pricing</Link>.
                </p>
              </div>

              <div className="niche-features scroll-animate slide-right delay-3">
                <h4>What's Included:</h4>
                <ul>
                  <li>✓ Custom, mobile-first design (no templates)</li>
                  <li>✓ Click-to-call and quote request up front</li>
                  <li>✓ Service pages written for {city.name} searches</li>
                  <li>✓ Reviews and credentials displayed where customers look</li>
                  <li>✓ Google Business Profile integration (Growth &amp; Authority)</li>
                  <li>✓ Hosting, SSL, backups, and ongoing support</li>
                </ul>

                <div className="niche-cta" style={{ marginTop: '2.5rem' }}>
                  <Link to="/contact" state={{ source: `city-${slug}` }} className="niche-button scroll-animate zoom-rotate delay-4">
                    Get a Free Website Concept
                  </Link>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '4rem', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#fff' }}>{city.name} Web Design FAQ</h2>
              <div style={{ display: 'grid', gap: '2rem' }}>
                {city.faqs.map((f) => (
                  <div key={f.q}>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff' }}>{f.q}</h4>
                    <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.9)' }}>{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <p style={{ ...text, textAlign: 'center' }}>
              Also serving{' '}
              {others.map((s, i) => (
                <React.Fragment key={s}>
                  {i > 0 && (i === others.length - 1 ? ', and ' : ', ')}
                  <Link to={`/web-design/${s}`} style={linkStyle}>{CITIES[s].name}</Link>
                </React.Fragment>
              ))}
              , plus the rest of San Diego County.
            </p>

            <div className="niche-cta" style={{ textAlign: 'center', marginTop: '3rem' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>
                Want more calls from {city.name} customers?
              </h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.9)' }}>
                Tell us about your business and we'll build a free concept of your new site before you commit to anything.
              </p>
              <Link to="/contact" state={{ source: `city-${slug}-final` }} className="niche-button scroll-animate zoom-rotate delay-4" style={{ display: 'inline-block', marginBottom: '1rem' }}>
                Build My Free Concept
              </Link>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)' }}>
                📞 Call/Text: <a href="tel:6193008337" style={linkStyle}>619-300-8337</a> | 📅{' '}
                <a href="https://calendly.com/schacht-dan/30min" target="_blank" rel="noopener noreferrer" style={linkStyle}>Book Online</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CityPage;

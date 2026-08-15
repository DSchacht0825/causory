import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    q: "A lot of our jobs go through insurance claims. Can the website actually help with that?",
    a: "Yes — we build content that walks homeowners through what the insurance claim process looks like working with you: documenting the damage, dealing with the adjuster, what's typically covered. That content alone sets you apart from competitors whose sites never mention insurance at all.",
  },
  {
    q: "Storm damage jobs come in waves after bad weather. Does the site need to handle that spike?",
    a: 'Yes. We build a dedicated storm/emergency response page you can point people to right after a storm hits — fast-loading, mobile-first, with click-to-call and a way to request an inspection immediately, since that\'s exactly when search volume for "roof leak repair" and "storm damage" spikes in your area.',
  },
  {
    q: "How important are before/after photos for this trade specifically?",
    a: "More than almost any other trade — roofing and restoration work is highly visual, and homeowners can't inspect a finished roof themselves. Before/after galleries do more to prove quality than any amount of written description, so we build them in as a core page, not an afterthought.",
  },
];

const RoofingRestoration: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Website Design for Roofing &amp; Restoration Companies | Causory</title>
        <meta
          name="description"
          content="Website as a Service for roofing and restoration companies — insurance-claim-friendly content, storm/emergency response pages, and before/after galleries that prove the quality of the work."
        />
        <meta
          name="keywords"
          content="roofing company website design, restoration company website, storm damage repair website, roofing website builder, insurance claim roofing website, roof repair website San Diego"
        />
        <link rel="canonical" href="https://causory.com/home-services/roofing-restoration" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          })}
        </script>
      </Helmet>

      <section id="roofing-restoration" className="home-services">
        <div className="home-services-overlay"></div>
        <div className="container">
          <div className="niche-content">
            <h1 className="section-title scroll-animate">Websites for Roofing &amp; Restoration Companies</h1>
            <p className="niche-intro scroll-animate delay-1">
              Built for storm-driven urgency and insurance-claim complexity — the two things that make roofing and restoration different from every other trade. Part of our{' '}
              <Link to="/home-services" style={{color: '#fff', textDecoration: 'underline'}}>Website as a Service for home service businesses</Link>.
            </p>

            <div className="ai-main-content" style={{marginTop: '3rem', marginBottom: '3rem'}}>
              <h2 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#fff'}}>Storm Damage Search Spikes Overnight — Your Site Needs to Be Ready</h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                After a bad storm, "roof leak repair" and "storm damage roof" searches spike fast, and the companies with a fast, mobile-ready emergency page capture those calls before word-of-mouth even kicks in. The rest of the year, the same visitors are researching insurance claims and comparing before/after work — a different job, but the same site needs to handle both.
              </p>

              <h3 style={{fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: '#fff'}}>⛈️ A Storm Response Page Ready Before You Need It</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                We build a dedicated emergency/storm response page — fast-loading, click-to-call up front, easy inspection request — so you're ready to capture the search spike the moment weather hits your service area, not scrambling to update a generic homepage.
              </p>

              <h3 style={{fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: '#fff'}}>📋 Insurance Claims Explained, Not Left as a Mystery</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                Most roofing sites never mention the insurance claim process at all, even though it's central to how the work actually gets paid for. We build content that walks homeowners through documenting damage, working with adjusters, and what's typically covered — content that sets you apart before a homeowner even calls.
              </p>
            </div>

            <div className="niche-grid">
              <div className="niche-info scroll-animate slide-left delay-2">
                <h4>⛈️ Storm &amp; Emergency Response</h4>
                <p>A fast, mobile-first page built to capture the exact moment search volume spikes after severe weather.</p>

                <h4>📋 Insurance Claim Assistance</h4>
                <p>Content explaining the claims process — a trust-builder most competitor sites skip entirely.</p>

                <h4>🖼️ Before/After Project Galleries</h4>
                <p>Visual proof of quality for a trade homeowners can't easily inspect themselves.</p>

                <h4>🏚️ Water &amp; Fire Restoration</h4>
                <p>Dedicated content for restoration work distinct from standard roof repair and replacement.</p>
              </div>

              <div className="niche-features scroll-animate slide-right delay-3">
                <h4>What's Included:</h4>
                <ul>
                  <li>✓ Storm/emergency response page with click-to-call</li>
                  <li>✓ Insurance-claim-friendly content</li>
                  <li>✓ Before/after project galleries</li>
                  <li>✓ Individual pages per service (Growth &amp; Authority)</li>
                  <li>✓ Online inspection/quote request form connected to your inbox</li>
                  <li>✓ Google Business Profile integration</li>
                  <li>✓ Optional <Link to="/pricing#chatbot" style={{color: '#fff', textDecoration: 'underline'}}>AI chatbot add-on</Link> to capture leads during storm-driven traffic spikes (included on Authority)</li>
                </ul>

                <div className="niche-cta" style={{marginTop: '2.5rem'}}>
                  <Link to="/contact" className="niche-button scroll-animate zoom-rotate delay-4">
                    Get a Free Website Review
                  </Link>
                </div>
              </div>
            </div>

            <div style={{marginTop: '4rem', marginBottom: '3rem'}}>
              <h2 style={{fontSize: '2rem', marginBottom: '2rem', color: '#fff'}}>Frequently Asked Questions</h2>
              <div style={{display: 'grid', gap: '2rem'}}>
                {faqs.map((f) => (
                  <div key={f.q}>
                    <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff'}}>{f.q}</h4>
                    <p style={{fontSize: '1.05rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.9)'}}>{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="niche-cta" style={{textAlign: 'center', marginTop: '4rem'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#fff'}}>Be Ready Before the Next Storm Hits</h3>
              <p style={{fontSize: '1.1rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.9)'}}>
                Free consultation — we'll look at your current site and tell you exactly where storm-driven leads are slipping through.
              </p>
              <Link to="/contact" className="niche-button scroll-animate zoom-rotate delay-4" style={{display: 'inline-block', marginBottom: '1rem'}}>
                Schedule Free Consultation
              </Link>
              <p style={{fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)'}}>
                📞 Call/Text: <a href="tel:6193008337" style={{color: '#fff', textDecoration: 'underline'}}>619-300-8337</a> | 📅 <a href="https://calendly.com/schacht-dan/30min" target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'underline'}}>Book Online</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoofingRestoration;

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    q: "Half our calls are emergencies — no AC, no hot water, no power. Shouldn't the website just focus on that?",
    a: "Emergency calls need your phone number visible within one second of the page loading — no scrolling, no hunting. But the same visitors also search ahead of time for maintenance plans and installations, so the site needs both: an unmissable emergency path and a clear one for planned work, not just one or the other.",
  },
  {
    q: 'Can you build a maintenance plan / service agreement page?',
    a: "Yes, and it's one of the highest-value pages we build for HVAC and plumbing companies — a maintenance plan turns a one-time repair customer into recurring revenue. We build the page to explain what's included and make signing up as easy as requesting a repair.",
  },
  {
    q: 'Do you build separate pages for AC repair, installation, and water heaters, or is that all one services page?',
    a: 'Separate pages, on Growth and Authority plans. "AC not cooling" and "water heater installation" are different searches with different intent — one dedicated page per service is what lets you rank for both instead of competing with yourself on a single crowded page.',
  },
];

const HvacPlumbingElectrical: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Website Design for HVAC, Plumbing &amp; Electrical Companies | Causory</title>
        <meta
          name="description"
          content="Website as a Service for HVAC, plumbing, and electrical companies — emergency-ready design with click-to-call up front, maintenance plan pages, and per-service pages that turn one-time repairs into recurring customers."
        />
        <meta
          name="keywords"
          content="HVAC website design, plumber website design, electrician website design, HVAC maintenance plan website, emergency plumber website, HVAC website builder, plumbing company website San Diego"
        />
        <link rel="canonical" href="https://causory.com/home-services/hvac-plumbing-electrical" />
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

      <section id="hvac-plumbing-electrical" className="home-services">
        <div className="home-services-overlay"></div>
        <div className="container">
          <div className="niche-content">
            <h1 className="section-title scroll-animate">Websites for HVAC, Plumbing &amp; Electrical Companies</h1>
            <p className="niche-intro scroll-animate delay-1">
              Built for the two ways people find you: a 2am emergency search and a planned maintenance decision. Part of our{' '}
              <Link to="/home-services" style={{color: '#fff', textDecoration: 'underline'}}>Website as a Service for home service businesses</Link>.
            </p>

            <div className="ai-main-content" style={{marginTop: '3rem', marginBottom: '3rem'}}>
              <h2 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#fff'}}>"AC Not Cooling" Is a Different Visitor Than "AC Maintenance Plan"</h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                One visitor needs your phone number in the next ten seconds. The other is comparing maintenance plans before committing to one company for the year. Most trade sites optimize for only one of those — an emergency banner with nothing else, or a brochure site with the phone number buried in the footer. We build for both at once.
              </p>

              <h3 style={{fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: '#fff'}}>🚨 Emergency-Ready, Click-to-Call Above the Fold</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                Someone with no AC in August isn't reading your homepage — they're looking for the phone number. We put click-to-call front and center on mobile, with service-area pages so you show up for "AC repair [your city]," not just your brand name.
              </p>

              <h3 style={{fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: '#fff'}}>🔧 Maintenance Plans Turn Repairs Into Recurring Revenue</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                A repair customer is a one-time transaction unless you give them a reason to sign up for something ongoing. We build a dedicated maintenance-plan page that makes what's included clear and signing up as easy as requesting a repair — the highest-value page on the whole site for turning one job into a year of business.
              </p>
            </div>

            <div className="niche-grid">
              <div className="niche-info scroll-animate slide-left delay-2">
                <h4>🌡️ HVAC Repair &amp; Installation</h4>
                <p>Dedicated pages for AC repair, furnace installation, and system replacement — each ranking for its own specific search.</p>

                <h4>🚿 Plumbing</h4>
                <p>Emergency leak and water heater pages built for click-to-call, alongside planned installation and repipe content.</p>

                <h4>⚡ Electrical</h4>
                <p>Panel upgrades, EV charger installs, and safety inspections — content that builds trust for work homeowners can't DIY.</p>

                <h4>🔁 Maintenance &amp; Service Plans</h4>
                <p>A dedicated recurring-revenue page that turns a single repair customer into a year-round contract.</p>
              </div>

              <div className="niche-features scroll-animate slide-right delay-3">
                <h4>What's Included:</h4>
                <ul>
                  <li>✓ Click-to-call front and center on mobile</li>
                  <li>✓ Service-area pages for every city you cover</li>
                  <li>✓ Individual pages per service (Growth &amp; Authority)</li>
                  <li>✓ Maintenance plan / service agreement page</li>
                  <li>✓ Online quote/request form connected to your inbox</li>
                  <li>✓ Google Business Profile integration</li>
                  <li>✓ Optional <Link to="/pricing#chatbot" style={{color: '#fff', textDecoration: 'underline'}}>AI chatbot add-on</Link> to catch after-hours emergency leads (included on Authority)</li>
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
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#fff'}}>Never Lose an Emergency Call to a Slow Website Again</h3>
              <p style={{fontSize: '1.1rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.9)'}}>
                Free consultation — we'll look at your current site and tell you exactly where emergency leads are slipping through.
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

export default HvacPlumbingElectrical;

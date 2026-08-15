import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    q: 'Why does a home service business need a website instead of just relying on Google Business Profile and reviews?',
    a: "Your Google Business Profile gets people to consider you, but it can't answer the specific questions that close a job — service area, pricing approach, financing, licensing, or what a repair actually involves. A site built for your trade closes that gap, and it's the asset that ranks you in the map pack and organic results your competitors are fighting over.",
  },
  {
    q: "What's different about a site built for contractors, HVAC, or cleaning companies vs. a generic small business site?",
    a: 'The pages that matter are different. Service-area pages for each city or neighborhood you cover, a clear "request a quote" path that doesn\'t bury the phone number, before/after project galleries, and licensing/insurance info displayed where it builds trust — not a generic "About Us" template.',
  },
  {
    q: 'Do you build separate pages for each service we offer (e.g. AC repair, installation, maintenance)?',
    a: "Yes, on Growth and Authority plans. Dedicated pages per service and per service area are what let you rank for specific searches like \"AC repair [your city]\" instead of competing only on your homepage for every keyword at once.",
  },
  {
    q: 'Can you set up online quote or booking requests?',
    a: 'Yes — an online quote/request form is included starting on the Growth plan, so leads can request a job without waiting on hold. We connect it to your email or CRM so nothing falls through the cracks.',
  },
  {
    q: 'How does the AI chatbot help a home service business specifically?',
    a: "It answers the after-hours questions that would otherwise go to voicemail — do you service my area, what's your typical turnaround, do you offer financing — and captures contact info so you can follow up first thing in the morning instead of losing the lead to whoever calls back fastest. It's included on our Authority plan.",
  },
  {
    q: 'Do you work with home service businesses outside San Diego?',
    a: "Yes. While we're based in San Diego, CA, we build sites for contractors, trades, and home service companies across the United States. The whole process — discovery, design, build, launch — happens remotely.",
  },
];

const HomeServices: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Website as a Service for Home Service Businesses | Contractors, HVAC, Cleaning, Roofing | Causory</title>
        <meta
          name="description"
          content="Website as a Service built for home service businesses — general contractors, HVAC/plumbing/electrical, cleaning & landscaping, roofing & restoration. Service-area pages, quote forms, and local SEO that generates leads."
        />
        <meta
          name="keywords"
          content="website as a service home services, contractor website design, HVAC website design, plumber website, electrician website, cleaning company website design, landscaping website, roofing company website, restoration company website, home service business website"
        />
        <link rel="canonical" href="https://causory.com/home-services" />
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

      <section id="home-services" className="home-services">
        <div className="home-services-overlay"></div>
        <div className="container">
          <div className="niche-content">
            <h1 className="section-title scroll-animate">Website as a Service for Home Service Businesses</h1>
            <p className="niche-intro scroll-animate delay-1">
              A website built for the way people actually search for a contractor, technician, or cleaning crew — service-area pages, a fast quote request, and local SEO that keeps the phone ringing. See our{' '}
              <Link to="/pricing" style={{color: '#fff', textDecoration: 'underline'}}>Launch, Growth, and Authority plans</Link>.
            </p>

            <div className="ai-main-content" style={{marginTop: '3rem', marginBottom: '3rem'}}>
              <h2 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#fff'}}>Homeowners Search by Problem and Location, Not by Company Name</h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                "AC not cooling [city]," "emergency plumber near me," "roof leak repair [neighborhood]" — that's how the job actually gets found. A generic one-page site with a services list can't compete for those searches. We build dedicated pages per service and per service area, so you show up for the specific problem someone's searching, not just your brand name.
              </p>

              <h3 style={{fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: '#fff'}}>📋 A Quote Request That Doesn't Lose the Job</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                Every extra step between "I need this fixed" and getting a response costs you the job to a competitor who answers faster. We build a short, clear quote/request form alongside a prominent phone number, so visitors can reach you the way they prefer.
              </p>

              <h3 style={{fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: '#fff'}}>🛠️ Trust Signals That Actually Matter for Trades</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                Licensing, insurance, years in business, and real before/after project photos do more to close a home service job than polished stock photography. We build those in as standard, not an afterthought.
              </p>
            </div>

            <div className="niche-grid">
              <div className="niche-info scroll-animate slide-left delay-2">
                <h4><Link to="/home-services/contractors" style={{color: '#fff'}}>🔨 General Contractors &amp; Remodeling</Link></h4>
                <p>Project galleries, service pages by trade (kitchens, additions, remodels), and a quote request built for jobs that take real research before someone commits.</p>

                <h4><Link to="/home-services/hvac-plumbing-electrical" style={{color: '#fff'}}>🌡️ HVAC, Plumbing &amp; Electrical</Link></h4>
                <p>Emergency-ready design with click-to-call up front, service-area pages, and maintenance-plan pages that turn one-time repairs into recurring customers.</p>

                <h4><Link to="/home-services/cleaning-landscaping" style={{color: '#fff'}}>🧹 Cleaning, Landscaping &amp; Maintenance</Link></h4>
                <p>Recurring-service pages, easy online booking requests, and review-forward design — the trust signals that turn a one-time clean into a standing contract.</p>

                <h4><Link to="/home-services/roofing-restoration" style={{color: '#fff'}}>🏠 Roofing &amp; Restoration</Link></h4>
                <p>Insurance-claim-friendly content, storm/emergency response messaging, and before/after galleries that show the quality of the work, not just describe it.</p>
              </div>

              <div className="niche-features scroll-animate slide-right delay-3">
                <h4>What's Included:</h4>
                <ul>
                  <li>✓ Service-area pages for every city or neighborhood you cover</li>
                  <li>✓ Individual pages per service (Growth &amp; Authority)</li>
                  <li>✓ Online quote/request form connected to your inbox</li>
                  <li>✓ Click-to-call front and center on mobile</li>
                  <li>✓ Before/after project galleries</li>
                  <li>✓ Licensing, insurance &amp; credentials displayed prominently</li>
                  <li>✓ Google Business Profile integration</li>
                  <li>✓ Optional <Link to="/pricing#chatbot" style={{color: '#fff', textDecoration: 'underline'}}>AI chatbot add-on</Link> for after-hours leads (included on Authority)</li>
                </ul>

                <div className="ai-industries" style={{marginTop: '2.5rem'}}>
                  <h3 style={{fontSize: '1.5rem', marginBottom: '1.5rem'}}>Built For:</h3>
                  <ul style={{fontSize: '1.05rem', lineHeight: '2'}}>
                    <li>• General contractors &amp; remodelers</li>
                    <li>• HVAC, plumbing &amp; electrical companies</li>
                    <li>• Cleaning &amp; landscaping businesses</li>
                    <li>• Roofing &amp; restoration companies</li>
                    <li>• Any home service business that relies on local search</li>
                  </ul>
                </div>

                <div className="niche-cta">
                  <Link to="/contact" className="niche-button scroll-animate zoom-rotate delay-4">
                    Get a Free Website Review
                  </Link>
                </div>
              </div>
            </div>

            <div style={{marginTop: '4rem', marginBottom: '3rem', background: 'rgba(255,255,255,0.05)', padding: '3rem', borderRadius: '12px'}}>
              <h2 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#fff'}}>Why Home Service Businesses Work With Causory</h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
                We build the pages that actually generate calls and quote requests for trades — service-area pages, per-service pages, and a quote flow that doesn't make someone hunt for your phone number — instead of a generic small-business template with your logo dropped in.
              </p>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                It's all delivered as <Link to="/pricing" style={{color: '#fff', textDecoration: 'underline'}}>Website as a Service</Link> — a build fee to launch, then a flat monthly Website Care Plan that keeps it hosted, secure, and current.
              </p>
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
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#fff'}}>Ready for a Website That Books More Jobs?</h3>
              <p style={{fontSize: '1.1rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.9)'}}>
                Free consultation — we'll look at your current site and tell you exactly where you're losing quote requests.
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

export default HomeServices;

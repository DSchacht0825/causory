import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    q: 'Our jobs are big-ticket — kitchens, additions, whole-home remodels. How does a website actually help close those?',
    a: "A remodel is a considered purchase, not an impulse call. Homeowners research for weeks before they reach out — comparing project galleries, reading about your process, checking licensing. Your site needs to do that convincing before the phone ever rings, with real before/after work organized by project type, not a stock-photo hero image and a generic 'contact us' form.",
  },
  {
    q: 'Should our past projects be organized differently than a typical portfolio page?',
    a: "Yes. A single mixed portfolio buries what a homeowner is actually looking for. We build project galleries grouped by type — kitchens, bathrooms, additions, whole-home — so someone planning a kitchen remodel sees kitchen work first, not your deck projects.",
  },
  {
    q: 'Do you handle financing and licensing information, or is that on us to write?',
    a: "We build the pages — financing options, licensing and bonding info, insurance coverage — in the places homeowners actually look for them before committing to a contractor, which is usually a dedicated trust/credentials section, not buried in an About page nobody reads.",
  },
];

const Contractors: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Website Design for General Contractors &amp; Remodelers | Causory</title>
        <meta
          name="description"
          content="Website as a Service for general contractors and remodeling companies — project galleries organized by type, financing and licensing built in, and a quote flow suited to big-ticket, considered purchases."
        />
        <meta
          name="keywords"
          content="general contractor website design, remodeling company website, contractor website builder, kitchen remodel website, home addition contractor website, contractor web design San Diego"
        />
        <link rel="canonical" href="https://causory.com/home-services/contractors" />
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

      <section id="contractors" className="home-services">
        <div className="home-services-overlay"></div>
        <div className="container">
          <div className="niche-content">
            <h1 className="section-title scroll-animate">Websites for General Contractors &amp; Remodelers</h1>
            <p className="niche-intro scroll-animate delay-1">
              A remodel is a weeks-long decision, not a same-day call — your site needs to build the trust that closes it. Part of our{' '}
              <Link to="/home-services" style={{color: '#fff', textDecoration: 'underline'}}>Website as a Service for home service businesses</Link>.
            </p>

            <div className="ai-main-content" style={{marginTop: '3rem', marginBottom: '3rem'}}>
              <h2 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#fff'}}>Homeowners Research Contractors Before They Ever Call</h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                A kitchen remodel or home addition is a five- or six-figure decision. Homeowners compare project galleries, read your process, and check licensing across multiple contractors before requesting a single quote. If your site doesn't do that convincing work, you lose the job before the conversation even starts.
              </p>

              <h3 style={{fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: '#fff'}}>🖼️ Project Galleries Organized by Type, Not Dumped Together</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                Someone planning a kitchen remodel doesn't want to scroll past your deck and bathroom work to find it. We build galleries grouped by project type — kitchens, bathrooms, additions, whole-home — so the work most relevant to a visitor's project is what they see first.
              </p>

              <h3 style={{fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: '#fff'}}>📐 Process, Timeline &amp; Financing — Not Just a Contact Form</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                What does working with you actually look like — design, permitting, build, walkthrough? How long does a typical addition take? Do you offer financing? These are the questions that keep a homeowner from picking up the phone. We put the answers on the page instead of making every visitor ask.
              </p>
            </div>

            <div className="niche-grid">
              <div className="niche-info scroll-animate slide-left delay-2">
                <h4>🏠 Kitchens &amp; Bathrooms</h4>
                <p>Before/after galleries and project pages built for the two remodel types homeowners search for most specifically.</p>

                <h4>🏗️ Additions &amp; Whole-Home Remodels</h4>
                <p>Content that handles the longer sales cycle — process, timeline, and permitting explained clearly, not left for a phone call to cover.</p>

                <h4>💳 Financing &amp; Estimates</h4>
                <p>A dedicated page for financing options and how estimates work, so cost concerns get addressed before someone abandons your site.</p>

                <h4>📜 Licensing, Bonding &amp; Insurance</h4>
                <p>Credentials displayed where homeowners actually look for them when vetting a contractor for a major project.</p>
              </div>

              <div className="niche-features scroll-animate slide-right delay-3">
                <h4>What's Included:</h4>
                <ul>
                  <li>✓ Project galleries grouped by remodel type</li>
                  <li>✓ Dedicated pages per service (Growth &amp; Authority)</li>
                  <li>✓ Financing &amp; estimate request pages</li>
                  <li>✓ Licensing, bonding &amp; insurance displayed prominently</li>
                  <li>✓ Online quote/request form connected to your inbox</li>
                  <li>✓ Google Business Profile integration</li>
                  <li>✓ Optional <Link to="/pricing#chatbot" style={{color: '#fff', textDecoration: 'underline'}}>AI chatbot add-on</Link> for after-hours leads (included on Authority)</li>
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
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#fff'}}>Ready for a Website That Wins the Bigger Jobs?</h3>
              <p style={{fontSize: '1.1rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.9)'}}>
                Free consultation — we'll look at your current site and tell you exactly where homeowners are dropping off before they request a quote.
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

export default Contractors;

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    q: "Most of our business is repeat customers, not one-off jobs. How does that change the website?",
    a: "It shifts the whole goal from winning a single job to winning a standing relationship. We build the site around recurring-service plans and easy rebooking, with reviews and before/after photos doing the trust-building — since letting someone into your home regularly is a bigger trust decision than a one-time repair.",
  },
  {
    q: "Can visitors actually book or request service online instead of calling?",
    a: "Yes — an online booking/request form is included starting on the Growth plan, connected straight to your email or scheduling tool, so someone can lock in a cleaning or lawn visit without waiting for a callback.",
  },
  {
    q: "Do background checks, insurance, and bonding actually belong on the website?",
    a: "For this trade, yes — more than almost any other. You're asking someone to let your crew into their home or yard regularly. Insurance, bonding, and background-checked staff are exactly the reassurance that turns a hesitant visitor into a booked customer, so we display it prominently instead of burying it in an About page.",
  },
];

const CleaningLandscaping: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Website Design for Cleaning, Landscaping &amp; Maintenance Companies | Causory</title>
        <meta
          name="description"
          content="Website as a Service for cleaning, landscaping, and maintenance businesses — recurring-service pages, easy online booking, and review-forward design built to turn a one-time job into a standing contract."
        />
        <meta
          name="keywords"
          content="cleaning company website design, landscaping company website, house cleaning website builder, lawn care website design, recurring cleaning service website, maid service website San Diego"
        />
        <link rel="canonical" href="https://causory.com/home-services/cleaning-landscaping" />
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

      <section id="cleaning-landscaping" className="home-services">
        <div className="home-services-overlay"></div>
        <div className="container">
          <div className="niche-content">
            <h1 className="section-title scroll-animate">Websites for Cleaning, Landscaping &amp; Maintenance Companies</h1>
            <p className="niche-intro scroll-animate delay-1">
              Built to turn a one-time booking into a standing contract — recurring-service pages, easy rebooking, and the trust signals that get someone comfortable letting your crew in regularly. Part of our{' '}
              <Link to="/home-services" style={{color: '#fff', textDecoration: 'underline'}}>Website as a Service for home service businesses</Link>.
            </p>

            <div className="ai-main-content" style={{marginTop: '3rem', marginBottom: '3rem'}}>
              <h2 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#fff'}}>The Goal Isn't One Job — It's a Standing Relationship</h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                Unlike an emergency repair, cleaning and landscaping are recurring by nature — and the site should sell the ongoing relationship, not just a single visit. That means recurring-service pricing front and center, easy rebooking, and trust signals built for letting someone into your home or yard on a schedule, not a one-time transaction.
              </p>

              <h3 style={{fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: '#fff'}}>📅 Booking That Doesn't Require a Phone Call</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                A homeowner comparing a few cleaning or lawn companies will often book with whichever one lets them request a time online, right now, without waiting on hold. We build that request flow in from the start.
              </p>

              <h3 style={{fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: '#fff'}}>⭐ Reviews and Before/After Photos Do the Selling</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                Letting a crew into your home regularly is a trust decision more than a price decision. Real reviews, before/after photos, and visible insurance/bonding information do more to convert a hesitant visitor than any amount of sales copy.
              </p>
            </div>

            <div className="niche-grid">
              <div className="niche-info scroll-animate slide-left delay-2">
                <h4>🏠 Recurring House Cleaning</h4>
                <p>Weekly, bi-weekly, and monthly plan pages with pricing clear enough that someone can decide without calling first.</p>

                <h4>🧽 Deep &amp; One-Time Cleaning</h4>
                <p>A separate path for move-in/move-out and one-time deep cleans, so recurring-plan pricing doesn't confuse a different kind of buyer.</p>

                <h4>🌿 Lawn Care &amp; Landscaping</h4>
                <p>Seasonal service pages and recurring maintenance plans built the same way as your actual service model — not a generic "our services" list.</p>

                <h4>🛡️ Trust &amp; Credentials</h4>
                <p>Insurance, bonding, and background-checked staff displayed where a hesitant homeowner is actually looking for it.</p>
              </div>

              <div className="niche-features scroll-animate slide-right delay-3">
                <h4>What's Included:</h4>
                <ul>
                  <li>✓ Recurring-service plan pages with clear pricing</li>
                  <li>✓ Online booking/request form connected to your inbox</li>
                  <li>✓ Individual pages per service (Growth &amp; Authority)</li>
                  <li>✓ Insurance, bonding &amp; credentials displayed prominently</li>
                  <li>✓ Before/after photo galleries</li>
                  <li>✓ Google Business Profile integration</li>
                  <li>✓ Optional <Link to="/pricing#chatbot" style={{color: '#fff', textDecoration: 'underline'}}>AI chatbot add-on</Link> to capture after-hours booking requests (included on Authority)</li>
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
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#fff'}}>Ready for a Website That Turns Visitors Into Standing Customers?</h3>
              <p style={{fontSize: '1.1rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.9)'}}>
                Free consultation — we'll look at your current site and tell you exactly where recurring bookings are slipping away.
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

export default CleaningLandscaping;

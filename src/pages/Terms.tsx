import React from 'react';
import { Helmet } from 'react-helmet';

const Terms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Causory</title>
        <meta name="description" content="Causory's terms of service: our Website as a Service plans, billing, cancellation, and website ownership terms." />
        <link rel="canonical" href="https://causory.com/terms" />
      </Helmet>

      <section id="terms" className="about">
        <div className="container">
          <div className="about-content">
            <h1 className="section-title scroll-animate">Terms of Service</h1>
            <div className="about-text">
              <p className="about-intro">
                Effective date: August 14, 2026
              </p>

              <p>
                These terms govern your use of causory.com and any Website as a Service (WaaS) engagement with Causory ("Causory," "we," "us," or "our"). By using our site or engaging us for services, you agree to the terms below.
              </p>

              <div className="about-section" style={{ marginTop: '2rem' }}>
                <h4>Our Services</h4>
                <p>
                  Causory provides Website as a Service for home service businesses: a one-time setup fee to design and build your custom website, then a flat $200/mo Website Care Plan covering hosting, SSL, security monitoring, daily backups, content changes, and technical support on every plan. Plan tiers and what's included in each are described on our <a href="/pricing">Pricing</a> page.
                </p>
              </div>

              <div className="about-section">
                <h4>Payment Terms</h4>
                <ul>
                  <li>The setup fee is due at project kickoff, before design work begins.</li>
                  <li>The $200/mo Website Care Plan is billed monthly starting at launch.</li>
                  <li>Accounts more than 15 days past due may have hosting and support suspended until payment is received.</li>
                </ul>
              </div>

              <div className="about-section">
                <h4>Cancellation</h4>
                <p>
                  You may cancel your Website Care Plan at any time with 30 days' written notice to <a href="mailto:info@causory.com">info@causory.com</a>. Setup fees are non-refundable once design or development work has begun. Hosting and support end at the close of your final billing period.
                </p>
              </div>

              <div className="about-section">
                <h4>Ownership</h4>
                <p>
                  Once your setup fee is paid in full, you own the design and content created specifically for your site. Causory retains rights to its own reusable code, frameworks, and tools used to build it. If you cancel your Website Care Plan, we'll provide a reasonable window to request an export of your site files before hosting is deactivated.
                </p>
              </div>

              <div className="about-section">
                <h4>No Guarantee of Results</h4>
                <p>
                  We build every site with SEO best practices in mind, but we don't control search engine algorithms and can't guarantee specific rankings, traffic, or lead volume.
                </p>
              </div>

              <div className="about-section">
                <h4>Limitation of Liability</h4>
                <p>
                  Causory is not liable for indirect, incidental, or consequential damages, including lost profits or lost business, arising from your use of our services. We'll make commercially reasonable efforts to restore service promptly in the event of downtime.
                </p>
              </div>

              <div className="about-section">
                <h4>Third-Party Services</h4>
                <p>
                  Your site may integrate with third-party tools such as scheduling software, hosting infrastructure, and the AI providers behind our chatbot add-on. Those providers' own terms apply to their services.
                </p>
              </div>

              <div className="about-section">
                <h4>Changes to These Terms</h4>
                <p>
                  We may update these terms from time to time. Continued use of our services after a change means you accept the updated terms.
                </p>
              </div>

              <div className="about-section">
                <h4>Contact Us</h4>
                <p>
                  Questions about these terms? Reach us at{' '}
                  <a href="mailto:info@causory.com">info@causory.com</a> or{' '}
                  <a href="tel:6193008337">(619) 300-8337</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;

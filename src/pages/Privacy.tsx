import React from 'react';
import { Helmet } from 'react-helmet';

const Privacy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Causory</title>
        <meta name="description" content="Causory's privacy policy: what information we collect, how we use it, and how to contact us with questions." />
        <link rel="canonical" href="https://causory.com/privacy" />
      </Helmet>

      <section id="privacy" className="about">
        <div className="container">
          <div className="about-content">
            <h1 className="section-title scroll-animate">Privacy Policy</h1>
            <div className="about-text">
              <p className="about-intro">
                Effective date: July 9, 2026
              </p>

              <p>
                Causory ("Causory," "we," "us," or "our") provides Website as a Service (WaaS) — website design, hosting, and SEO — along with an optional AI chatbot add-on. This policy explains what information we collect through causory.com, how we use it, and the choices you have.
              </p>

              <div className="about-section" style={{ marginTop: '2rem' }}>
                <h4>Information We Collect</h4>
                <ul>
                  <li><strong>Contact form &amp; chatbot submissions</strong> – name, email address, phone number, and any message details you provide when you contact us or chat with our website assistant.</li>
                  <li><strong>Scheduling information</strong> – if you book a meeting via Calendly, information you provide there is subject to Calendly's own privacy practices.</li>
                  <li><strong>Usage data</strong> – basic analytics about how visitors use our site (e.g. pages viewed, general location, device/browser type), collected automatically to help us understand and improve the site.</li>
                </ul>
              </div>

              <div className="about-section">
                <h4>How We Use Information</h4>
                <ul>
                  <li>To respond to inquiries and provide requested information about our services</li>
                  <li>To follow up on leads generated through our contact form or chatbot</li>
                  <li>To schedule consultations and meetings</li>
                  <li>To improve our website and services</li>
                </ul>
                <p style={{ marginTop: '1rem' }}>
                  We do not sell your personal information to third parties.
                </p>
              </div>

              <div className="about-section">
                <h4>Third-Party Services</h4>
                <p>
                  We use third-party tools to operate our business and website, including hosting providers, scheduling software (Calendly), and AI services that power our website chatbot. These providers may process your information on our behalf, subject to their own privacy policies.
                </p>
              </div>

              <div className="about-section">
                <h4>Data Retention</h4>
                <p>
                  We retain contact and lead information for as long as reasonably necessary to respond to your inquiry and maintain business records, unless you request deletion sooner.
                </p>
              </div>

              <div className="about-section">
                <h4>Your Choices</h4>
                <p>
                  You can request access to, correction of, or deletion of your personal information at any time by contacting us at{' '}
                  <a href="mailto:info@causory.com">info@causory.com</a>.
                </p>
              </div>

              <div className="about-section">
                <h4>Contact Us</h4>
                <p>
                  Questions about this policy? Reach us at{' '}
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

export default Privacy;

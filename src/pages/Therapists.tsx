import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Therapists: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Web Design & AI Voice Assistant for Therapists San Diego | Causory</title>
        <meta name="description" content="HIPAA-compliant websites and AI voice assistants for San Diego therapists and mental health professionals. Never miss a call during sessions with 24/7 AI phone system, secure booking, and compassionate design." />
        <meta name="keywords" content="therapist web design San Diego, AI voice assistant therapist, AI phone system therapy practice, mental health website design, therapy practice website, HIPAA compliant websites, counselor website design, psychologist web design, AI booking system therapist, teletherapy website" />
        <link rel="canonical" href="https://causory.com/therapists" />
      </Helmet>

      <section id="therapist-design" className="therapist-design">
        <div className="therapist-overlay"></div>
        <div className="container">
          <div className="niche-content">
            <h2 className="section-title scroll-animate">Websites & AI Voice Assistants for San Diego Therapists</h2>
            <p className="niche-intro scroll-animate delay-1">
              Building trust online starts with a website that reflects the safety and professionalism your clients need. Never miss a call during sessions with our <Link to="/ai-consulting" style={{color: '#fff', textDecoration: 'underline'}}>HIPAA-compliant AI voice assistant</Link> that answers calls 24/7.
            </p>

            <div className="niche-grid">
              <div className="niche-info scroll-animate slide-left delay-2">
                <h4>🛡️ HIPAA-Compliant Design</h4>
                <p>Your clients' privacy is paramount. We build websites with secure hosting, encrypted forms, and HIPAA-compliant infrastructure that protects sensitive information while maintaining a welcoming, professional appearance.</p>

                <h4>💙 Compassionate User Experience</h4>
                <p>We understand that someone visiting your site may be in crisis or seeking help for the first time. Our designs create calm, trustworthy experiences that guide visitors toward taking that crucial first step.</p>

                <h4>⚕️ Professional Credibility</h4>
                <p>From licensing displays to therapy approach explanations, we showcase your expertise and credentials in ways that build confidence and establish your authority in mental health care.</p>
              </div>

              <div className="niche-features scroll-animate slide-right delay-3">
                <h4>What's Included:</h4>
                <ul>
                  <li>✓ <Link to="/ai-consulting" style={{color: '#fff', textDecoration: 'underline'}}>AI voice assistant</Link> that answers calls during sessions 24/7</li>
                  <li>✓ <Link to="/ai-consulting" style={{color: '#fff', textDecoration: 'underline'}}>AI booking system</Link> for automatic appointment scheduling</li>
                  <li>✓ HIPAA-compliant contact forms and intake processes</li>
                  <li>✓ Secure client portal integration options</li>
                  <li>✓ Appointment booking with encrypted scheduling</li>
                  <li>✓ Crisis resource pages and emergency contacts</li>
                  <li>✓ Insurance and payment information displays</li>
                  <li>✓ Therapy approach and specialization pages</li>
                  <li>✓ Professional bio and credentials showcase</li>
                  <li>✓ Mobile-optimized for clients on-the-go</li>
                </ul>

                <div className="niche-cta">
                  <Link to="/contact" className="niche-button scroll-animate zoom-rotate delay-4">
                    Discuss Your Practice Website
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Therapists;

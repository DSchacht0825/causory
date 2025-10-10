import React from 'react';
import { Link } from 'react-router-dom';

const Recovery: React.FC = () => {
  return (
    <>
      <section id="recovery-design" className="recovery-design">
        <div className="recovery-overlay"></div>
        <div className="container">
          <div className="niche-content">
            <h2 className="section-title scroll-animate">Websites for Recovery & Wellness Centers</h2>
            <p className="niche-intro scroll-animate delay-1">
              Your website can be the bridge between struggle and hope. We create digital spaces that inspire healing and guide people toward recovery.
            </p>

            <div className="niche-grid">
              <div className="niche-info scroll-animate slide-left delay-2">
                <h4>🌅 Hope-Centered Design</h4>
                <p>Recovery websites need to inspire hope while maintaining professionalism. We balance uplifting imagery and messaging with clear, actionable information about your programs and approach to healing.</p>

                <h4>🤝 Community Connection</h4>
                <p>From alumni stories to family resources, we create platforms that showcase the community aspect of recovery, helping visitors see they're not alone in their journey toward wellness.</p>

                <h4>📱 Crisis-Ready Features</h4>
                <p>When someone needs help, they need it now. We build websites with prominent crisis hotlines, immediate contact options, and clear pathways to admission and assessment processes.</p>
              </div>

              <div className="niche-features scroll-animate slide-right delay-3">
                <h4>Specialized Features:</h4>
                <ul>
                  <li>✓ 24/7 crisis hotline integration and prominent placement</li>
                  <li>✓ Addiction assessment tools and questionnaires</li>
                  <li>✓ Insurance verification and admissions processes</li>
                  <li>✓ Program information and treatment approaches</li>
                  <li>✓ Success stories and alumni testimonials</li>
                  <li>✓ Family and loved ones resource sections</li>
                  <li>✓ Dual diagnosis and specialized treatment pages</li>
                  <li>✓ Aftercare and continuing support information</li>
                </ul>

                <div className="niche-cta">
                  <Link to="/contact" className="niche-button scroll-animate zoom-rotate delay-4">
                    Start Your Center's Website
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

export default Recovery;

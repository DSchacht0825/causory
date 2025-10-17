import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Nonprofits: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Affordable Web Design for Nonprofit Organizations | Causory</title>
        <meta name="description" content="Mission-driven websites for nonprofits with secure donation platforms, volunteer management, and impact storytelling that inspires action. Professional, affordable web design that amplifies your cause and drives meaningful change." />
        <meta name="keywords" content="nonprofit web design, charity website design, nonprofit website development, donation website design, volunteer management website, nonprofit marketing, mission-driven web design, affordable nonprofit websites" />
        <link rel="canonical" href="https://causory.com/nonprofits" />
      </Helmet>

      <section id="nonprofit-design" className="nonprofit-design">
        <div className="nonprofit-overlay"></div>
        <div className="container">
          <div className="niche-content">
            <h2 className="section-title scroll-animate">Websites for Nonprofit Organizations</h2>
            <p className="niche-intro scroll-animate delay-1">
              Your mission deserves a digital presence that inspires action and drives meaningful change in your community.
            </p>

            <div className="niche-grid">
              <div className="niche-info scroll-animate slide-left delay-2">
                <h4>🎯 Mission-Driven Design</h4>
                <p>We translate your cause into compelling digital experiences that connect with supporters, volunteers, and the communities you serve. Every design element reinforces your mission and impact.</p>

                <h4>💝 Donation Optimization</h4>
                <p>From seamless donation forms to impact storytelling, we create websites that make giving easy, secure, and meaningful. Our designs help supporters understand exactly how their contributions create change.</p>

                <h4>🌟 Volunteer Engagement</h4>
                <p>Transform visitors into active participants with clear volunteer opportunities, easy sign-up processes, and community building features that keep supporters engaged with your cause.</p>
              </div>

              <div className="niche-features scroll-animate slide-right delay-3">
                <h4>Purpose-Built Features:</h4>
                <ul>
                  <li>✓ Secure donation processing and recurring giving options</li>
                  <li>✓ Volunteer registration and opportunity management</li>
                  <li>✓ Event calendar and fundraiser promotion</li>
                  <li>✓ Impact reporting and transparency pages</li>
                  <li>✓ Grant application and foundation resources</li>
                  <li>✓ Newsletter signup and supporter communication</li>
                  <li>✓ Social media integration and sharing tools</li>
                  <li>✓ ADA compliance for inclusive accessibility</li>
                </ul>

                <div className="niche-cta">
                  <Link to="/contact" className="niche-button scroll-animate zoom-rotate delay-4">
                    Amplify Your Mission Online
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

export default Nonprofits;

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Causory | Website as a Service Team</title>
        <meta name="description" content="Learn about Causory's mission: Website as a Service for home service businesses — a custom-designed website with a setup fee, then a flat $200/mo Website Care Plan, so your site never goes stale after launch." />
        <meta name="keywords" content="about causory, website as a service company, home service business web design, web design team, managed website subscription, web development agency" />
        <link rel="canonical" href="https://causory.com/about" />
      </Helmet>

      <section id="about" className="about">
        <div className="about-overlay"></div>
        <div className="container">
          <div className="about-content">
            <h1 className="section-title scroll-animate">About Causory</h1>
            <div className="about-text">
              <p className="about-intro">
                At Causory, we believe a website shouldn't start going stale the day it launches — so we built Website as a Service.
              </p>

              <p>
                Most web design is a one-time transaction: you pay a large upfront fee, get a site, and it slowly falls behind as plugins age, content stops updating, and SEO stalls. We think that model is broken. <strong>Website as a Service</strong> starts with a setup fee that covers your custom design and launch, then bundles hosting, security, and support into a flat $200/mo Website Care Plan — so your site is actively maintained, not abandoned at launch.
              </p>

              <p>
                Our mission is simple: give home service businesses a website that keeps working for them. A setup fee that's far below a traditional agency project, and no guessing what a "quick update" will cost — just a predictable monthly investment in a site that gets better over time.
              </p>

              <div className="about-grid">
                <div className="about-section">
                  <h4>🌐 Website as a Service</h4>
                  <ul>
                    <li><strong>Custom Website Design</strong> – Beautiful, conversion-focused sites that capture your brand's essence</li>
                    <li><strong>Hosting, Security &amp; Backups</strong> – Fast, reliable hosting with SSL and daily backups included</li>
                    <li><strong>SEO Built In</strong> – On-page foundation plus Google Business Profile and advanced SEO on higher tiers</li>
                    <li><strong>Website Care Plan</strong> – Content changes and technical support handled for you, month after month</li>
                    <li><strong>Home Service Focus</strong> – Service-area pages, quote forms, and trust signals built for trades</li>
                  </ul>
                </div>

                <div className="about-section">
                  <h4>🤖 AI Chatbot</h4>
                  <ul>
                    <li><strong>24/7 Availability</strong> – Answers visitor questions any time your business is closed</li>
                    <li><strong>Trained On Your Business</strong> – Configured on your actual services, pricing, and FAQs</li>
                    <li><strong>Lead Capture</strong> – Collects contact info and hands off warm leads to your team</li>
                    <li><strong>Included on Authority</strong> – At no extra cost on our Authority plan</li>
                  </ul>
                </div>
              </div>

              <div className="about-section" style={{marginTop: '3rem'}}>
                <h4>⚡ Our Process: Built Once, Maintained Forever</h4>
                <p>
                  Every project starts with deep discovery — understanding your business, your customers, and what actually needs to be on the site. We design and launch in 2-4 weeks, then the subscription kicks in: monthly updates, security patches, SEO content, and reporting, so the site keeps improving long after launch.
                </p>
                <p style={{marginTop: '1rem'}}>
                  Our websites aren't just pretty — they're strategic tools designed to convert visitors and support your business goals, backed by a team that's still actively working on your site next month, and the month after that.
                </p>
              </div>

              <div className="about-why">
                <h4>🚀 Why Causory?</h4>
                <p>
                  We're not just designers — we're a <strong>long-term partner</strong> in your website's growth. We bring both technical expertise and business acumen, and we customize every plan to fit your specific needs, budget, and timeline.
                </p>
                <p style={{marginTop: '1rem'}}>
                  Our clients choose us because we speak their language, deliver measurable results, and stay committed long after launch. From small businesses to growing enterprises, we help organizations reach more people and achieve their goals through a website that never stops being maintained.
                </p>
              </div>

              <div className="text-center mt-8">
                <Link to="/contact" className="btn-primary">Let's Work Together</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

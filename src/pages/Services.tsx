import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Services: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Conversion-Focused Websites, Speed, SEO & AI | Causory</title>
        <meta name="description" content="See how Causory builds websites that convert, load fast, rank on Google, and never miss a call — with AI phone systems and chat assistants built in." />
        <meta name="keywords" content="web design services, conversion optimized websites, fast loading websites, SEO web design, AI phone system, AI chat assistant, San Diego web design agency" />
        <link rel="canonical" href="https://www.causory.com/services" />
      </Helmet>

      <section id="services-page" className="about">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title scroll-animate">Our Services</h2>
            <div className="about-text">
              <p className="about-intro">
                Four pillars that turn a website into a growth engine — not just a digital brochure.
              </p>

              <div id="conversion" className="about-section" style={{ marginTop: '2rem' }}>
                <h4>🎨 Websites That Sell</h4>
                <p>
                  A pretty website that doesn't convert is just an expensive business card. We design every page around one goal: turning visitors into customers. That means clear calls-to-action, persuasive copy, trust signals (reviews, credentials, guarantees), and layouts guided by conversion best practices — not just aesthetics.
                </p>
                <ul>
                  <li>Strategic calls-to-action on every page</li>
                  <li>Mobile-first layouts, since most visitors are on their phones</li>
                  <li>Trust-building elements: reviews, credentials, social proof</li>
                  <li>Clear paths to booking, calling, or buying</li>
                </ul>
              </div>

              <div id="speed" className="about-section">
                <h4>⚡ Fast-Loading Sites</h4>
                <p>
                  Every second of load time costs you customers — studies show most visitors abandon a site that takes longer than 3 seconds to load. We build lean, optimized pages with modern hosting and image/code optimization so your site loads instantly and keeps visitors engaged instead of bouncing to a competitor.
                </p>
                <ul>
                  <li>Optimized images and code for near-instant load times</li>
                  <li>Modern hosting built for speed and reliability</li>
                  <li>Mobile performance tuned for real-world connections</li>
                </ul>
              </div>

              <div id="seo" className="about-section">
                <h4>📈 Get Found on Google</h4>
                <p>
                  It doesn't matter how good your website is if no one can find it. Every site we build is optimized for search from day one — proper structure, metadata, local SEO, and content that helps you show up when customers search for what you offer. More visibility means more leads without paying for every click.
                </p>
                <ul>
                  <li>On-page SEO: titles, meta tags, structured data</li>
                  <li>Local SEO to rank for "near me" searches</li>
                  <li>Content built to match how customers actually search</li>
                </ul>
              </div>

              <div id="ai-phone" className="about-section">
                <h4>🤖 AI That Answers Your Phone</h4>
                <p>
                  Missed calls are missed revenue. Our <Link to="/ai-consulting" style={{ textDecoration: 'underline' }}>AI phone systems and chat assistants</Link> answer around the clock — booking appointments, answering FAQs, and qualifying leads even at 2am. You wake up to booked appointments instead of missed opportunities.
                </p>
                <ul>
                  <li>24/7 AI phone answering and appointment booking</li>
                  <li>AI chat assistants that capture leads on your site</li>
                  <li>Integrates with your calendar and CRM</li>
                </ul>
                <p style={{ marginTop: '1rem' }}>
                  <Link to="/ai-consulting" style={{ textDecoration: 'underline' }}>See how AI answering works →</Link>
                </p>
              </div>

              <div className="about-section">
                <h4>Ready to grow your business online?</h4>
                <p>
                  Let's talk about which of these makes the biggest difference for your business right now.
                </p>
              </div>
            </div>

            <div className="niche-cta">
              <Link to="/contact" className="niche-button scroll-animate zoom-rotate delay-4">
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

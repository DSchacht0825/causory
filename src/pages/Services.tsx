import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Services: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Website as a Service for Home Service Businesses | Causory</title>
        <meta name="description" content="See what's included in Causory's Website as a Service plans for home service businesses: conversion-focused design, fast hosting, built-in SEO, and a flat $200/mo Website Care Plan — plus an AI chatbot on Authority." />
        <meta name="keywords" content="website as a service, home service business website, contractor website design, HVAC website design, cleaning company website, roofing website design, website care plan, San Diego web design agency" />
        <link rel="canonical" href="https://causory.com/services" />
      </Helmet>

      <section id="services-page" className="about">
        <div className="container">
          <div className="about-content">
            <h1 className="section-title scroll-animate">Our Services</h1>
            <div className="about-text">
              <p className="about-intro">
                Website as a Service: a one-time setup fee to launch, then everything below bundled into a flat $200/mo Website Care Plan — not a site that starts going stale the day it launches.
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
                  <li>Modern hosting, SSL, and daily backups included</li>
                  <li>Mobile performance tuned for real-world connections</li>
                </ul>
              </div>

              <div id="seo" className="about-section">
                <h4>📈 SEO Built In From Day One</h4>
                <p>
                  It doesn't matter how good your website is if no one can find it. Every site launches with a clean on-page SEO foundation. Growth plans add Google Business Profile integration, and Authority plans add advanced SEO optimization — so visibility keeps improving, not fading after launch.
                </p>
                <ul>
                  <li>On-page SEO: titles, meta tags, structured data</li>
                  <li>Local SEO to rank for "near me" searches</li>
                  <li>Google Business Profile integration on Growth &amp; Authority</li>
                </ul>
              </div>

              <div id="all-inclusive" className="about-section">
                <h4>💳 Setup Fee + $200/mo Website Care Plan</h4>
                <p>
                  A one-time setup fee covers your custom design and launch. After that, every plan includes the same flat $200/mo Website Care Plan — hosting, security, updates, and support. See exactly what's included on each plan.
                </p>
                <ul>
                  <li>Setup fee due at kickoff, then $200/mo on every tier</li>
                  <li>Content changes handled for you</li>
                  <li>Secure hosting, SSL &amp; daily backups included</li>
                </ul>
                <p style={{ marginTop: '1rem' }}>
                  <Link to="/pricing" style={{ textDecoration: 'underline' }}>See plans &amp; pricing →</Link>
                </p>
              </div>

              <div id="chatbot" className="about-section">
                <h4>🤖 AI Chatbot</h4>
                <p>
                  Missed after-hours visitors are missed leads. Our <Link to="/pricing#chatbot" style={{ textDecoration: 'underline' }}>AI chatbot</Link> answers questions, qualifies visitors, and captures contact info around the clock — trained on your specific business.
                </p>
                <ul>
                  <li>24/7 chat trained on your services and FAQs</li>
                  <li>Lead capture with hand-off to your team</li>
                  <li>Included at no extra cost on the Authority plan</li>
                </ul>
                <p style={{ marginTop: '1rem' }}>
                  <Link to="/pricing#chatbot" style={{ textDecoration: 'underline' }}>See how the chatbot works →</Link>
                </p>
              </div>

              <div className="about-section">
                <h4>Ready to grow your business online?</h4>
                <p>
                  Let's talk about which plan makes the biggest difference for your business right now.
                </p>
              </div>
            </div>

            <div className="niche-cta">
              <Link to="/pricing" className="niche-button scroll-animate zoom-rotate delay-4" style={{ marginRight: '1rem' }}>
                See Pricing
              </Link>
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

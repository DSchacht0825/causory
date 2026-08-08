import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    q: 'What is Google Ad Grants and does our nonprofit qualify?',
    a: "Google Ad Grants gives eligible 501(c)(3) nonprofits up to $10,000 per month in free Google Search ads. Most registered nonprofits with a functioning website qualify. The catch is Google requires an active, well-structured site (clear mission, calls to action, working links) and ongoing account management — you can lose eligibility if your click-through rate drops below 5% for two straight months or you go a month with zero tracked conversions. That upkeep is exactly what most small nonprofits don't have staff time for, which is why the grant often goes unused or gets suspended.",
  },
  {
    q: 'Can you set up and manage our Google Ad Grants account?',
    a: "Yes. We build the site and conversion tracking Google requires to approve and keep the grant active, then structure campaigns around what actually converts for nonprofits — volunteer sign-ups, event registration, and donation pages — rather than one generic 'donate now' campaign. Running 3-5 focused campaigns instead of one performs meaningfully better and is easier to keep above the CTR and conversion minimums.",
  },
  {
    q: 'What makes a nonprofit website actually convert donors, not just look nice?',
    a: 'A clear mission statement above the fold, one obvious way to get involved (not five competing buttons), a donation form that works in two clicks, and real impact numbers instead of stock photography. Google itself checks for a lot of this before approving Ad Grants, so building it right also protects your ad eligibility.',
  },
  {
    q: 'Do you build the donation processing itself, or integrate with a platform?',
    a: "We integrate secure, PCI-compliant donation processing (Stripe, Donorbox, or your platform of choice) directly into the site design, including recurring giving. We don't build custom payment processing from scratch — that would be reinventing infrastructure that's already secure and trusted by donors.",
  },
  {
    q: 'Is the site accessible / ADA compliant?',
    a: "We build to WCAG accessibility guidelines — proper contrast, alt text, keyboard navigation, screen-reader-friendly structure. This matters for actual inclusion, and it's also a factor Google and grant reviewers look at.",
  },
  {
    q: 'How does the AI chat assistant help a nonprofit specifically?',
    a: "It answers the questions that otherwise sit in an inbox for days — 'how do I volunteer,' 'is my donation tax-deductible,' 'when's the next event' — 24/7, and can hand off warm leads (a ready volunteer, a major donor inquiry) to your team immediately instead of losing them to response lag.",
  },
];

const Nonprofits: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Web Design & AI Assistant for San Diego Nonprofits | Google Ad Grants Setup | Causory</title>
        <meta name="description" content="Websites, AI chat assistants, and Google Ad Grants setup for San Diego nonprofits. Mission-driven design, donation optimization, and up to $10,000/month in free Google ads done right." />
        <meta name="keywords" content="nonprofit web design San Diego, Google Ad Grants setup, AI assistant nonprofit, AI chatbot charity, charity website design, nonprofit website development, donation website design, volunteer management website, nonprofit marketing, mission-driven web design, affordable nonprofit websites San Diego" />
        <link rel="canonical" href="https://causory.com/nonprofits" />
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

      <section id="nonprofit-design" className="nonprofit-design">
        <div className="nonprofit-overlay"></div>
        <div className="container">
          <div className="niche-content">
            <h1 className="section-title scroll-animate">Websites & AI Assistants for San Diego Nonprofits</h1>
            <p className="niche-intro scroll-animate delay-1">
              Your mission deserves a digital presence that inspires action — and a website built to unlock the <strong>$10,000/month in free Google advertising</strong> most eligible nonprofits never claim. Engage supporters 24/7 with our <Link to="/ai-consulting" style={{color: '#fff', textDecoration: 'underline'}}>AI chat assistants</Link> that answer questions and connect volunteers to your cause.
            </p>

            <div className="ai-main-content" style={{marginTop: '3rem', marginBottom: '3rem'}}>
              <h2 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#fff'}}>The $10,000/Month Most Nonprofits Leave on the Table</h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                Google Ad Grants gives eligible 501(c)(3) organizations up to $10,000 per month in free search advertising. Most nonprofits qualify. Most also either never apply, or get approved and then lose the grant within months because keeping it active requires an ongoing minimum click-through rate and monthly tracked conversions — upkeep that falls off the priority list without dedicated attention.
              </p>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                We build the site structure and conversion tracking Google requires for approval, then set up focused campaigns — typically 3 to 5 running at once around donations, volunteer recruitment, and events, since those convert far better than one generic "donate" campaign — so the grant stays active instead of getting suspended.
              </p>

              <h3 style={{fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: '#fff'}}>🎯 One Clear Ask Per Page</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                A page asking visitors to donate, volunteer, attend an event, and sign up for a newsletter all at once gets none of those things done well. We design each page around a single, obvious next step — donation pages sell donating, volunteer pages sell volunteering — because that's consistently what converts better than a page trying to do everything.
              </p>

              <h3 style={{fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: '#fff'}}>💝 Donation Forms That Don't Lose People</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                Every extra click or field between "I want to give" and "payment complete" costs you donors. We build embedded, mobile-optimized donation forms with recurring-giving options, so the ask and the action happen on the same page instead of redirecting to a third-party checkout.
              </p>
            </div>

            <div className="niche-grid">
              <div className="niche-info scroll-animate slide-left delay-2">
                <h4>🎯 Mission-Driven Design</h4>
                <p>We translate your cause into a digital experience that connects with supporters, volunteers, and the communities you serve, with real impact numbers in place of stock photography.</p>

                <h4>💝 Donation Optimization</h4>
                <p>Embedded, mobile-first donation forms with recurring giving — built to convert, not just look like a form.</p>

                <h4>🌟 Volunteer Engagement</h4>
                <p>Clear volunteer opportunities and low-friction sign-up, so interest turns into action instead of a bounce.</p>
              </div>

              <div className="niche-features scroll-animate slide-right delay-3">
                <h4>Purpose-Built Features:</h4>
                <ul>
                  <li>✓ <Link to="/ai-consulting" style={{color: '#fff', textDecoration: 'underline'}}>AI chat assistant</Link> to engage supporters and answer questions 24/7</li>
                  <li>✓ Google Ad Grants setup, tracking, and ongoing eligibility management</li>
                  <li>✓ Secure donation processing and recurring giving (Stripe/Donorbox)</li>
                  <li>✓ Volunteer registration and opportunity management</li>
                  <li>✓ Event calendar and fundraiser promotion</li>
                  <li>✓ Impact reporting and transparency pages</li>
                  <li>✓ Grant application and foundation resources</li>
                  <li>✓ Newsletter signup and supporter communication</li>
                  <li>✓ Social media integration and sharing tools</li>
                  <li>✓ WCAG/ADA-compliant, accessible design</li>
                </ul>

                <div className="niche-cta">
                  <Link to="/contact" className="niche-button scroll-animate zoom-rotate delay-4">
                    Amplify Your Mission Online
                  </Link>
                </div>
              </div>
            </div>

            <div style={{marginTop: '4rem', marginBottom: '3rem', background: 'rgba(255,255,255,0.05)', padding: '3rem', borderRadius: '12px'}}>
              <h2 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#fff'}}>Why San Diego Nonprofits Work With Causory</h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
                Most web designers treat a nonprofit site like a smaller version of a business site. We treat it as a fundraising and volunteer-recruitment tool first — because that's what it needs to be on a limited budget. That includes the parts most agencies skip: setting up and actually maintaining your Google Ad Grants eligibility, which alone is worth more than most nonprofit marketing budgets combined.
              </p>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                We also build the <Link to="/ai-consulting" style={{color: '#fff', textDecoration: 'underline'}}>AI chat layer</Link> that answers supporter questions after hours, and the <Link to="/services" style={{color: '#fff', textDecoration: 'underline'}}>full site</Link> around it — fast, accessible, and structured the way Google expects before it will approve or keep your ad grant active.
              </p>
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
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#fff'}}>Ready to Claim Your $10,000/Month in Free Ads?</h3>
              <p style={{fontSize: '1.1rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.9)'}}>
                Free 30-minute consultation — we'll check your Ad Grants eligibility, review your current site, and show you exactly what's standing between you and free Google traffic.
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

export default Nonprofits;

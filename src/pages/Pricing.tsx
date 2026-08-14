import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    q: 'Why is there a setup fee if this is a monthly plan?',
    a: "The setup fee covers the actual design and build work to launch your site — real design time, not a template. The $200/mo Website Care Plan then covers hosting, security, updates, and support after launch. That keeps your setup cost well below a traditional agency project while still covering the work that goes into building a custom site.",
  },
  {
    q: 'What does the $200/month Website Care Plan cover?',
    a: "Secure hosting, an SSL certificate, website updates, security monitoring, daily backups, content changes, technical support, performance optimization, and uptime monitoring — every plan includes it, regardless of tier.",
  },
  {
    q: 'Do I own my website?',
    a: "Yes — your domain and content are yours. If you have questions about how a specific handoff or export would work, ask us directly and we'll walk you through it.",
  },
  {
    q: 'Can I switch tiers later?',
    a: 'Yes. Most clients start on Launch or Growth and move up to Authority once they want the extra pages, photography, and the AI chatbot.',
  },
  {
    q: 'Is the AI chatbot included on every plan?',
    a: "It's included at no extra cost on the Authority plan. If you're on Launch or Growth and want it added, just ask — see how the chatbot works below.",
  },
  {
    q: 'How fast do I actually launch?',
    a: 'Most sites launch in 2–4 weeks from kickoff, depending on the plan and how quickly we get content and feedback from you. After launch, your site stays live and actively maintained through the Website Care Plan.',
  },
];

const chatbotFaqs = [
  {
    q: 'How does the chatbot get trained on my business?',
    a: "We build it from your services, pricing approach, FAQs, and booking process — the same content that lives on your WaaS site. It answers the questions visitors actually ask instead of giving generic responses, and it stays in sync as your site's content updates.",
  },
  {
    q: "What happens when it can't answer a question?",
    a: 'It knows its limits. When a visitor asks something outside its training or needs a real judgment call, it collects their contact info and hands the conversation to you instead of guessing — you stay in control of anything sensitive.',
  },
  {
    q: 'How long does it take to set up?',
    a: 'Typically 1-2 weeks. We start with your site content and FAQs, configure the conversation flow, test it, then launch it live on your site as a chat widget.',
  },
];

const Pricing: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Website as a Service Pricing | Launch, Growth &amp; Authority Plans | Causory</title>
        <meta
          name="description"
          content="Causory's Website as a Service plans: a setup fee to launch your custom site, then a $200/mo Website Care Plan for hosting, security, and support. Launch, Growth, and Authority tiers for home service businesses."
        />
        <meta
          name="keywords"
          content="website as a service pricing, home service business website pricing, contractor website pricing, website design and monthly maintenance, website care plan pricing, managed website subscription"
        />
        <link rel="canonical" href="https://causory.com/pricing" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [...faqs, ...chatbotFaqs].map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          })}
        </script>
      </Helmet>

      <section id="pricing" className="about">
        <div className="container">
          <div className="about-content">
            <h1 className="section-title scroll-animate">Website as a Service</h1>
            <p className="about-intro" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
              A setup fee to launch your custom site, then a $200/mo Website Care Plan on every tier — hosting, security, updates, and support, always current.
            </p>

            {/* Pricing Tiers */}
            <div
              className="niche-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                marginBottom: '1.5rem',
              }}
            >
              {/* Launch */}
              <div style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem', color: '#fff' }}>🚀 Launch</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>A professional online presence that helps customers take action</p>
                <p style={{ fontSize: '2.1rem', fontWeight: 'bold', color: '#fff', marginBottom: '0.25rem' }}>
                  $700 <span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'rgba(255,255,255,0.7)' }}>setup</span>
                </p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>
                  + $200<span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'rgba(255,255,255,0.7)' }}>/mo</span>
                </p>
                <ul style={{ fontSize: '1rem', lineHeight: '2', flexGrow: 1 }}>
                  <li>✓ Custom one-page landing site</li>
                  <li>✓ Mobile-friendly design</li>
                  <li>✓ Contact form</li>
                  <li>✓ Click-to-call &amp; email buttons</li>
                  <li>✓ Google Maps integration</li>
                  <li>✓ Social media links</li>
                  <li>✓ Basic SEO</li>
                  <li>✓ Website Care Plan included</li>
                </ul>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>
                  Perfect for new businesses, contractors, and solo professionals.
                </p>
                <Link to="/contact" className="niche-button" style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                  Start My Website
                </Link>
              </div>

              {/* Growth */}
              <div style={{ background: 'rgba(139,92,246,0.15)', border: '2px solid rgba(167,139,250,0.6)', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '-14px', left: '2rem', background: 'linear-gradient(135deg,#8b5cf6,#6366f1)', color: '#fff', fontSize: '0.8rem', fontWeight: 'bold', padding: '0.3rem 0.8rem', borderRadius: '999px' }}>
                  MOST POPULAR
                </span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem', color: '#fff' }}>📈 Growth</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>A complete site designed to generate leads and showcase your services</p>
                <p style={{ fontSize: '2.1rem', fontWeight: 'bold', color: '#fff', marginBottom: '0.25rem' }}>
                  $1,000 <span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'rgba(255,255,255,0.7)' }}>setup</span>
                </p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>
                  + $200<span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'rgba(255,255,255,0.7)' }}>/mo</span>
                </p>
                <ul style={{ fontSize: '1rem', lineHeight: '2', flexGrow: 1 }}>
                  <li>✓ Everything in Launch</li>
                  <li>✓ Up to 5 custom pages (Services, About, Contact, Gallery, FAQ)</li>
                  <li>✓ Testimonials section</li>
                  <li>✓ Online quote/request form</li>
                  <li>✓ Google Business Profile integration</li>
                  <li>✓ Performance optimization</li>
                  <li>✓ Website analytics</li>
                </ul>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>
                  Perfect for home service companies, medical practices, law firms, and growing businesses.
                </p>
                <Link to="/contact" className="niche-button" style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                  Start My Website
                </Link>
              </div>

              {/* Authority */}
              <div style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem', color: '#fff' }}>⭐ Authority</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>A premium online presence that stands out from the competition</p>
                <p style={{ fontSize: '2.1rem', fontWeight: 'bold', color: '#fff', marginBottom: '0.25rem' }}>
                  $1,400 <span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'rgba(255,255,255,0.7)' }}>setup</span>
                </p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>
                  + $200<span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'rgba(255,255,255,0.7)' }}>/mo</span>
                </p>
                <ul style={{ fontSize: '1rem', lineHeight: '2', flexGrow: 1 }}>
                  <li>✓ Everything in Growth</li>
                  <li>✓ Professional headshot session</li>
                  <li>✓ Business branding photography</li>
                  <li>✓ Premium homepage design</li>
                  <li>✓ <a href="#chatbot" style={{ color: '#fff', textDecoration: 'underline' }}>AI-powered chatbot</a> included</li>
                  <li>✓ Advanced SEO optimization</li>
                  <li>✓ Priority support</li>
                  <li>✓ Quarterly website review</li>
                </ul>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>
                  Perfect for attorneys, realtors, medical professionals, and consultants building a personal brand.
                </p>
                <Link to="/contact" className="niche-button" style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                  Start My Website
                </Link>
              </div>
            </div>

            <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '4rem' }}>
              Setup fee due at kickoff. The $200/mo Website Care Plan begins at launch on every tier.
            </p>

            {/* Website Care Plan */}
            <div style={{ marginBottom: '4rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '2.5rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: '#fff', textAlign: 'center' }}>
                ✅ Every Plan Includes the $200/mo Website Care Plan
              </h2>
              <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
                Your monthly plan ensures your website stays secure, fast, and up to date.
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem 2rem', fontSize: '1rem', color: 'rgba(255,255,255,0.9)', maxWidth: '800px', margin: '0 auto' }}>
                <li>✓ Secure hosting</li>
                <li>✓ SSL certificate</li>
                <li>✓ Website updates</li>
                <li>✓ Security monitoring</li>
                <li>✓ Daily backups</li>
                <li>✓ Content changes</li>
                <li>✓ Technical support</li>
                <li>✓ Performance optimization</li>
                <li>✓ Uptime monitoring</li>
              </ul>
            </div>

            {/* AI Chatbot Add-On */}
            <div id="chatbot" style={{ marginBottom: '4rem', scrollMarginTop: '6rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: '#fff', textAlign: 'center' }}>
                🤖 AI Chatbot Add-On
              </h2>
              <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.8)', maxWidth: '700px', margin: '0 auto 2rem' }}>
                Your website works 24/7 — now your front desk can too. Included at no extra cost on Authority; ask us about adding it to Launch or Growth.
              </p>

              <div className="niche-grid">
                <div className="niche-info scroll-animate slide-left delay-2">
                  <h4>💬 Answers Real Questions</h4>
                  <p>Trained on your services, pricing, and FAQs — not a generic script. It handles the questions that would otherwise sit in an inbox for days.</p>

                  <h4>🎯 Qualifies &amp; Captures Leads</h4>
                  <p>It gathers name, contact info, and what the visitor needs, then hands warm leads to you instead of letting them go cold overnight.</p>

                  <h4>🤝 Knows When to Hand Off</h4>
                  <p>When a question needs a human, it says so — collecting contact details and flagging your team rather than guessing at an answer.</p>
                </div>

                <div className="niche-features scroll-animate slide-right delay-3">
                  <h4>What's Included:</h4>
                  <ul>
                    <li>✓ Chat widget trained on your specific business</li>
                    <li>✓ 24/7 availability, no time zone gaps</li>
                    <li>✓ Lead capture with contact hand-off</li>
                    <li>✓ Mobile-responsive chat interface</li>
                    <li>✓ Links directly to your quote/contact flow</li>
                    <li>✓ HIPAA-aware configuration available</li>
                  </ul>
                </div>
              </div>

              <div style={{ display: 'grid', gap: '1.5rem', marginTop: '2.5rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                {chatbotFaqs.map((f) => (
                  <div key={f.q}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: '#fff' }}>{f.q}</h4>
                    <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.85)' }}>{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison Table */}
            <div style={{ marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#fff', textAlign: 'center' }}>
                Website as a Service vs. the Alternatives
              </h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px', color: 'rgba(255,255,255,0.9)' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.2)' }}>
                      <th style={{ textAlign: 'left', padding: '0.75rem', color: '#fff' }}></th>
                      <th style={{ textAlign: 'left', padding: '0.75rem', color: '#fff' }}>Causory WaaS</th>
                      <th style={{ textAlign: 'left', padding: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>Traditional Agency</th>
                      <th style={{ textAlign: 'left', padding: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>DIY Builder</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Setup cost', '$700–$1,400', '$3,000–$20,000+', '$0–$300'],
                      ['Ongoing cost', '$200/mo, same on every tier', 'Unpredictable — billed per change', '$16–$60/mo, you do the work'],
                      ['Design', 'Custom, professionally designed', 'Custom, professionally designed', 'Template-based'],
                      ['SEO', 'Built in from day one', 'One-time, usually extra', 'Limited, mostly DIY'],
                      ['Hosting & security', 'Included, monitored', 'Extra, self-managed', 'Included but locked to platform'],
                      ['Updates & maintenance', 'Included, ongoing', 'Extra cost per request', 'You do it yourself'],
                    ].map((row) => (
                      <tr key={row[0]} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        {row.map((cell, i) => (
                          <td key={i} style={{ padding: '0.75rem', fontWeight: i === 0 ? 'bold' : 'normal', color: i === 0 ? '#fff' : undefined }}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQ */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#fff', textAlign: 'center' }}>Pricing Questions</h2>
              <div style={{ display: 'grid', gap: '2rem' }}>
                {faqs.map((f) => (
                  <div key={f.q}>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff' }}>{f.q}</h4>
                    <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.9)' }}>{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="niche-cta" style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Ready for a Website That Works Every Month?</h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.9)' }}>
                Free consultation — we'll recommend the right plan for where your business is today.
              </p>
              <Link to="/contact" className="niche-button scroll-animate zoom-rotate delay-4" style={{ display: 'inline-block', marginBottom: '1rem' }}>
                Get Started
              </Link>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)' }}>
                📞 Call/Text: <a href="tel:6193008337" style={{ color: '#fff', textDecoration: 'underline' }}>619-300-8337</a> | 📅{' '}
                <a href="https://calendly.com/schacht-dan/30min" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>
                  Book Online
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;

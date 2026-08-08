import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    q: 'Why does click-to-call matter more than a contact form for a treatment center?',
    a: "Because of when people search. Someone looking for addiction treatment for themselves or a family member is often searching at 2am, mid-crisis, on a phone. Industry data on treatment-center landing pages puts click-to-call conversion around 18.5%, versus roughly 2.8% for a standard contact form — a family in crisis will tap a phone number a lot faster than they'll fill out eight fields and wait for a callback. We design your admissions pages so a tappable phone number is the first thing visible on mobile, not buried below a hero image.",
  },
  {
    q: "What's a verification-of-benefits (VOB) form, and why should ours be short?",
    a: "It's the insurance-check form that starts your admissions process. Long VOB forms (8+ fields) lose people before they finish. We build a short first step — name, phone, insurance carrier, substance — that expands into the rest only after someone commits to starting it. That structure alone tends to outperform long-form intakes by 30–50% in completion rate.",
  },
  {
    q: 'Can the AI voice assistant actually handle a crisis call, or does it just take a message?',
    a: "It's trained specifically on your admissions process — program info, insurance basics, and how to route urgency. It answers calls 24/7, can walk a caller through initial questions, and immediately flags anything urgent to your on-call staff rather than leaving a voicemail. It's not a replacement for your clinical team; it's what happens in the gap between a 2am call and your staff waking up. Read more on our AI consulting page." ,
  },
  {
    q: 'Is this HIPAA-compliant?',
    a: 'Yes. Intake forms, AI phone/chat transcripts, and hosting are all built with HIPAA-compliant infrastructure, encryption, and Business Associate Agreements where applicable — required for anything touching PHI in behavioral health.',
  },
  {
    q: 'How long does the follow-up window actually matter?',
    a: "Most treatment center inquiries don't convert to admission on the first call — the average gap between first contact and admission runs 7–14 days. A site with no follow-up system (automated email/SMS check-ins, a booking system that reminds people) loses a large share of leads simply to time and distraction. We build that follow-up into the site, not as an afterthought.",
  },
  {
    q: 'Do you understand marketing compliance for addiction treatment (Google/Facebook ad restrictions, LegitScript, etc.)?',
    a: "We design the site and admissions funnel to be ready for that layer — clean claims, verifiable info, clear licensing/accreditation display — which is what LegitScript certification and Google's healthcare ad policies look for. We don't handle certification itself, but we won't build you a site that works against getting certified.",
  },
];

const Recovery: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Website Design & AI Voice Assistant for Recovery Centers San Diego | Causory</title>
        <meta name="description" content="Websites and 24/7 AI voice assistants for San Diego addiction treatment facilities and recovery centers. Click-to-call-first design, short VOB forms, and AI phone systems that answer crisis calls any hour." />
        <meta name="keywords" content="recovery center website design San Diego, AI voice assistant recovery center, AI phone system addiction treatment, rehab facility web design, recovery center marketing, substance abuse treatment website, AI crisis hotline, dual diagnosis web design, admissions website design, verification of benefits form design" />
        <link rel="canonical" href="https://causory.com/recovery" />
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

      <section id="recovery-design" className="recovery-design">
        <div className="recovery-overlay"></div>
        <div className="container">
          <div className="niche-content">
            <h1 className="section-title scroll-animate">Websites & AI Voice Assistants for San Diego Recovery Centers</h1>
            <p className="niche-intro scroll-animate delay-1">
              Your website can be the bridge between struggle and hope. We build admissions-first sites and pair them with a <Link to="/ai-consulting" style={{color: '#fff', textDecoration: 'underline'}}>24/7 AI voice assistant</Link> that answers crisis calls and connects families to help — any hour, not just business hours.
            </p>

            <div className="ai-main-content" style={{marginTop: '3rem', marginBottom: '3rem'}}>
              <h2 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#fff'}}>A Brochure Website Loses Admissions. An Admissions-First Website Doesn't.</h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                Most treatment center websites are built to look calming and trustworthy — and then bury the two things that actually move someone from "searching" to "admitted": a phone number they can tap immediately, and a short first step toward verifying insurance. We build the second layer, not just the first.
              </p>

              <h3 style={{fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: '#fff'}}>📞 Click-to-Call Beats Forms — By a Lot</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                Across addiction-treatment landing pages, click-to-call conversion runs roughly <strong>18.5%</strong> versus about <strong>2.8%</strong> for a standard form fill. With 70–85% of this traffic arriving on mobile, that gap is decisive: we put a large, tappable phone number above the fold on every page, not just the contact page.
              </p>

              <h3 style={{fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: '#fff'}}>📋 Short VOB Forms, Not Long Intakes</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                When someone isn't ready to call, the fallback matters. A two-step verification-of-benefits form — four fields visible (name, phone, insurance carrier, substance), the rest revealed after they commit — consistently outperforms long eight-field intakes by 30–50% in completion rate.
              </p>

              <h3 style={{fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: '#fff'}}>⏱️ The 7–14 Day Follow-Up Window</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                Most inquiries don't convert on the first call — the average gap between first contact and admission is 7 to 14 days. A site with no automated follow-up (reminder emails/texts, a booking system that nudges) loses leads to nothing more than time. We build that follow-up layer in from day one.
              </p>
            </div>

            <div className="niche-grid">
              <div className="niche-info scroll-animate slide-left delay-2">
                <h4>🌅 Hope-Centered Design</h4>
                <p>Recovery websites need to inspire hope while staying credible. We balance uplifting imagery and messaging with clear, verifiable information about your programs, licensing, and approach to care.</p>

                <h4>🤝 Community Connection</h4>
                <p>From alumni stories to family resources, we build platforms that show the community side of recovery — helping visitors see they're not alone before they ever pick up the phone.</p>

                <h4>📱 Crisis-Ready, Mobile-First</h4>
                <p>When someone needs help, they need it now, usually from a phone. We design every page mobile-first with prominent crisis contact options and a fast path to admission and assessment.</p>
              </div>

              <div className="niche-features scroll-animate slide-right delay-3">
                <h4>Specialized Features:</h4>
                <ul>
                  <li>✓ <Link to="/ai-consulting" style={{color: '#fff', textDecoration: 'underline'}}>AI voice assistant</Link> for 24/7 crisis call handling</li>
                  <li>✓ <Link to="/ai-consulting" style={{color: '#fff', textDecoration: 'underline'}}>AI phone system</Link> that verifies insurance and schedules assessments</li>
                  <li>✓ Click-to-call-first mobile design (18.5% vs 2.8% form conversion)</li>
                  <li>✓ Short, two-step VOB forms built for completion, not abandonment</li>
                  <li>✓ Automated follow-up sequences across the 7–14 day decision window</li>
                  <li>✓ Program information and treatment approach pages</li>
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

            <div style={{marginTop: '4rem', marginBottom: '3rem', background: 'rgba(255,255,255,0.05)', padding: '3rem', borderRadius: '12px'}}>
              <h2 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#fff'}}>Why San Diego Recovery Centers Work With Causory</h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
                Behavioral health marketing has real constraints — HIPAA, ad platform restrictions, LegitScript expectations — that a generic web designer won't know to build around. We design admissions funnels specifically for this space: fast, mobile-first, click-to-call-forward, and honest about licensing and outcomes rather than relying on vague claims.
              </p>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                We also build the <Link to="/ai-consulting" style={{color: '#fff', textDecoration: 'underline'}}>AI phone and chat layer</Link> that keeps your center reachable at 2am, and the <Link to="/services" style={{color: '#fff', textDecoration: 'underline'}}>full site</Link> around it — fast-loading, SEO-structured, and built to convert, not just look calming.
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
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#fff'}}>Ready to Turn More Inquiries Into Admissions?</h3>
              <p style={{fontSize: '1.1rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.9)'}}>
                Free 30-minute consultation — we'll look at your current site's mobile speed, call visibility, and form length, and tell you exactly where you're losing admissions.
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

export default Recovery;

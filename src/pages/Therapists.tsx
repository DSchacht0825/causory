import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    q: 'Do you take my insurance? Why should that be answered on the website?',
    a: "Because it's the single most common reason a visitor leaves a therapist's site without booking. If insurance, out-of-network, and sliding-scale info isn't answered clearly and early, people assume the worst and go back to search results. We put billing and insurance answers where visitors actually look for them, instead of burying them in a generic FAQ page.",
  },
  {
    q: 'Should our headline say "Licensed Therapist" or name the actual problem we treat?',
    a: 'Name the problem. A headline like "Therapy for adults navigating anxiety, trauma, and major life transitions" consistently outperforms "Licensed therapist in California" — visitors are searching for a solution to something specific, not a credential. Credentials belong on the About/bio section, not the headline.',
  },
  {
    q: 'Why does "Book Online" need to skip the therapist-selection dropdown?',
    a: "Every extra click between intent and booking loses people. If someone clicks a specific therapist's bio and then hits 'Book Online,' they should land directly in that therapist's calendar — not a dropdown asking them to choose again. We wire booking links to go straight to the right calendar.",
  },
  {
    q: 'Is a chat widget enough, or do we still need a phone number visible?',
    a: "Both, always. The best-converting therapy sites never rely on a single contact method — phone, email, and a contact form are visible on every page, plus an AI chat assistant for after-hours questions. Different visitors have different comfort levels reaching out; a phone-only or form-only site quietly loses whichever group you didn't accommodate.",
  },
  {
    q: 'How does the AI voice assistant work during sessions?',
    a: "It answers your business line while you're with a client, handles basic questions (insurance, availability, how to schedule an intake), and can book directly into your calendar. Anything sensitive or clinical gets routed to a message for you rather than the AI attempting to handle it. Full detail on our AI consulting page.",
  },
  {
    q: 'Is the site actually HIPAA-compliant, or just described that way?',
    a: 'Encrypted contact/intake forms, HIPAA-compliant hosting, and Business Associate Agreements where required — not just a badge on the page. This matters both for compliance and for the trust signal it sends to a visitor deciding whether to share sensitive information with you.',
  },
];

const Therapists: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Web Design & AI Voice Assistant for Therapists San Diego | Causory</title>
        <meta name="description" content="HIPAA-compliant websites and AI voice assistants for San Diego therapists and mental health professionals. Direct-to-calendar booking, upfront insurance answers, and 24/7 AI phone coverage during sessions." />
        <meta name="keywords" content="therapist web design San Diego, AI voice assistant therapist, AI phone system therapy practice, mental health website design, therapy practice website, HIPAA compliant websites, counselor website design, psychologist web design, AI booking system therapist, teletherapy website" />
        <link rel="canonical" href="https://causory.com/therapists" />
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

      <section id="therapist-design" className="therapist-design">
        <div className="therapist-overlay"></div>
        <div className="container">
          <div className="niche-content">
            <h1 className="section-title scroll-animate">Websites & AI Voice Assistants for San Diego Therapists</h1>
            <p className="niche-intro scroll-animate delay-1">
              Building trust online starts with a website that reflects the safety and professionalism your clients need — and answers their first questions before they leave. Never miss a call during sessions with our <Link to="/ai-consulting" style={{color: '#fff', textDecoration: 'underline'}}>HIPAA-compliant AI voice assistant</Link> that answers calls 24/7.
            </p>

            <div className="ai-main-content" style={{marginTop: '3rem', marginBottom: '3rem'}}>
              <h2 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#fff'}}>Name the Problem, Not the Credential</h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                "Licensed therapist in California" describes you. "Therapy for adults navigating anxiety, trauma, and major life transitions" describes what a visitor is looking for — and headlines that name the problem consistently convert better than ones that lead with credentials. Your license and training matter, but they belong in your bio, not your headline.
              </p>

              <h3 style={{fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: '#fff'}}>💳 Answer Insurance and Cost Before They Ask</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                "Do you take my insurance?" and "What does this cost?" are the two questions that most often send a visitor back to search results unanswered. We put clear insurance, out-of-network, and sliding-scale information where visitors actually look — not buried three clicks deep in a generic FAQ.
              </p>

              <h3 style={{fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: '#fff'}}>📅 Direct-to-Calendar Booking</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                A "Book Online" button that dumps visitors into a dropdown to re-select a therapist they already chose is a booking you'll lose. We wire each bio's booking link directly to that therapist's calendar — one click, no re-selection.
              </p>

              <h3 style={{fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: '#fff'}}>☎️ Multiple Ways In, Always Visible</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                Online booking works for visitors ready to commit — but it's never the only option on a well-converting therapy site. Phone, email, and a contact form stay visible on every page, alongside an AI assistant for after-hours questions, because different visitors need different entry points.
              </p>
            </div>

            <div className="niche-grid">
              <div className="niche-info scroll-animate slide-left delay-2">
                <h4>🛡️ HIPAA-Compliant Design</h4>
                <p>Your clients' privacy is paramount. We build websites with secure hosting, encrypted forms, and HIPAA-compliant infrastructure that protects sensitive information while maintaining a welcoming, professional appearance.</p>

                <h4>💙 Compassionate User Experience</h4>
                <p>We understand that someone visiting your site may be in crisis or seeking help for the first time. Our designs create calm, trustworthy experiences that guide visitors toward taking that crucial first step.</p>

                <h4>⚕️ Professional Credibility</h4>
                <p>From licensing displays to therapy approach explanations, we showcase your expertise and credentials in ways that build confidence — placed where they support the decision, not where they replace the headline.</p>
              </div>

              <div className="niche-features scroll-animate slide-right delay-3">
                <h4>What's Included:</h4>
                <ul>
                  <li>✓ <Link to="/ai-consulting" style={{color: '#fff', textDecoration: 'underline'}}>AI voice assistant</Link> that answers calls during sessions 24/7</li>
                  <li>✓ <Link to="/ai-consulting" style={{color: '#fff', textDecoration: 'underline'}}>AI booking system</Link> for direct-to-calendar appointment scheduling</li>
                  <li>✓ Upfront insurance, out-of-network, and pricing information</li>
                  <li>✓ HIPAA-compliant contact forms and intake processes</li>
                  <li>✓ Secure client portal integration options</li>
                  <li>✓ Multiple visible contact paths: phone, email, form, chat</li>
                  <li>✓ Crisis resource pages and emergency contacts</li>
                  <li>✓ Therapy approach and specialization pages</li>
                  <li>✓ Problem-first bio and credentials showcase</li>
                  <li>✓ Mobile-optimized for clients on-the-go</li>
                </ul>

                <div className="niche-cta">
                  <Link to="/contact" className="niche-button scroll-animate zoom-rotate delay-4">
                    Discuss Your Practice Website
                  </Link>
                </div>
              </div>
            </div>

            <div style={{marginTop: '4rem', marginBottom: '3rem', background: 'rgba(255,255,255,0.05)', padding: '3rem', borderRadius: '12px'}}>
              <h2 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#fff'}}>Why San Diego Therapists Work With Causory</h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
                We build practice websites around the questions that actually decide whether someone books: can I afford this, is it covered, and how do I take the next step. That means insurance answers up front, one-click booking, and a tone that matches what someone in a vulnerable moment needs to feel — without over-promising or sounding clinical.
              </p>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                We also build the <Link to="/ai-consulting" style={{color: '#fff', textDecoration: 'underline'}}>AI phone and booking layer</Link> that covers you during sessions, and the <Link to="/services" style={{color: '#fff', textDecoration: 'underline'}}>full site</Link> around it — fast, HIPAA-ready, and structured for search from day one.
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
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#fff'}}>Ready for a Website That Actually Books Clients?</h3>
              <p style={{fontSize: '1.1rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.9)'}}>
                Free 30-minute consultation — we'll look at your current site's headline, insurance clarity, and booking flow, and tell you exactly where visitors are dropping off.
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

export default Therapists;

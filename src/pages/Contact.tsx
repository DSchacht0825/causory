import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  // Which homepage CTA sent them here (router state, so the URL stays clean)
  const source = (useLocation().state as { source?: string } | null)?.source ?? 'contact-page';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/mkjwzkgn', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Causory | Get Your Free Website Quote</title>
        <meta name="description" content="Ready for a website built for your home service business? Contact Causory for a free consultation. Call (619) 300-8337 or email info@causory.com. Response within 24 hours." />
        <meta name="keywords" content="contact web designer, free consultation, website quote, contractor website inquiry, home service website inquiry, get started" />
        <link rel="canonical" href="https://causory.com/contact" />
      </Helmet>

      <section id="contact" className="contact">
        <div className="contact-overlay"></div>
        <div className="container">
          <div className="contact-content">
            <h1 className="section-title scroll-animate">Let's see what your website could be doing for you</h1>
            <p className="contact-intro">
              Tell us a little about your business. We'll show you what's possible, with a concept of your new website so you can see the difference. No awkward sales pitch.
            </p>

            <div className="contact-grid">
              <div className="contact-info">
                <h4>Get In Touch</h4>
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h5>Phone</h5>
                    <a href="tel:6193008337">(619) 300-8337</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <h5>Email</h5>
                    <a href="mailto:info@causory.com">info@causory.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🕐</div>
                  <div>
                    <h5>Response Time</h5>
                    <p>Within 24 hours</p>
                  </div>
                </div>
                <p className="contact-note">
                  Prefer to just talk it through? Call or text us. You'll get a real person, not a sales script.
                </p>
              </div>

              <div className="contact-form-container">
                {status === 'success' ? (
                  <div className="contact-success" role="status">
                    <h4>Message sent!</h4>
                    <p>Thanks for telling us about your business. We'll get back to you within 24 hours with what we're seeing. You can also call or text (619) 300-8337 in the meantime.</p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    {status === 'error' && (
                      <p className="contact-error" role="alert">
                        Something went wrong sending your message. Please try again, or reach us directly at{' '}
                        <a href="mailto:info@causory.com">info@causory.com</a> or{' '}
                        <a href="tel:6193008337">(619) 300-8337</a>.
                      </p>
                    )}

                    <div className="form-group">
                      <label htmlFor="businessName">Business name</label>
                      <input type="text" id="businessName" name="businessName" autoComplete="organization" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="currentWebsite">
                        Website or Facebook page <span className="form-optional">(if you have one)</span>
                      </label>
                      <input type="text" id="currentWebsite" name="currentWebsite" placeholder="yourbusiness.com or facebook.com/yourbusiness" autoComplete="url" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="goal">What's the #1 thing you'd like your website to do better?</label>
                      <textarea
                        id="goal"
                        name="goal"
                        rows={3}
                        placeholder="More calls, look more professional, show up on Google (or: I need a first website)..."
                        required
                      ></textarea>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="_replyto" autoComplete="email" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">
                          Phone <span className="form-optional">(optional)</span>
                        </label>
                        <input type="tel" id="phone" name="phone" autoComplete="tel" />
                      </div>
                    </div>

                    <input type="hidden" name="_subject" value="New Causory Website Concept Request" />
                    <input type="hidden" name="source" value={source} />

                    <button type="submit" className="submit-button" disabled={status === 'submitting'}>
                      {status === 'submitting' ? 'Sending...' : 'Show Me What\'s Possible →'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<SubmitStatus>('idle');

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
            <h1 className="section-title scroll-animate">Let's Create Something Amazing Together</h1>
            <p className="contact-intro">
              Ready to transform your vision into a digital masterpiece? We're here to bring your story to life.
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
              </div>

              <div className="contact-form-container">
                {status === 'success' ? (
                  <div className="contact-success" role="status">
                    <h4>Message sent!</h4>
                    <p>Thanks for reaching out — we'll get back to you within 24 hours. You can also call or text (619) 300-8337 in the meantime.</p>
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

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" required />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" name="_replyto" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="projectType">Project Type</label>
                      <select id="projectType" name="projectType" required>
                        <option value="">Select a project type</option>
                        <option value="New Website Design">New Website Design</option>
                        <option value="Website Redesign">Website Redesign</option>
                        <option value="Website Care Plan / Support">Website Care Plan / Support</option>
                        <option value="Branding & Identity">Branding & Identity</option>
                        <option value="SEO & Marketing">SEO & Marketing</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="budget">Which plan are you interested in?</label>
                      <select id="budget" name="budget" required>
                        <option value="">Select a plan</option>
                        <option value="Launch ($700 setup + $200/mo)">Launch ($700 setup + $200/mo)</option>
                        <option value="Growth ($1,000 setup + $200/mo)">Growth ($1,000 setup + $200/mo)</option>
                        <option value="Authority ($1,400 setup + $200/mo)">Authority ($1,400 setup + $200/mo)</option>
                        <option value="Not sure yet">Not sure yet — help me choose</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="timeline">Desired Timeline</label>
                      <select id="timeline" name="timeline" required>
                        <option value="">When do you need this completed?</option>
                        <option value="ASAP (Rush project)">ASAP (Rush project)</option>
                        <option value="Within 1 month">Within 1 month</option>
                        <option value="2-3 months">2-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="Flexible timeline">Flexible timeline</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Tell us about your project</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Share your vision, goals, and any specific requirements..."
                        required
                      ></textarea>
                    </div>

                    <input type="hidden" name="_subject" value="New Causory Contact Form Submission" />

                    <button type="submit" className="submit-button" disabled={status === 'submitting'}>
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
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

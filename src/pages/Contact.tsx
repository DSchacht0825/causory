import React from 'react';
import { Helmet } from 'react-helmet';

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Causory | Get Your Free Web Design & AI Consultation</title>
        <meta name="description" content="Ready to transform your business with custom web design or AI automation? Contact Causory for a free consultation. Call (619) 300-8337 or email hello@causory.com. Response within 24 hours." />
        <meta name="keywords" content="contact web designer, free consultation, web design quote, AI consulting inquiry, website project inquiry, get started" />
        <link rel="canonical" href="https://causory.com/contact" />
      </Helmet>

      <section id="contact" className="contact">
        <div className="contact-overlay"></div>
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title scroll-animate">Let's Create Something Amazing Together</h2>
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
                    <a href="mailto:hello@causory.com">hello@causory.com</a>
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
                <form 
                  className="contact-form"
                  action="https://formspree.io/f/mpwjlqkd"
                  method="POST"
                >
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
                      <option value="AI Consulting">AI Consulting</option>
                      <option value="E-commerce Development">E-commerce Development</option>
                      <option value="Branding & Identity">Branding & Identity</option>
                      <option value="SEO & Marketing">SEO & Marketing</option>
                      <option value="Website Maintenance">Website Maintenance</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="budget">Project Budget</label>
                    <select id="budget" name="budget" required>
                      <option value="">Select your budget range</option>
                      <option value="Under $5,000">Under $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                      <option value="$50,000+">$50,000+</option>
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
                  <input type="hidden" name="_next" value="http://localhost:3000/contact?success=true" />
                  
                  <button type="submit" className="submit-button">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-links-left">
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
            </div>
            <div className="nav-logo">
              <h1>Causory</h1>
            </div>
            <div className="nav-links-right">
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">
            Web Design That
            <span className="hero-accent">
              Stands Out
            </span>
          </h2>
          <p className="hero-description">
            We create stunning, modern websites that captivate your audience and drive results.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              View Our Work
            </button>
            <a href="#contact" className="btn-secondary">
              Start a Project
            </a>
          </div>
        </div>
        
        {/* Animated gradient orbs */}
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h3 className="section-title">Our Services</h3>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h4 className="service-title">Web Design</h4>
              <p className="service-description">Beautiful, modern designs that capture your brand's essence</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h4 className="service-title">Development</h4>
              <p className="service-description">Fast, responsive websites built with cutting-edge technology</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📈</div>
              <h4 className="service-title">SEO & Marketing</h4>
              <p className="service-description">Optimize your online presence and reach your target audience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h3 className="section-title">Recent Projects</h3>
          <div className="portfolio-grid">
            {[
              { id: 1, image: "image-1.jpg", title: "Food Truck Catering Site", type: "Web Design & Development" },
              { id: 2, image: "image-2.jpg", title: "12 Step Journey Website", type: "Recovery & Wellness Platform" },
              { id: 4, image: "image-4.jpg", title: "Therapy & Wellness Center", type: "Mental Health & Healing" },
              { id: 5, image: "image-5.jpg", title: "Youth Empowerment Initiative", type: "Community Outreach & Prevention" }
            ].map((project) => (
              <div key={project.id} className="portfolio-item">
                <div className="portfolio-image">
                  <img src={`/${project.image}`} alt={project.title} />
                </div>
                <div className="portfolio-overlay">
                  <h4>{project.title}</h4>
                  <p>{project.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-overlay"></div>
        <div className="container">
          <div className="about-content">
            <h3 className="section-title">About Causory</h3>
            <div className="about-text">
              <p className="about-intro">
                At Causory, we believe every design should spark with purpose and ignite with impact.
              </p>
              
              <p>
                Your website isn't just a collection of pixels dancing on a screen—it's the <strong>digital heartbeat</strong> of your brand, 
                the virtual doorway where first impressions bloom into lasting connections and casual visitors transform into devoted advocates.
              </p>
              
              <p>
                We founded Causory with a vision both simple and revolutionary: <em>cause meets story</em>. Your cause—that burning 
                mission that fuels your midnight passion and morning purpose—deserves to be woven into breathtaking design and 
                intentional digital symphonies. Our calling is to architect websites that don't just whisper beauty, but 
                <strong>shout your story</strong> with crystal clarity, magnetize your ideal audience, and catalyze measurable transformation.
              </p>

              <div className="about-grid">
                <div className="about-section">
                  <h4>🎨 What We Craft</h4>
                  <ul>
                    <li><strong>Custom Website Alchemy</strong> – Clean, magnetic, soul-focused sites that elevate your brand to legendary status</li>
                    <li><strong>Responsive Digital Artistry</strong> – Flawless experiences that flow like poetry across desktop, tablet, and mobile</li>
                    <li><strong>Brand + Strategy Fusion</strong> – Harmonizing your visual DNA with your boldest business ambitions</li>
                    <li><strong>SEO & Performance Mastery</strong> – Lightning-fast, visible, and irresistibly engaging digital experiences</li>
                  </ul>
                </div>

                <div className="about-section">
                  <h4>⚡ Our Creative Process</h4>
                  <p>
                    We weave strategy, creativity, and cutting-edge technology into every pixel of your project. 
                    This begins with deep discovery—excavating your vision, understanding your tribe, and mapping your 
                    most audacious goals. From there, we design and build with surgical precision while keeping you 
                    as our creative co-pilot throughout the entire journey.
                  </p>
                </div>
              </div>

              <div className="about-why">
                <h4>🚀 Why Partner With Causory?</h4>
                <p>
                  Because your website should transcend mere existence—it should <strong>work tirelessly for your dreams</strong>. 
                  It should magnetize visitors, captivate their imagination, and inspire bold action. At Causory, we don't just 
                  construct websites; we forge <em>digital sanctuaries</em> where your mission and message don't just survive—they 
                  <strong>absolutely thrive</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-overlay"></div>
        <div className="container">
          <div className="contact-content">
            <h3 className="section-title">Let's Create Something Amazing Together</h3>
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
                    <a href="mailto:schacht.dan@gmail.com">hello@causory.com</a>
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
                  <input type="hidden" name="_next" value="http://localhost:3002#contact" />
                  
                  <button type="submit" className="submit-button">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h3 className="cta-title">Ready to Transform Your Digital Presence?</h3>
          <p className="cta-description">Let's create something extraordinary together.</p>
          <a href="#contact" className="cta-button">
            Start Your Project Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h4>Causory</h4>
            <p>Premium Web Design & Development</p>
          </div>
          
          <div className="footer-links">
            <a href="https://twitter.com">Twitter</a>
            <a href="https://linkedin.com">LinkedIn</a>
            <a href="https://instagram.com">Instagram</a>
          </div>
        </div>
        
        <div className="footer-actions-bottom">
          <div className="container">
            <div className="footer-buttons-row">
              <a href="tel:6193008337" className="footer-button-bottom">
                📞 Call Now
              </a>
              <a href="sms:6193008337" className="footer-button-bottom">
                💬 Text Us
              </a>
              <a href="https://calendly.com/schacht-dan/30min" target="_blank" rel="noopener noreferrer" className="footer-button-bottom">
                📅 Schedule Meet
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
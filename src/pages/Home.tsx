import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content show">
          <h1 className="hero-title animate-fade-in-up">
            Web Design &
            <span className="hero-accent">
              AI Solutions
            </span>
          </h1>
          <p className="hero-description animate-fade-in-up delay-200">
            We create stunning websites and intelligent AI systems that transform how you work and connect with your audience.
          </p>
          <div className="hero-buttons animate-fade-in-up delay-400">
            <Link to="/portfolio" className="btn-primary">
              View Our Work
            </Link>
            <Link to="/contact" className="btn-secondary">
              Start a Project
            </Link>
          </div>
        </div>
        <div className="orb orb-1 show"></div>
        <div className="orb orb-2 show"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title scroll-animate">Our Services</h2>
          <div className="services-grid">
            <div className="service-card scroll-animate slide-left delay-1">
              <div className="service-icon">🎨</div>
              <h3 className="service-title">Web Design</h3>
              <p className="service-description">Beautiful, modern designs that capture your brand's essence</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card scroll-animate roll-up delay-2">
              <div className="service-icon">⚡</div>
              <h3 className="service-title">Development</h3>
              <p className="service-description">Fast, responsive websites built with cutting-edge technology</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card scroll-animate slide-right delay-3">
              <div className="service-icon">📈</div>
              <h3 className="service-title">SEO & Marketing</h3>
              <p className="service-description">Optimize your online presence and reach your target audience</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card scroll-animate fade-in delay-4">
              <div className="service-icon">🤖</div>
              <h3 className="service-title">AI Consulting</h3>
              <p className="service-description">Transform your workflow with intelligent automation and AI strategy</p>
              <Link to="/ai-consulting" className="service-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="section-title scroll-animate">Recent Projects</h2>
          <div className="portfolio-grid">
            {[
              { id: 1, image: "image-1.jpg", title: "Food Truck Catering Site", type: "Web Design & Development" },
              { id: 2, image: "image-2.jpg", title: "12 Step Journey Website", type: "Recovery & Wellness Platform" },
              { id: 4, image: "image-4.jpg", title: "Therapy & Wellness Center", type: "Mental Health & Healing" },
              { id: 5, image: "image-5.jpg", title: "Youth Empowerment Initiative", type: "Community Outreach & Prevention" }
            ].map((project, index) => (
              <div key={project.id} className={`portfolio-item scroll-animate zoom-rotate delay-${index + 1}`}>
                <div className="portfolio-image">
                  <img src={`/${project.image}`} alt={`${project.title} - ${project.type} by Causory Web Design`} />
                </div>
                <div className="portfolio-overlay">
                  <h4>{project.title}</h4>
                  <p>{project.type}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/portfolio" className="btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title scroll-animate">What Our Clients Say</h2>
          <p className="testimonials-intro scroll-animate delay-1">
            Real results from therapy practices, recovery centers, and nonprofits across North County San Diego.
          </p>

          <div className="testimonials-grid">
            <div className="testimonial-card scroll-animate slide-left delay-1">
              <div className="testimonial-photo">
                <img src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Dr. Sarah Chen - Licensed Therapist in Vista" />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <blockquote>
                  "Causory redesigned our therapy practice website with HIPAA-compliant forms and mobile optimization. We saw a <strong>150% increase in new patient inquiries</strong> and <strong>40% more online appointment bookings</strong> within 3 months. The crisis resource page has been invaluable for our clients."
                </blockquote>
                <div className="testimonial-author">
                  <h4>Dr. Sarah Chen</h4>
                  <p>Licensed Therapist • Vista, CA</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card scroll-animate roll-up delay-2">
              <div className="testimonial-photo">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Mark Rodriguez - Nonprofit Director in Carlsbad" />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <blockquote>
                  "Our donation conversions increased <strong>220%</strong> after Causory optimized our giving pages and volunteer system. The new website brought in 60 new volunteers in just 2 months. Their understanding of nonprofit needs is exceptional."
                </blockquote>
                <div className="testimonial-author">
                  <h4>Mark Rodriguez</h4>
                  <p>Executive Director • Carlsbad, CA</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card scroll-animate slide-right delay-3">
              <div className="testimonial-photo">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Lisa Thompson - Recovery Center Administrator in Oceanside" />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <blockquote>
                  "The crisis-ready design and clear admission pathways have been transformative for our center. Our family resource section has become our most visited page. Causory truly understands the recovery community's needs."
                </blockquote>
                <div className="testimonial-author">
                  <h4>Lisa Thompson</h4>
                  <p>Program Administrator • Oceanside, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h3 className="cta-title animate-fade-in-up">Ready to Transform Your Digital Presence?</h3>
          <p className="cta-description animate-fade-in-up delay-200">Let's create something extraordinary together.</p>
          <Link to="/contact" className="cta-button animate-scale-in delay-400">
            Start Your Project Today
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;

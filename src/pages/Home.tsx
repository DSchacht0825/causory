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
            Real results from businesses across the country who've transformed their digital presence.
          </p>

          <div className="testimonials-grid">
            <div className="testimonial-card scroll-animate slide-left delay-1">
              <div className="testimonial-photo">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Michael Torres - Tech Startup Founder" />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <blockquote>
                  "The AI chatbot Causory built for our site has been incredible. It handles customer questions 24/7 and we've seen a <strong>40% reduction in support tickets</strong>. The automation alone saves our team about 15 hours per week. Worth every penny."
                </blockquote>
                <div className="testimonial-author">
                  <h4>Michael Torres</h4>
                  <p>Founder • Austin, TX</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card scroll-animate roll-up delay-2">
              <div className="testimonial-photo">
                <img src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Jessica Martinez - Small Business Owner" />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <blockquote>
                  "Causory completely redesigned our website and the results speak for themselves. Our <strong>online inquiries doubled</strong> in the first month and the site looks absolutely stunning on mobile. Professional work from start to finish."
                </blockquote>
                <div className="testimonial-author">
                  <h4>Jessica Martinez</h4>
                  <p>Business Owner • Denver, CO</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card scroll-animate slide-right delay-3">
              <div className="testimonial-photo">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Rachel Kim - Marketing Director" />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <blockquote>
                  "We hired Causory to modernize our site and implement some AI workflows. The new design is beautiful and the automation they set up has streamlined our lead qualification process. Highly recommend for anyone looking to level up their digital presence."
                </blockquote>
                <div className="testimonial-author">
                  <h4>Rachel Kim</h4>
                  <p>Marketing Director • Seattle, WA</p>
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

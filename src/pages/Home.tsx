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
              <p className="service-description">Beautiful, modern designs that capture your brand's essence and convert visitors into customers</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card scroll-animate roll-up delay-2">
              <div className="service-icon">⚡</div>
              <h3 className="service-title">Development</h3>
              <p className="service-description">Fast, responsive websites built with cutting-edge technology that performs flawlessly on every device</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card scroll-animate slide-right delay-3">
              <div className="service-icon">📈</div>
              <h3 className="service-title">SEO & Marketing</h3>
              <p className="service-description">Optimize your online presence and reach your target audience with data-driven strategies</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card scroll-animate fade-in delay-4">
              <div className="service-icon">🤖</div>
              <h3 className="service-title">AI Consulting</h3>
              <p className="service-description">Transform your workflow with intelligent automation, custom chatbots, and AI-powered solutions</p>
              <Link to="/ai-consulting" className="service-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Causory Section */}
      <section className="why-choose">
        <div className="container">
          <h2 className="section-title scroll-animate">Why Choose Causory?</h2>
          <p className="section-intro scroll-animate delay-1">
            We're not just another web design agency. We combine stunning visual design with cutting-edge AI technology to create websites that don't just look great—they work harder for your business.
          </p>

          <div className="why-grid">
            <div className="why-item scroll-animate slide-left delay-1">
              <div className="why-icon">💡</div>
              <h3>Design That Converts</h3>
              <p>
                Every design decision is backed by psychology and user behavior research. We create intuitive interfaces that guide visitors seamlessly toward taking action—whether that's booking a consultation, making a purchase, or reaching out. Beautiful design meets strategic conversion optimization to turn your website into your most powerful sales tool.
              </p>
            </div>

            <div className="why-item scroll-animate roll-up delay-2">
              <div className="why-icon">🚀</div>
              <h3>AI-Powered Solutions</h3>
              <p>
                We integrate intelligent automation that saves you time and money. From AI chatbots that answer customer questions 24/7 to automated lead qualification systems, we implement technology that lets you focus on what you do best. Our AI consulting helps you work smarter, not harder, with custom solutions tailored to your business needs.
              </p>
            </div>

            <div className="why-item scroll-animate slide-right delay-3">
              <div className="why-icon">🎯</div>
              <h3>Results-Driven Approach</h3>
              <p>
                We measure success by your success. Our clients see an average 150% increase in qualified leads within the first three months. We don't just build websites—we build growth engines. Every project includes analytics setup, performance tracking, and ongoing optimization recommendations to ensure your investment delivers real ROI.
              </p>
            </div>

            <div className="why-item scroll-animate fade-in delay-4">
              <div className="why-icon">⚡</div>
              <h3>Lightning-Fast Performance</h3>
              <p>
                Speed matters. A one-second delay can reduce conversions by 7%. We build websites optimized for blazing-fast load times using modern frameworks like React and cutting-edge performance techniques. Your site will rank higher in Google, keep visitors engaged, and deliver a premium experience across all devices and connection speeds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="process">
        <div className="container">
          <h2 className="section-title scroll-animate">Our Process</h2>
          <p className="section-intro scroll-animate delay-1">
            We've refined our approach over dozens of successful projects. Here's how we transform your vision into a powerful digital presence.
          </p>

          <div className="process-timeline">
            <div className="process-step scroll-animate slide-left delay-1">
              <div className="process-number">01</div>
              <div className="process-content">
                <h3>Discovery & Strategy</h3>
                <p>
                  We start by understanding your business goals, target audience, and competitive landscape. Through in-depth discovery sessions, we identify opportunities and challenges, define success metrics, and create a strategic roadmap. This foundation ensures every design and development decision supports your business objectives.
                </p>
              </div>
            </div>

            <div className="process-step scroll-animate slide-right delay-2">
              <div className="process-number">02</div>
              <div className="process-content">
                <h3>Design & Prototyping</h3>
                <p>
                  Our designers craft custom mockups that bring your brand to life. We create interactive prototypes so you can experience the user journey before a single line of code is written. This collaborative phase includes multiple revision rounds to ensure the design perfectly captures your vision and resonates with your audience.
                </p>
              </div>
            </div>

            <div className="process-step scroll-animate slide-left delay-3">
              <div className="process-number">03</div>
              <div className="process-content">
                <h3>Development & Integration</h3>
                <p>
                  Once designs are approved, our developers build your site using modern, scalable technology. We implement advanced features like AI chatbots, booking systems, e-commerce functionality, and custom integrations. Every element is built mobile-first, rigorously tested across devices and browsers, and optimized for search engines.
                </p>
              </div>
            </div>

            <div className="process-step scroll-animate slide-right delay-4">
              <div className="process-number">04</div>
              <div className="process-content">
                <h3>Launch & Growth</h3>
                <p>
                  Launch day is just the beginning. We provide comprehensive training, detailed analytics setup, and performance monitoring. You'll receive ongoing support and optimization recommendations to continuously improve results. We track key metrics and provide insights to help you maximize your website's impact and ROI over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="industries">
        <div className="container">
          <h2 className="section-title scroll-animate">Industries We Serve</h2>
          <p className="section-intro scroll-animate delay-1">
            We specialize in creating tailored digital solutions for specific industries, understanding the unique challenges and opportunities each sector faces.
          </p>

          <div className="industries-grid">
            <div className="industry-card scroll-animate zoom-rotate delay-1">
              <div className="industry-icon">🧠</div>
              <h3>Therapists & Mental Health</h3>
              <p>
                HIPAA-compliant websites with secure booking, teletherapy integration, and content that builds trust with potential clients seeking mental health support.
              </p>
            </div>

            <div className="industry-card scroll-animate zoom-rotate delay-2">
              <div className="industry-icon">🌟</div>
              <h3>Recovery Centers</h3>
              <p>
                Compassionate, conversion-optimized websites for addiction treatment facilities with admissions tools and resources that guide families through difficult decisions.
              </p>
            </div>

            <div className="industry-card scroll-animate zoom-rotate delay-3">
              <div className="industry-icon">❤️</div>
              <h3>Nonprofits</h3>
              <p>
                Affordable, impactful websites with donation platforms, volunteer management, and storytelling that inspires action and drives your mission forward.
              </p>
            </div>

            <div className="industry-card scroll-animate zoom-rotate delay-4">
              <div className="industry-icon">🏢</div>
              <h3>Professional Services</h3>
              <p>
                Sophisticated websites for consultants, lawyers, accountants, and coaches that establish authority and generate high-quality leads.
              </p>
            </div>

            <div className="industry-card scroll-animate zoom-rotate delay-5">
              <div className="industry-icon">🛍️</div>
              <h3>E-Commerce</h3>
              <p>
                High-converting online stores with seamless checkout experiences, inventory management, and AI-powered product recommendations.
              </p>
            </div>

            <div className="industry-card scroll-animate zoom-rotate delay-6">
              <div className="industry-icon">🚀</div>
              <h3>Startups & Tech</h3>
              <p>
                Modern, scalable web applications with custom functionality, API integrations, and automation that helps you move fast and scale efficiently.
              </p>
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

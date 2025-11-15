import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Voice Assistant & Web Design San Diego | Causory - AI Phone Systems & Websites</title>
        <meta name="description" content="San Diego's leading AI voice assistant, AI phone system, AI booking system, and web design agency. We build custom websites and intelligent AI voice automation for businesses in La Jolla, Del Mar, Carlsbad, and throughout San Diego County." />
        <meta name="keywords" content="AI voice assistant San Diego, AI phone assistant San Diego, AI phone system San Diego, AI assistant San Diego, AI booking system San Diego, web design San Diego, San Diego web developer, AI automation San Diego, custom websites San Diego" />
        <link rel="canonical" href="https://www.causory.com" />
      </Helmet>

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
            San Diego's premier web design and AI automation agency. We create stunning websites, AI voice assistants that answer your phones, and intelligent AI systems that transform how local businesses work and connect with their audience.
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
              <h3 className="service-title">AI Voice Assistants & Phone Systems</h3>
              <p className="service-description">24/7 AI voice assistants that answer your phones, AI chat assistants, and automated booking systems for San Diego businesses. Never miss a call or lead again</p>
              <Link to="/ai-consulting" className="service-link">Explore AI Voice Solutions →</Link>
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
              <h3>AI-Powered Voice & Automation Solutions</h3>
              <p>
                We integrate intelligent automation that saves you time and money. From <Link to="/ai-consulting" style={{color: '#fff', textDecoration: 'underline'}}>AI voice assistants</Link> that answer your business phone calls 24/7 with natural conversations to <Link to="/ai-consulting" style={{color: '#fff', textDecoration: 'underline'}}>AI chat assistants and automated booking systems</Link> that capture leads while you sleep, we implement cutting-edge technology that lets San Diego businesses work smarter. Our AI consulting helps you automate phone calls, chat, appointments, and repetitive tasks with custom solutions tailored to your industry. Never miss another call or lead.
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
                  Once designs are approved, our San Diego developers build your site using modern, scalable technology. We implement advanced features like <Link to="/ai-consulting" style={{color: '#fff', textDecoration: 'underline'}}>AI voice assistants, AI phone systems, chat assistants, and booking systems</Link>, e-commerce functionality, and custom integrations with your existing tools. Every element is built mobile-first, rigorously tested across devices and browsers, and optimized for San Diego local search and AI voice integration.
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
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Yvonne Araujo - Owner of Teresita's Birria" />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <blockquote>
                  "Working with Causory was such a great experience. They were super helpful, friendly, and patient every step of the way. They really listened to my ideas and brought my thoughts to life on the site even better than I imagined. I'm so thankful for their creativity and professionalism—<strong>highly recommend Causory</strong> to anyone looking for a beautiful, well-designed website!"
                </blockquote>
                <div className="testimonial-author">
                  <h4>Yvonne Araujo</h4>
                  <p>Owner • Teresita's Birria</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card scroll-animate roll-up delay-2">
              <div className="testimonial-photo">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Scott Miner - Founder of Restoring San Diego" />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <blockquote>
                  "When Restoring San Diego was still finding its footing, Causory became our launchpad. Their web design completely transformed our online presence—our <strong>SEO traffic skyrocketed, our visibility exploded</strong>, and our message reached audiences we could never have reached before. The craftsmanship, ongoing maintenance, and attention to detail have been second to none. We'll always choose Causory—because they didn't just build a website, they built momentum for change."
                </blockquote>
                <div className="testimonial-author">
                  <h4>Scott Miner</h4>
                  <p>Founder & CEO • Restoring San Diego</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card scroll-animate slide-right delay-3">
              <div className="testimonial-photo">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="San Diego Business Owner" />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <blockquote>
                  "Customer service is everything to me! Not only are they attentive to what details you ask but they also have a lot of knowledge and deliver results of your website with tons of care. It's customizable and if you have questions the response timing is quick! If I ever launch any other businesses I will <strong>100 percent use Causory every single time!</strong>"
                </blockquote>
                <div className="testimonial-author">
                  <h4>Verified Client</h4>
                  <p>Business Owner • San Diego, CA</p>
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

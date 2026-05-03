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
            Get more customers while you sleep. We build websites that turn visitors into paying clients and AI phone systems that book appointments 24/7—so you never miss a lead.
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
              <h3 className="service-title">Websites That Sell</h3>
              <p className="service-description">Sites designed to convert visitors into customers—not just look pretty. More clicks, more calls, more sales.</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card scroll-animate roll-up delay-2">
              <div className="service-icon">⚡</div>
              <h3 className="service-title">Fast-Loading Sites</h3>
              <p className="service-description">Slow sites lose customers. We build lightning-fast pages that keep visitors engaged and ready to buy.</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card scroll-animate slide-right delay-3">
              <div className="service-icon">📈</div>
              <h3 className="service-title">Get Found on Google</h3>
              <p className="service-description">Show up when customers search for what you offer. More visibility = more leads walking through your door.</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card scroll-animate fade-in delay-4">
              <div className="service-icon">🤖</div>
              <h3 className="service-title">AI That Answers Your Phone</h3>
              <p className="service-description">Never miss a call again. Our AI books appointments and captures leads 24/7—even at 2am.</p>
              <Link to="/ai-consulting" className="service-link">See How It Works →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Causory Section */}
      <section className="why-choose">
        <div className="container">
          <h2 className="section-title scroll-animate">Why Choose Causory?</h2>
          <p className="section-intro scroll-animate delay-1">
            Your website should be your best salesperson—working around the clock to bring in new business.
          </p>

          <div className="why-grid">
            <div className="why-item scroll-animate slide-left delay-1">
              <div className="why-icon">💰</div>
              <h3>More Sales, Not Just Clicks</h3>
              <p>
                A pretty website means nothing if it doesn't bring in customers. We design every page to guide visitors toward booking, buying, or calling you. Our clients see 150% more leads within 3 months.
              </p>
            </div>

            <div className="why-item scroll-animate roll-up delay-2">
              <div className="why-icon">📱</div>
              <h3>Works on Every Device</h3>
              <p>
                60% of your customers are on their phones. We build sites that look great and work perfectly whether someone's on a laptop, tablet, or smartphone—so you never lose a sale.
              </p>
            </div>

            <div className="why-item scroll-animate slide-right delay-3">
              <div className="why-icon">🔍</div>
              <h3>Customers Find You First</h3>
              <p>
                We build your site to rank on Google from day one. When people search for what you offer, you show up—not your competitors. More visibility means more business.
              </p>
            </div>

            <div className="why-item scroll-animate fade-in delay-4">
              <div className="why-icon">🤖</div>
              <h3>Never Miss a Lead</h3>
              <p>
                Add <Link to="/ai-consulting" style={{color: '#fff', textDecoration: 'underline'}}>AI phone answering</Link> to capture calls 24/7. Customers get instant responses and you get booked appointments—even while you sleep.
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
            <Link to="/therapists" className="industry-card scroll-animate zoom-rotate delay-1">
              <div className="industry-icon">🧠</div>
              <h3>Therapists & Mental Health</h3>
              <p>
                HIPAA-compliant websites with secure booking, teletherapy integration, and content that builds trust with potential clients seeking mental health support.
              </p>
            </Link>

            <Link to="/recovery" className="industry-card scroll-animate zoom-rotate delay-2">
              <div className="industry-icon">🌟</div>
              <h3>Recovery Centers</h3>
              <p>
                Compassionate, conversion-optimized websites for addiction treatment facilities with admissions tools and resources that guide families through difficult decisions.
              </p>
            </Link>

            <Link to="/nonprofits" className="industry-card scroll-animate zoom-rotate delay-3">
              <div className="industry-icon">❤️</div>
              <h3>Nonprofits</h3>
              <p>
                Affordable, impactful websites with donation platforms, volunteer management, and storytelling that inspires action and drives your mission forward.
              </p>
            </Link>

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
          <h3 className="cta-title animate-fade-in-up">Ready to Get More Customers?</h3>
          <p className="cta-description animate-fade-in-up delay-200">Let's build a website that actually grows your business.</p>
          <Link to="/contact" className="cta-button animate-scale-in delay-400">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    q: "What services does Causory offer?",
    a: "Causory is a full-service digital agency offering custom website design, progressive web apps (PWAs) with SQL databases, web-based dashboards, AI phone systems, AI chatbots, e-commerce stores, SEO, and API integrations. We handle your entire digital presence under one roof."
  },
  {
    q: "Can you build a web app with a database?",
    a: "Yes. We build progressive web apps backed by real SQL databases (PostgreSQL, MySQL). These apps work offline, support user accounts, sync data in real time, and can be installed on any device — no App Store required. Great for businesses that need custom software without the cost of native mobile development."
  },
  {
    q: "Do you build web dashboards and data visualization tools?",
    a: "Yes. We build custom browser-based dashboards that display real-time KPIs, charts, and reports. Features include role-based access control, multi-user support, automated CSV/PDF exports, and REST API connections to your existing data sources."
  },
  {
    q: "Do you build websites for therapists and mental health professionals?",
    a: "Yes — it's one of our specialties. We build HIPAA-aware websites for therapists, psychologists, and mental health practices with secure online booking, teletherapy integration, and content that builds trust with potential clients."
  },
  {
    q: "Do you offer AI phone systems for businesses?",
    a: "Yes. Our AI phone systems answer calls 24/7, book appointments, handle FAQs, and qualify leads automatically — so you never miss a call, even outside business hours. It integrates directly with your calendar and CRM."
  },
  {
    q: "Do you work with clients outside San Diego?",
    a: "Absolutely. While we're based in San Diego, CA, we work with businesses across the United States. Our entire process is remote-friendly — discovery, design, development, and launch all happen online."
  },
  {
    q: "How long does it take to build a website?",
    a: "A standard marketing website typically takes 2–4 weeks from kickoff to launch. Progressive web apps, dashboards, and e-commerce stores vary based on complexity. We always provide a clear timeline during your free consultation."
  },
  {
    q: "Do you build websites for nonprofits?",
    a: "Yes. We have extensive experience with nonprofits and community organizations. We offer affordable builds with donation platforms, volunteer management, and storytelling designed to help you grow your mission and reach."
  }
];

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Causory | Web Design, Web Apps, AI Systems & Dashboards | San Diego</title>
        <meta name="description" content="Causory is your complete digital partner — custom websites, progressive web apps with SQL databases, web dashboards, AI phone systems, and e-commerce. 5-star rated. Serving businesses nationwide from San Diego, CA." />
        <meta name="keywords" content="web design San Diego, progressive web app developer, SQL database web app, web dashboard development, AI phone system, custom web application, e-commerce development, therapist website design, nonprofit web design, recovery center website, web app developer San Diego" />
        <link rel="canonical" href="https://www.causory.com" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content show">
          <h1 className="hero-title animate-fade-in-up">
            Your Complete
            <span className="hero-accent">
              Digital Partner
            </span>
          </h1>
          <p className="hero-description animate-fade-in-up delay-200">
            We design, build, and automate your entire digital presence — from stunning websites and custom web apps to AI phone systems, real-time dashboards, and e-commerce stores. One team, end-to-end.
          </p>
          <div className="hero-pills animate-fade-in-up delay-300">
            <span className="hero-pill">🌐 Web Design</span>
            <span className="hero-pill">📱 Web Apps</span>
            <span className="hero-pill">🤖 AI Systems</span>
            <span className="hero-pill">📊 Dashboards</span>
            <span className="hero-pill">🛒 E-Commerce</span>
          </div>
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

      {/* What We Build Section */}
      <section className="capabilities">
        <div className="container">
          <h2 className="section-title scroll-animate">What We Build</h2>
          <p className="section-intro scroll-animate delay-1">
            Beyond beautiful websites — we engineer full-stack digital tools that run your business.
          </p>

          <div className="capabilities-featured">
            <div className="capability-featured-card pwa-card scroll-animate slide-left delay-2">
              <div className="cap-badge pwa-badge">Progressive Web Apps</div>
              <div className="cap-icon">📱</div>
              <h3>App-Like Experiences, Zero Downloads</h3>
              <p>We build PWAs that work offline, load instantly, and feel like native apps — no App Store required. Backed by SQL databases for real, persistent data that scales with your business.</p>
              <ul className="cap-features">
                <li><span className="cap-check">✓</span> Works offline on any device</li>
                <li><span className="cap-check">✓</span> SQL database integration (PostgreSQL, MySQL)</li>
                <li><span className="cap-check">✓</span> Push notifications & home screen install</li>
                <li><span className="cap-check">✓</span> Secure user accounts & data sync</li>
              </ul>
              <div className="cap-tags">
                <span>React</span><span>PostgreSQL</span><span>Service Workers</span><span>Node.js</span>
              </div>
            </div>

            <div className="capability-featured-card dashboard-card scroll-animate slide-right delay-2">
              <div className="cap-badge dashboard-badge">Web Dashboards</div>
              <div className="cap-icon">📊</div>
              <h3>Data That Tells Your Story</h3>
              <p>Custom web-based dashboards that transform your raw data into clear, actionable insights. Real-time charts, KPI tracking, and filterable reports — all in your browser, accessible anywhere.</p>
              <ul className="cap-features">
                <li><span className="cap-check purple">✓</span> Real-time data visualization & charts</li>
                <li><span className="cap-check purple">✓</span> Custom KPI & metrics tracking</li>
                <li><span className="cap-check purple">✓</span> Role-based access & multi-user support</li>
                <li><span className="cap-check purple">✓</span> CSV / PDF exports & automated reports</li>
              </ul>
              <div className="cap-tags">
                <span>React</span><span>SQL</span><span>Chart.js</span><span>REST API</span>
              </div>
            </div>
          </div>

          <div className="capabilities-sub-grid">
            <div className="capability-sub-card scroll-animate zoom-rotate delay-1">
              <div className="cap-sub-icon">🌐</div>
              <h4>Custom Websites</h4>
              <p>Conversion-focused sites built to rank on Google and turn visitors into customers.</p>
            </div>
            <div className="capability-sub-card scroll-animate zoom-rotate delay-2">
              <div className="cap-sub-icon">🛒</div>
              <h4>E-Commerce Stores</h4>
              <p>High-converting online stores with seamless checkout and inventory management.</p>
            </div>
            <div className="capability-sub-card scroll-animate zoom-rotate delay-3">
              <div className="cap-sub-icon">🤖</div>
              <h4>AI Automation</h4>
              <p>Smart phone systems, chatbots, and booking tools that run your business 24/7.</p>
            </div>
            <div className="capability-sub-card scroll-animate zoom-rotate delay-4">
              <div className="cap-sub-icon">🔗</div>
              <h4>API Integrations</h4>
              <p>Connect your CRM, payment processors, scheduling tools, and more in one system.</p>
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
            Real reviews from real clients — verified on Google.
          </p>

          <div className="testimonials-grid">
            <div className="testimonial-card scroll-animate slide-left delay-1">
              <div className="google-review-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span>Google Review</span>
              </div>
              <div className="testimonial-avatar" style={{background: 'linear-gradient(135deg, #4285F4, #34A853)'}}>AS</div>
              <div className="testimonial-content">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <blockquote>
                  "Daniel exceeded expectations on our Soul Tide website. From kickoff to launch, he kept everything simple and stress-free, providing clear timelines, proactive updates, and thoughtful guidance. He translated our brand beautifully, optimized the site for speed and mobile, and handled all the technical pieces without any hassle. <strong>Incredibly communicative, informative, and easy to work with. Five stars without hesitation.</strong>"
                </blockquote>
                <div className="testimonial-author">
                  <h4>Ashley Sellers</h4>
                  <p>Local Guide · Soul Tide Therapy</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card scroll-animate roll-up delay-2">
              <div className="google-review-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span>Google Review</span>
              </div>
              <div className="testimonial-avatar" style={{background: 'linear-gradient(135deg, #EA4335, #FBBC05)'}}>SM</div>
              <div className="testimonial-content">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <blockquote>
                  "When Restoring San Diego was still finding its footing, Causory became our launchpad. Their web design completely transformed our online presence — our <strong>SEO traffic skyrocketed, our visibility exploded</strong>, and our message reached audiences we could never have reached before. The craftsmanship, ongoing maintenance, and attention to detail have been second to none. We'll always choose Causory — because they didn't just build a website, <strong>they built momentum for change.</strong>"
                </blockquote>
                <div className="testimonial-author">
                  <h4>Scott Miner</h4>
                  <p>Founder & CEO · Restoring San Diego</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card scroll-animate slide-right delay-3">
              <div className="google-review-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span>Google Review</span>
              </div>
              <div className="testimonial-avatar" style={{background: 'linear-gradient(135deg, #34A853, #0ea5e9)'}}>CM</div>
              <div className="testimonial-content">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <blockquote>
                  "Customer service is everything to me! Not only are they attentive to what details you ask but they also have a lot of knowledge and deliver results of your website with tons of care. It's customizable and if you have questions the response timing is quick! If I ever launch any other businesses I will <strong>100 percent use Causory every single time!</strong>"
                </blockquote>
                <div className="testimonial-author">
                  <h4>Casandra Martinez</h4>
                  <p>Owner · Casandra's Cleaning</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card scroll-animate fade-in delay-4">
              <div className="google-review-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span>Google Review</span>
              </div>
              <div className="testimonial-avatar" style={{background: 'linear-gradient(135deg, #f59e0b, #ec4899)'}}>YA</div>
              <div className="testimonial-content">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <blockquote>
                  "Working with Causory was such a great experience. They were super helpful, friendly, and patient every step of the way. They really listened to my ideas and brought my thoughts to life on the site even better than I imagined. I'm so thankful for their creativity and professionalism — <strong>highly recommend Causory</strong> to anyone looking for a beautiful, well-designed website!"
                </blockquote>
                <div className="testimonial-author">
                  <h4>Yvonne</h4>
                  <p>Owner · Teresita's Birria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title scroll-animate">Frequently Asked Questions</h2>
          <p className="section-intro scroll-animate delay-1">
            Everything you need to know about working with Causory.
          </p>
          <div className="faq-list">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`faq-item scroll-animate delay-${(i % 4) + 1} ${openFaq === i ? 'faq-open' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    q: "What is Website as a Service (WaaS)?",
    a: "It's a custom-designed website launched with a one-time setup fee, then kept hosted, secure, and supported through a flat $200/mo Website Care Plan — instead of a big upfront project with no ongoing support, or a bare-bones monthly builder that skips the custom design work."
  },
  {
    q: "What's included in the $200/month Website Care Plan?",
    a: "Secure hosting, SSL certificate, website updates, security monitoring, daily backups, content changes, technical support, performance optimization, and uptime monitoring — the same Website Care Plan on every tier."
  },
  {
    q: "How does the setup fee plus monthly plan work?",
    a: "The setup fee is a one-time cost due at kickoff that covers your custom design and build. The $200/mo Website Care Plan starts at launch and keeps your site hosted, secure, and updated. See the full breakdown on our pricing page."
  },
  {
    q: "Do you build websites for home service businesses?",
    a: "Yes — it's our focus. We build sites for general contractors, HVAC/plumbing/electrical companies, cleaning and landscaping businesses, and roofing/restoration companies, with service-area pages and quote request forms built in."
  },
  {
    q: "Do you offer an AI chatbot for my website?",
    a: "Yes — it's included at no extra cost on our Authority plan. It's trained on your business to answer FAQs and capture leads 24/7. See how it works on our pricing page."
  },
  {
    q: "Do you work with clients outside San Diego?",
    a: "Absolutely. While we're based in San Diego, CA, we work with businesses across the United States. Our entire process is remote-friendly — discovery, design, development, and launch all happen online."
  },
  {
    q: "How long does it take to launch?",
    a: "Most sites launch in 2–4 weeks from kickoff, depending on the plan and how quickly we get content and feedback from you. After launch, your site stays live and actively maintained through the Website Care Plan."
  }
];

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Causory | Website as a Service for Home Service Businesses | San Diego</title>
        <meta name="description" content="Causory is Website as a Service for home service businesses: a custom-designed website with a setup fee, then a flat $200/mo Website Care Plan for hosting, security, and support. Serving businesses nationwide from San Diego, CA." />
        <meta name="keywords" content="website as a service, home service business website, contractor website design, HVAC website design, plumber website design, cleaning company website, roofing website design, managed website subscription San Diego, website care plan" />
        <link rel="canonical" href="https://causory.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content show">
          <h1 className="hero-title animate-fade-in-up">
            Website as a
            <span className="hero-accent">
              Service
            </span>
          </h1>
          <p className="hero-description animate-fade-in-up delay-200">
            A custom-designed website for a one-time setup fee, then a flat $200/mo Website Care Plan for hosting, security, and support — built for home service businesses.
          </p>
          <div className="hero-pills animate-fade-in-up delay-300">
            <span className="hero-pill">Custom Design</span>
            <span className="hero-pill">Hosting &amp; Security</span>
            <span className="hero-pill">SEO Built In</span>
          </div>
          <div className="hero-buttons animate-fade-in-up delay-400">
            <Link to="/pricing" className="btn-primary">
              See Pricing
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
              <Link to="/services#conversion" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card scroll-animate roll-up delay-2">
              <div className="service-icon">⚡</div>
              <h3 className="service-title">Fast-Loading Sites</h3>
              <p className="service-description">Slow sites lose customers. We build lightning-fast pages that keep visitors engaged and ready to buy.</p>
              <Link to="/services#speed" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card scroll-animate slide-right delay-3">
              <div className="service-icon">📈</div>
              <h3 className="service-title">Get Found on Google</h3>
              <p className="service-description">Show up when customers search for what you offer. More visibility = more leads walking through your door.</p>
              <Link to="/services#seo" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card scroll-animate fade-in delay-4">
              <div className="service-icon">💳</div>
              <h3 className="service-title">Setup Fee + $200/mo Care Plan</h3>
              <p className="service-description">One setup fee to launch, then design, hosting, security, and support — all included in one flat monthly plan.</p>
              <Link to="/pricing" className="service-link">See Pricing →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser Section */}
      <section className="cta">
        <div className="cta-content">
          <h3 className="cta-title animate-fade-in-up">Website as a Service, From $700 + $200/mo</h3>
          <p className="cta-description animate-fade-in-up delay-200">
            A setup fee to launch, then a flat $200/mo Website Care Plan for hosting, security, and support. Add the AI chatbot on Authority.
          </p>
          <Link to="/pricing" className="cta-button animate-scale-in delay-400">
            See Plans &amp; Pricing
          </Link>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="capabilities">
        <div className="container">
          <h2 className="section-title scroll-animate">What's Included</h2>
          <p className="section-intro scroll-animate delay-1">
            Not a one-time build — a website that's actively managed through your Website Care Plan.
          </p>

          <div className="capabilities-featured">
            <div className="capability-featured-card pwa-card scroll-animate slide-left delay-2">
              <div className="cap-badge pwa-badge">Website Care Plan</div>
              <div className="cap-icon">🌐</div>
              <h3>One Site, Fully Managed</h3>
              <p>A custom-designed website with hosting, SSL, and daily backups handled for you. Mobile-first and fast-loading, kept current with ongoing updates and security monitoring through your Website Care Plan.</p>
              <ul className="cap-features">
                <li><span className="cap-check">✓</span> Custom design, not a template</li>
                <li><span className="cap-check">✓</span> Hosting, SSL &amp; daily backups included</li>
                <li><span className="cap-check">✓</span> Content changes handled for you</li>
                <li><span className="cap-check">✓</span> Mobile-first, fast-loading pages</li>
              </ul>
              <div className="cap-tags">
                <span>Setup Fee + Monthly</span><span>$200/mo Care Plan</span><span>Every Tier</span>
              </div>
            </div>

            <div className="capability-featured-card dashboard-card scroll-animate slide-right delay-2">
              <div className="cap-badge dashboard-badge">SEO Built In</div>
              <div className="cap-icon">📈</div>
              <h3>Built to Get Found on Google</h3>
              <p>Every site launches with an on-page SEO foundation. Growth and Authority plans add Google Business Profile integration and advanced SEO optimization, so visibility keeps improving instead of fading after launch.</p>
              <ul className="cap-features">
                <li><span className="cap-check purple">✓</span> On-page SEO foundation from day one</li>
                <li><span className="cap-check purple">✓</span> Google Business Profile integration (Growth+)</li>
                <li><span className="cap-check purple">✓</span> Advanced SEO optimization (Authority)</li>
                <li><span className="cap-check purple">✓</span> Performance optimization</li>
              </ul>
              <div className="cap-tags">
                <span>Local SEO</span><span>On-Page SEO</span><span>Performance</span>
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
              <div className="cap-sub-icon">📋</div>
              <h4>Quote &amp; Request Forms</h4>
              <p>Online quote/request forms connected to your inbox, built for how home service leads actually convert.</p>
            </div>
            <Link to="/pricing#chatbot" className="capability-sub-card scroll-animate zoom-rotate delay-3">
              <div className="cap-sub-icon">🤖</div>
              <h4>AI Chatbot</h4>
              <p>An AI chat assistant, trained on your business, that captures leads while you're offline. Included on Authority.</p>
            </Link>
            <div className="capability-sub-card scroll-animate zoom-rotate delay-4">
              <div className="cap-sub-icon">📸</div>
              <h4>Branding Photography</h4>
              <p>Professional headshots and business branding photography to build instant trust. Included on Authority.</p>
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
                A pretty website means nothing if it doesn't bring in customers. We design every page to guide visitors toward requesting a quote, booking, or calling you.
              </p>
            </div>

            <div className="why-item scroll-animate roll-up delay-2">
              <div className="why-icon">📱</div>
              <h3>Works on Every Device</h3>
              <p>
                Most of your customers are on their phones searching for a fix right now. We build sites that look great and work perfectly on any device—so you never lose a lead.
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
                The <Link to="/pricing#chatbot" style={{color: '#fff', textDecoration: 'underline'}}>AI chatbot</Link>, included on Authority, captures visitors 24/7. They get instant answers and you get qualified leads—even while you sleep.
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
                  Once designs are approved, our San Diego developers build your site using modern, scalable technology. We wire up quote/request forms, service-area pages, and custom integrations with your existing tools, plus the <Link to="/pricing#chatbot" style={{color: '#fff', textDecoration: 'underline'}}>AI chatbot</Link> if you're on the Authority plan. Every element is built mobile-first, rigorously tested across devices and browsers, and optimized for local search.
                </p>
              </div>
            </div>

            <div className="process-step scroll-animate slide-right delay-4">
              <div className="process-number">04</div>
              <div className="process-content">
                <h3>Launch & Growth</h3>
                <p>
                  Launch day is just the beginning. We provide comprehensive training, detailed analytics setup, and performance monitoring. Your Website Care Plan keeps the site hosted, secure, and updated, with ongoing support to help you maximize its impact over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="industries">
        <div className="container">
          <h2 className="section-title scroll-animate">Home Service Trades We Serve</h2>
          <p className="section-intro scroll-animate delay-1">
            We focus on home service businesses — understanding the way your customers search and the pages that turn that search into a booked job.
          </p>

          <div className="industries-grid">
            <Link to="/home-services" className="industry-card scroll-animate zoom-rotate delay-1">
              <div className="industry-icon">🔨</div>
              <h3>General Contractors &amp; Remodeling</h3>
              <p>
                Project galleries, service pages by trade, and a quote request built for jobs that take real research before someone commits.
              </p>
            </Link>

            <Link to="/home-services" className="industry-card scroll-animate zoom-rotate delay-2">
              <div className="industry-icon">🌡️</div>
              <h3>HVAC, Plumbing &amp; Electrical</h3>
              <p>
                Emergency-ready design with click-to-call up front, service-area pages, and maintenance-plan pages that build repeat business.
              </p>
            </Link>

            <Link to="/home-services" className="industry-card scroll-animate zoom-rotate delay-3">
              <div className="industry-icon">🧹</div>
              <h3>Cleaning, Landscaping &amp; Maintenance</h3>
              <p>
                Recurring-service pages, easy online booking requests, and review-forward design that turns one job into a standing contract.
              </p>
            </Link>

            <Link to="/home-services" className="industry-card scroll-animate zoom-rotate delay-4">
              <div className="industry-icon">🏠</div>
              <h3>Roofing &amp; Restoration</h3>
              <p>
                Insurance-claim-friendly content, storm/emergency response messaging, and before/after galleries that show the quality of the work.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="section-title scroll-animate">Recent Projects</h2>
          <div className="portfolio-grid">
            {[
              { id: 1, image: "image-1.jpg", title: "Teresita's Birria", type: "Food Truck Catering" },
              { id: 3, image: "image-3.jpg", title: "Casandra's Cleaning", type: "Professional Cleaning Services" },
              { id: 4, image: "image-4.jpg", title: "M&M Lawn Service", type: "Lawn Care & Landscaping" },
              { id: 6, image: "image-6.jpg", title: "You and I Organize", type: "Home Organizing & Cleaning" }
            ].map((project, index) => (
              <div key={project.id} className={`portfolio-item scroll-animate zoom-rotate delay-${index + 1}`}>
                <div className="portfolio-image">
                  <img src={`/${project.image}`} alt={`${project.title} - ${project.type} by Causory Web Design`} width={1200} height={685} loading="lazy" />
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
              <div className="testimonial-avatar" style={{background: 'linear-gradient(135deg, #0ea5e9, #6366f1)'}}>PA</div>
              <div className="testimonial-content">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <blockquote>
                  "Helped tremendously! We had a contract and needed specific reporting and tracking requirements. <strong>Product was on point and helped us excel.</strong>"
                </blockquote>
                <div className="testimonial-author">
                  <h4>Paul Armstrong</h4>
                  <p>Client</p>
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
              <div className="testimonial-avatar" style={{background: 'linear-gradient(135deg, #ec4899, #f59e0b)'}}>CR</div>
              <div className="testimonial-content">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <blockquote>
                  "Working with Daniel is like connecting with an old friend who knows what you need before you say it. <strong>His kindness, depth, and attention to detail made the whole process a joy.</strong>"
                </blockquote>
                <div className="testimonial-author">
                  <h4>Christiana Rice</h4>
                  <p>Client</p>
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

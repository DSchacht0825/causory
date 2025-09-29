import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPortfolioIntro, setShowPortfolioIntro] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const portfolioImages = [
    { src: "portfolio-1.jpg", title: "Professional Services Website", type: "Modern Business Design" },
    { src: "portfolio-2.jpg", title: "E-Commerce Platform", type: "Online Retail Solution" },
    { src: "portfolio-3.jpg", title: "Corporate Landing Page", type: "Brand Identity & Web Presence" },
    { src: "portfolio-4.jpg", title: "Spiritual Coaching", type: "Wellness & Life Guidance" },
    { src: "portfolio-5.png", title: "Technology Startup", type: "SaaS Platform Design" },
    { src: "image-1.jpg", title: "Food Truck Catering Site", type: "Web Design & Development" },
    { src: "image-2.jpg", title: "12 Step Journey Website", type: "Recovery & Wellness Platform" },
    { src: "image-4.jpg", title: "Therapy & Wellness Center", type: "Mental Health & Healing" },
    { src: "image-5.jpg", title: "Youth Empowerment Initiative", type: "Community Outreach & Prevention" }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    // Portfolio intro animation sequence - cycle through once
    if (showPortfolioIntro) {
      let totalImagesShown = 0;
      const totalImagesToShow = portfolioImages.length; // Show once

      const imageInterval = setInterval(() => {
        setCurrentImageIndex(prev => {
          totalImagesShown++;

          if (totalImagesShown >= totalImagesToShow) {
            // After showing all images once, hide portfolio intro
            setTimeout(() => setShowPortfolioIntro(false), 300);
            return prev;
          }

          // Cycle through images
          const nextIndex = (prev + 1) % portfolioImages.length;
          return nextIndex;
        });
      }, 200); // Show each image for 200ms (even faster)

      return () => clearInterval(imageInterval);
    }
  }, [showPortfolioIntro, portfolioImages.length]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Helmet>
        <title>Causory | Web Design North County San Diego | Therapist & Nonprofit Sites</title>
        <meta name="description" content="Professional web design for therapists, recovery centers & nonprofits in North County San Diego. HIPAA-compliant, mobile-responsive websites that connect you with clients & donors." />
        <meta name="keywords" content="web design North County San Diego, therapist website design, nonprofit web design, recovery center websites, HIPAA compliant web design, Oceanside web design, Carlsbad web designer, Vista website development, Escondido web development, Encinitas website design" />
        <link rel="canonical" href="https://causory.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Causory | Specialized Web Design North County San Diego" />
        <meta property="og:description" content="Professional websites for therapy practices, recovery centers & nonprofits in Oceanside, Carlsbad & Vista. HIPAA-compliant designs that drive results." />
        <meta property="og:url" content="https://causory.com/" />
        <meta property="og:image" content="https://causory.com/causory.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Causory Web Design" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Causory | Web Design for Therapists & Nonprofits" />
        <meta name="twitter:description" content="Specialized websites for mental health professionals & nonprofits in North County San Diego." />
        <meta name="twitter:image" content="https://causory.com/causory.png" />

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Causory Web Design",
            "description": "Professional web design for therapists, recovery centers & nonprofits in North County San Diego",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "CA",
              "addressLocality": "North County San Diego"
            },
            "telephone": "(619) 300-8337",
            "email": "hello@causory.com",
            "url": "https://causory.com",
            "areaServed": ["Oceanside", "Carlsbad", "Vista", "Escondido", "Encinitas", "San Marcos", "Solana Beach", "Del Mar"],
            "serviceType": "Web Design",
            "priceRange": "$5,000-$50,000",
            "sameAs": [
              "https://www.linkedin.com/company/causory-web-design/",
              "https://www.instagram.com/causory/"
            ]
          })}
        </script>

        {/* Professional Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Causory Web Design",
            "alternateName": "Causory",
            "description": "Specialized web design for therapists, recovery centers, and nonprofit organizations",
            "serviceType": ["Web Design", "Website Development", "HIPAA Compliant Websites", "Nonprofit Web Design"],
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "33.1958",
                "longitude": "-117.3792"
              },
              "geoRadius": "50000"
            },
            "url": "https://causory.com",
            "telephone": "(619) 300-8337",
            "email": "hello@causory.com"
          })}
        </script>
      </Helmet>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-links-left desktop-only">
              <a href="#services">Services</a>
              <a href="#therapist-design">Therapists</a>
              <a href="#portfolio">Portfolio</a>
            </div>
            <div className="nav-logo">
              <img src="/causory.png" alt="Causory Web Design - Specialized websites for therapists, recovery centers, and nonprofits in North County San Diego" style={{height: '40px'}} />
            </div>
            <div className="nav-links-right desktop-only">
              <a href="#recovery-design">Recovery</a>
              <a href="#nonprofit-design">Nonprofits</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="mobile-menu-button" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
              <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <div className="mobile-menu-links">
              <a href="#services" onClick={closeMobileMenu}>Services</a>
              <a href="#therapist-design" onClick={closeMobileMenu}>Therapists</a>
              <a href="#portfolio" onClick={closeMobileMenu}>Portfolio</a>
              <a href="#recovery-design" onClick={closeMobileMenu}>Recovery</a>
              <a href="#nonprofit-design" onClick={closeMobileMenu}>Nonprofits</a>
              <a href="#about" onClick={closeMobileMenu}>About</a>
              <a href="#contact" onClick={closeMobileMenu}>Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        {/* Portfolio Showcase Intro */}
        {showPortfolioIntro && (
          <div className="portfolio-showcase-intro">
            <div className="showcase-grid">
              {portfolioImages.map((image, index) => (
                <div
                  key={index}
                  className={`showcase-item ${index <= currentImageIndex ? 'active' : ''} ${index === currentImageIndex ? 'current' : ''}`}
                >
                  <img src={`/${image.src}`} alt={image.title} />
                  <div className="showcase-title">
                    <h3>{image.title}</h3>
                    <p>{image.type}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="showcase-overlay">
              <h2 className="showcase-heading">Our Recent Work</h2>
              <div className="showcase-loader">
                <div className="loader-bar" style={{width: `${((currentImageIndex + 1) / portfolioImages.length) * 100}%`}}></div>
              </div>
            </div>
          </div>
        )}

        {/* Main Hero Content */}
        <div className={`hero-content ${!showPortfolioIntro ? 'show' : ''}`}>
          <h1 className="hero-title animate-fade-in-up">
            Web Design That
            <span className="hero-accent">
              Stands Out
            </span>
          </h1>
          <p className="hero-description animate-fade-in-up delay-200">
            We create stunning, modern websites that captivate your audience and drive results.
          </p>
          <div className="hero-buttons animate-fade-in-up delay-400">
            <a href="#portfolio" className="btn-primary">
              View Our Work
            </a>
            <a href="#contact" className="btn-secondary">
              Start a Project
            </a>
          </div>
        </div>

        {/* Animated gradient orbs */}
        <div className={`orb orb-1 ${!showPortfolioIntro ? 'show' : ''}`}></div>
        <div className={`orb orb-2 ${!showPortfolioIntro ? 'show' : ''}`}></div>
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
            </div>
            <div className="service-card scroll-animate roll-up delay-2">
              <div className="service-icon">⚡</div>
              <h3 className="service-title">Development</h3>
              <p className="service-description">Fast, responsive websites built with cutting-edge technology</p>
            </div>
            <div className="service-card scroll-animate slide-right delay-3">
              <div className="service-icon">📈</div>
              <h3 className="service-title">SEO & Marketing</h3>
              <p className="service-description">Optimize your online presence and reach your target audience</p>
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

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-overlay"></div>
        <div className="container">
          <div className="about-content">
            <h2 className="section-title scroll-animate">About Causory</h2>
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

      {/* Therapist Website Design Section */}
      <section id="therapist-design" className="therapist-design">
        <div className="therapist-overlay"></div>
        <div className="container">
          <div className="niche-content">
            <h2 className="section-title scroll-animate">Websites for Mental Health Professionals</h2>
            <p className="niche-intro scroll-animate delay-1">
              Building trust online starts with a website that reflects the safety and professionalism your clients need.
            </p>
            
            <div className="niche-grid">
              <div className="niche-info scroll-animate slide-left delay-2">
                <h4>🛡️ HIPAA-Compliant Design</h4>
                <p>Your clients' privacy is paramount. We build websites with secure hosting, encrypted forms, and HIPAA-compliant infrastructure that protects sensitive information while maintaining a welcoming, professional appearance.</p>
                
                <h4>💙 Compassionate User Experience</h4>
                <p>We understand that someone visiting your site may be in crisis or seeking help for the first time. Our designs create calm, trustworthy experiences that guide visitors toward taking that crucial first step.</p>
                
                <h4>⚕️ Professional Credibility</h4>
                <p>From licensing displays to therapy approach explanations, we showcase your expertise and credentials in ways that build confidence and establish your authority in mental health care.</p>
              </div>
              
              <div className="niche-features scroll-animate slide-right delay-3">
                <h4>What's Included:</h4>
                <ul>
                  <li>✓ HIPAA-compliant contact forms and intake processes</li>
                  <li>✓ Secure client portal integration options</li>
                  <li>✓ Appointment booking with encrypted scheduling</li>
                  <li>✓ Crisis resource pages and emergency contacts</li>
                  <li>✓ Insurance and payment information displays</li>
                  <li>✓ Therapy approach and specialization pages</li>
                  <li>✓ Professional bio and credentials showcase</li>
                  <li>✓ Mobile-optimized for clients on-the-go</li>
                </ul>
                
                <div className="niche-cta">
                  <a href="#contact" className="niche-button scroll-animate zoom-rotate delay-4">
                    Discuss Your Practice Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery & Wellness Centers Section */}
      <section id="recovery-design" className="recovery-design">
        <div className="recovery-overlay"></div>
        <div className="container">
          <div className="niche-content">
            <h2 className="section-title scroll-animate">Websites for Recovery & Wellness Centers</h2>
            <p className="niche-intro scroll-animate delay-1">
              Your website can be the bridge between struggle and hope. We create digital spaces that inspire healing and guide people toward recovery.
            </p>
            
            <div className="niche-grid">
              <div className="niche-info scroll-animate slide-left delay-2">
                <h4>🌅 Hope-Centered Design</h4>
                <p>Recovery websites need to inspire hope while maintaining professionalism. We balance uplifting imagery and messaging with clear, actionable information about your programs and approach to healing.</p>
                
                <h4>🤝 Community Connection</h4>
                <p>From alumni stories to family resources, we create platforms that showcase the community aspect of recovery, helping visitors see they're not alone in their journey toward wellness.</p>
                
                <h4>📱 Crisis-Ready Features</h4>
                <p>When someone needs help, they need it now. We build websites with prominent crisis hotlines, immediate contact options, and clear pathways to admission and assessment processes.</p>
              </div>
              
              <div className="niche-features scroll-animate slide-right delay-3">
                <h4>Specialized Features:</h4>
                <ul>
                  <li>✓ 24/7 crisis hotline integration and prominent placement</li>
                  <li>✓ Addiction assessment tools and questionnaires</li>
                  <li>✓ Insurance verification and admissions processes</li>
                  <li>✓ Program information and treatment approaches</li>
                  <li>✓ Success stories and alumni testimonials</li>
                  <li>✓ Family and loved ones resource sections</li>
                  <li>✓ Dual diagnosis and specialized treatment pages</li>
                  <li>✓ Aftercare and continuing support information</li>
                </ul>
                
                <div className="niche-cta">
                  <a href="#contact" className="niche-button scroll-animate zoom-rotate delay-4">
                    Start Your Center's Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nonprofit Website Design Section */}
      <section id="nonprofit-design" className="nonprofit-design">
        <div className="nonprofit-overlay"></div>
        <div className="container">
          <div className="niche-content">
            <h2 className="section-title scroll-animate">Websites for Nonprofit Organizations</h2>
            <p className="niche-intro scroll-animate delay-1">
              Your mission deserves a digital presence that inspires action and drives meaningful change in your community.
            </p>
            
            <div className="niche-grid">
              <div className="niche-info scroll-animate slide-left delay-2">
                <h4>🎯 Mission-Driven Design</h4>
                <p>We translate your cause into compelling digital experiences that connect with supporters, volunteers, and the communities you serve. Every design element reinforces your mission and impact.</p>
                
                <h4>💝 Donation Optimization</h4>
                <p>From seamless donation forms to impact storytelling, we create websites that make giving easy, secure, and meaningful. Our designs help supporters understand exactly how their contributions create change.</p>
                
                <h4>🌟 Volunteer Engagement</h4>
                <p>Transform visitors into active participants with clear volunteer opportunities, easy sign-up processes, and community building features that keep supporters engaged with your cause.</p>
              </div>
              
              <div className="niche-features scroll-animate slide-right delay-3">
                <h4>Purpose-Built Features:</h4>
                <ul>
                  <li>✓ Secure donation processing and recurring giving options</li>
                  <li>✓ Volunteer registration and opportunity management</li>
                  <li>✓ Event calendar and fundraiser promotion</li>
                  <li>✓ Impact reporting and transparency pages</li>
                  <li>✓ Grant application and foundation resources</li>
                  <li>✓ Newsletter signup and supporter communication</li>
                  <li>✓ Social media integration and sharing tools</li>
                  <li>✓ ADA compliance for inclusive accessibility</li>
                </ul>
                
                <div className="niche-cta">
                  <a href="#contact" className="niche-button scroll-animate zoom-rotate delay-4">
                    Amplify Your Mission Online
                  </a>
                </div>
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
          <h3 className="cta-title animate-fade-in-up">Ready to Transform Your Digital Presence?</h3>
          <p className="cta-description animate-fade-in-up delay-200">Let's create something extraordinary together.</p>
          <a href="#contact" className="cta-button animate-scale-in delay-400">
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
            <a href="https://www.linkedin.com/company/causory-web-design/">LinkedIn</a>
            <a href="https://www.instagram.com/causory/">Instagram</a>
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
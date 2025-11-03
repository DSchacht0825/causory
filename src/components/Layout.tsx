import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Chatbot from './Chatbot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="app">
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Causory",
              "image": "https://causory.com/causory.png",
              "description": "San Diego's leading AI assistant, AI booking system, and web design agency. Custom websites and intelligent automation for businesses throughout San Diego County.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Diego",
                "addressRegion": "CA",
                "postalCode": "92037",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 32.8328,
                "longitude": -117.2713
              },
              "url": "https://www.causory.com",
              "telephone": "+1-619-300-8337",
              "priceRange": "$$",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "San Diego"
                },
                {
                  "@type": "City",
                  "name": "La Jolla"
                },
                {
                  "@type": "City",
                  "name": "Del Mar"
                },
                {
                  "@type": "City",
                  "name": "Carlsbad"
                },
                {
                  "@type": "City",
                  "name": "Encinitas"
                },
                {
                  "@type": "City",
                  "name": "Solana Beach"
                }
              ],
              "serviceType": [
                "AI Assistant Development",
                "AI Booking System",
                "Web Design",
                "Web Development",
                "AI Automation",
                "Chatbot Development"
              ],
              "sameAs": [
                "https://www.linkedin.com/company/causory-web-design/",
                "https://www.instagram.com/causory/"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "bestRating": "5",
                "worstRating": "1",
                "ratingCount": "2"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Yvonne Araujo"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Working with Causory was such a great experience. They were super helpful, friendly, and patient every step of the way. They really listened to my ideas and brought my thoughts to life on the site even better than I imagined. I'm so thankful for their creativity and professionalism—highly recommend Causory to anyone looking for a beautiful, well-designed website!",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Teresita's Birria"
                  }
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Scott Miner"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "When Restoring San Diego was still finding its footing, Causory became our launchpad. Their web design completely transformed our online presence—our SEO traffic skyrocketed, our visibility exploded, and our message reached audiences we could never have reached before. The craftsmanship, ongoing maintenance, and attention to detail have been second to none. We'll always choose Causory—because they didn't just build a website, they built momentum for change.",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Restoring San Diego"
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-links-left desktop-only">
              <Link to="/">Home</Link>
              <Link to="/portfolio">Portfolio</Link>
            </div>
            <div className="nav-logo">
              <Link to="/">
                <img src="/causory.png" alt="Causory Web Design & AI Solutions" style={{height: '60px'}} />
              </Link>
            </div>
            <div className="nav-links-right desktop-only">
              <Link to="/ai-consulting">AI Consulting</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
            
            <button className="mobile-menu-button" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
              <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
          
          <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <div className="mobile-menu-links">
              <Link to="/" onClick={closeMobileMenu}>Home</Link>
              <Link to="/portfolio" onClick={closeMobileMenu}>Portfolio</Link>
              <Link to="/ai-consulting" onClick={closeMobileMenu}>AI Consulting</Link>
              <Link to="/about" onClick={closeMobileMenu}>About</Link>
              <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main>{children}</main>

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

      <Chatbot />
    </div>
  );
};

export default Layout;

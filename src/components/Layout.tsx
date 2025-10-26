import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-links-left desktop-only">
              <Link to="/">Home</Link>
              <Link to="/portfolio">Portfolio</Link>
            </div>
            <div className="nav-logo">
              <Link to="/">
                <img src="/causory.png" alt="Causory Web Design & AI Solutions" style={{height: '80px'}} />
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

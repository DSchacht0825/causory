import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="about-overlay"></div>
        <div className="container">
          <div className="about-content">
            <h2 className="section-title scroll-animate">About Causory</h2>
            <div className="about-text">
              <p className="about-intro">
                At Causory, we blend stunning web design with intelligent AI solutions to transform how businesses work and connect.
              </p>

              <p>
                In today's digital landscape, success requires more than a beautiful website—it demands <strong>intelligent systems</strong> that work alongside your team. We're passionate about two things: creating websites that captivate audiences and implementing AI solutions that amplify human potential.
              </p>

              <p>
                Our mission is simple yet powerful: help businesses harness the full potential of modern technology. Whether it's building a website that converts visitors into customers or deploying AI automation that saves hours of manual work, we believe technology should <strong>empower people</strong>, not replace them. Every solution we create is designed to enhance your team's capabilities while maintaining the human touch that makes your business unique.
              </p>

              <div className="about-grid">
                <div className="about-section">
                  <h4>🤖 AI Consulting & Automation</h4>
                  <ul>
                    <li><strong>Intelligent Workflow Automation</strong> – Replace repetitive tasks with smart AI systems that learn and adapt</li>
                    <li><strong>Custom AI Integration</strong> – Seamlessly integrate ChatGPT, Claude, and other AI tools into your existing processes</li>
                    <li><strong>Team Training & Enablement</strong> – Hands-on coaching to help your team use AI confidently and effectively</li>
                    <li><strong>AI Strategy & Roadmapping</strong> – Identify high-impact opportunities for AI in your business</li>
                    <li><strong>Content & Marketing Automation</strong> – AI-powered systems for content creation, social media, and campaigns</li>
                  </ul>
                </div>

                <div className="about-section">
                  <h4>🎨 Web Design & Development</h4>
                  <ul>
                    <li><strong>Custom Website Design</strong> – Beautiful, modern sites that capture your brand's essence</li>
                    <li><strong>Responsive Development</strong> – Flawless experiences across desktop, tablet, and mobile</li>
                    <li><strong>SEO & Performance</strong> – Lightning-fast, optimized sites that rank well and convert visitors</li>
                    <li><strong>Brand Strategy</strong> – Visual identity that resonates with your audience</li>
                    <li><strong>E-commerce Solutions</strong> – Online stores that drive sales and delight customers</li>
                  </ul>
                </div>
              </div>

              <div className="about-section" style={{marginTop: '3rem'}}>
                <h4>⚡ Our Process: Human-Centered Technology</h4>
                <p>
                  Every project starts with deep discovery—understanding your unique challenges, goals, and vision. For web projects, we craft designs that tell your story. For AI consulting, we map your workflows to find automation opportunities that save time without sacrificing quality.
                </p>
                <p style={{marginTop: '1rem'}}>
                  We believe the best solutions combine human creativity with machine efficiency. Our AI implementations don't replace your team—they <strong>amplify their capabilities</strong>, freeing them to focus on strategic, creative work that truly requires human insight. Similarly, our websites aren't just pretty—they're strategic tools designed to convert visitors and support your business goals.
                </p>
              </div>

              <div className="about-why">
                <h4>🚀 Why Causory?</h4>
                <p>
                  We're not just designers or developers—we're <strong>strategic partners</strong> in your growth. Whether you need a website that converts or AI systems that streamline operations, we bring both technical expertise and business acumen. We understand that every business is unique, which is why we customize every solution to fit your specific needs, budget, and timeline.
                </p>
                <p style={{marginTop: '1rem'}}>
                  Our clients choose us because we speak their language, deliver measurable results, and stay committed long after launch. From small businesses to growing enterprises, we help organizations work smarter, reach more people, and achieve their goals through intelligent technology and beautiful design.
                </p>
              </div>

              <div className="text-center mt-8">
                <Link to="/contact" className="btn-primary">Let's Work Together</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

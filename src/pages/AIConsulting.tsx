import React from 'react';
import { Link } from 'react-router-dom';

const AIConsulting: React.FC = () => {
  return (
    <>
      <section id="ai-consulting" className="ai-consulting">
        <div className="ai-overlay"></div>
        <div className="container">
          <div className="niche-content">
            <h2 className="section-title scroll-animate">AI Consulting for Businesses That Want to Work Smarter</h2>
            <p className="niche-intro scroll-animate delay-1">
              Transform how you work with the power of AI. We help organizations harness artificial intelligence to automate repetitive tasks, streamline operations, and unlock creativity.
            </p>

            <div className="niche-grid">
              <div className="niche-info scroll-animate slide-left delay-2">
                <h4>🎯 Discovery & Strategy</h4>
                <p>We start by understanding your organization—your goals, challenges, and current systems. From there, we create a customized roadmap showing where AI can have the biggest impact.</p>

                <h4>⚡ Workflow Automation</h4>
                <p>We identify manual or time-consuming processes and replace them with intelligent automations using tools like ChatGPT, Zapier, Notion AI, or custom AI models.</p>

                <h4>📚 Training & Integration</h4>
                <p>Our hands-on workshops and 1-on-1 coaching sessions empower your team to use AI confidently and ethically—from marketing and data entry to content creation and customer engagement.</p>

                <h4>🔄 Continuous Improvement</h4>
                <p>We help you stay ahead of the curve with regular updates, prompt engineering support, and guidance on new AI technologies as they evolve.</p>
              </div>

              <div className="niche-features scroll-animate slide-right delay-3">
                <h4>What We Help With:</h4>
                <ul>
                  <li>✓ AI strategy & workflow mapping</li>
                  <li>✓ Custom prompt libraries</li>
                  <li>✓ Chatbot & automation setup (ChatGPT, Zapier, Make, etc.)</li>
                  <li>✓ AI-powered content creation (blogs, ads, social media)</li>
                  <li>✓ Data analysis & reporting automation</li>
                  <li>✓ Website and SEO optimization using AI tools</li>
                  <li>✓ Staff training on safe & effective AI use</li>
                </ul>

                <div className="ai-industries">
                  <h4>Industries We Serve:</h4>
                  <ul>
                    <li>• Nonprofits & faith-based organizations</li>
                    <li>• Small business owners & startups</li>
                    <li>• Therapists, coaches, and educators</li>
                    <li>• Creative professionals & agencies</li>
                  </ul>
                </div>

                <div className="ai-philosophy">
                  <p><strong>Why Choose Us:</strong> We believe technology should serve people, not replace them. Our AI consulting helps your business stay human-centered—increasing efficiency while keeping empathy, creativity, and purpose at the heart of your work.</p>
                </div>

                <div className="niche-cta">
                  <Link to="/contact" className="niche-button scroll-animate zoom-rotate delay-4">
                    Schedule a Free Discovery Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIConsulting;

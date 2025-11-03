import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AIConsulting: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Assistant & Booking System San Diego | AI Automation | Causory</title>
        <meta name="description" content="Leading AI assistant and AI booking system provider in San Diego. Transform your business with custom AI chatbots, intelligent booking automation, and workflow solutions. Serving La Jolla, Del Mar, Carlsbad, and all of San Diego County." />
        <meta name="keywords" content="AI assistant San Diego, AI booking system San Diego, AI chatbot San Diego, AI automation San Diego, custom AI solutions, intelligent booking, San Diego AI consulting" />
        <link rel="canonical" href="https://www.causory.com/ai-consulting" />
      </Helmet>

      <section id="ai-consulting" className="ai-consulting">
        <div className="ai-overlay"></div>
        <div className="container">
          <div className="niche-content">
            <h1 className="section-title scroll-animate">AI Assistants & Booking Systems in San Diego</h1>
            <p className="niche-intro scroll-animate delay-1">
              Transform your San Diego business with intelligent AI assistants and automated booking systems that work 24/7. We help local businesses in La Jolla, Del Mar, Carlsbad, and throughout San Diego County implement cutting-edge AI technology that saves time, increases revenue, and delivers exceptional customer experiences.
            </p>

            {/* Main Content Section */}
            <div className="ai-main-content" style={{marginTop: '3rem', marginBottom: '3rem'}}>
              <h2 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#fff'}}>Why San Diego Businesses Need AI Assistants</h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                In today's competitive San Diego market, businesses need to be available around the clock. Whether you're a therapist in La Jolla, a recovery center in North County, or a professional service provider downtown, your potential clients are searching for help at all hours. An <strong>AI assistant</strong> ensures you never miss an opportunity.
              </p>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                Our AI assistants are trained specifically for San Diego businesses. They understand your local market, can answer common questions about your services, qualify leads automatically, and seamlessly hand off to your team when needed. Unlike traditional chatbots that frustrate users with rigid scripts, our AI assistants use advanced natural language processing to have genuine, helpful conversations.
              </p>

              <h2 style={{fontSize: '2rem', marginTop: '3rem', marginBottom: '1.5rem', color: '#fff'}}>AI Booking Systems That Convert</h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                Imagine a potential client visits your website at 11 PM on a Saturday night. They're ready to book an appointment, but your office is closed. With a traditional website, they leave and might never come back. With an <strong>AI booking system</strong>, they complete their booking instantly, receive confirmation, and you wake up to new revenue.
              </p>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)'}}>
                Our AI booking systems integrate with your existing calendar (Google Calendar, Outlook, or specialized practice management software) to:
              </p>
              <ul style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)', marginLeft: '2rem'}}>
                <li>Check real-time availability across your entire team</li>
                <li>Qualify leads before booking (insurance verification, service match, etc.)</li>
                <li>Send automated confirmations and reminders (reducing no-shows by up to 40%)</li>
                <li>Handle rescheduling and cancellations automatically</li>
                <li>Collect intake forms and payment information upfront</li>
                <li>Sync seamlessly with your CRM and billing systems</li>
              </ul>

              <h2 style={{fontSize: '2rem', marginTop: '3rem', marginBottom: '1.5rem', color: '#fff'}}>Our AI Solutions for San Diego Businesses</h2>
            </div>

            <div className="niche-grid">
              <div className="niche-info scroll-animate slide-left delay-2">
                <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>🤖 Custom AI Assistants</h3>
                <p style={{fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem'}}>
                  We build AI assistants trained on your specific business, services, and frequently asked questions. Perfect for therapists, medical practices, law firms, and service providers who want to pre-qualify leads and answer common questions instantly. Our AI assistants can handle appointment requests, provide service information, collect contact details, and escalate complex inquiries to your team.
                </p>

                <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>📅 Intelligent Booking Systems</h3>
                <p style={{fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem'}}>
                  Stop losing bookings to closed offices and phone tag. Our AI booking systems work 24/7, integrating with your calendar to offer real-time availability. Clients book instantly, receive automated confirmations and reminders, and you see a dramatic reduction in no-shows. Ideal for therapy practices, wellness centers, salons, consultants, and any appointment-based business in San Diego.
                </p>

                <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>⚡ Workflow Automation</h3>
                <p style={{fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem'}}>
                  Beyond customer-facing AI, we automate internal processes that drain your time. From automated email responses and lead nurturing sequences to data entry, invoice processing, and report generation. We identify the repetitive tasks in your workflow and replace them with intelligent automation using tools like Zapier, Make, and custom AI models.
                </p>

                <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>🎓 AI Training & Implementation</h3>
                <p style={{fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem'}}>
                  We don't just build AI systems and disappear. Our team provides comprehensive training for your staff, detailed documentation, and ongoing support. You'll understand how to manage your AI assistant, update responses, track performance metrics, and optimize for better results. We offer monthly check-ins and continuous improvement recommendations.
                </p>
              </div>

              <div className="niche-features scroll-animate slide-right delay-3">
                <h3 style={{fontSize: '1.5rem', marginBottom: '1.5rem'}}>What We Deliver:</h3>
                <ul style={{fontSize: '1.05rem', lineHeight: '2'}}>
                  <li>✓ 24/7 AI assistants that never sleep</li>
                  <li>✓ Automated booking with calendar integration</li>
                  <li>✓ Lead qualification and routing</li>
                  <li>✓ Appointment reminders (SMS & email)</li>
                  <li>✓ Custom AI trained on your business</li>
                  <li>✓ CRM and software integrations</li>
                  <li>✓ Analytics and performance tracking</li>
                  <li>✓ Mobile-responsive chat interfaces</li>
                  <li>✓ HIPAA-compliant solutions (for healthcare)</li>
                  <li>✓ Bilingual support (English/Spanish)</li>
                </ul>

                <div className="ai-industries" style={{marginTop: '2.5rem'}}>
                  <h3 style={{fontSize: '1.5rem', marginBottom: '1.5rem'}}>San Diego Industries We Serve:</h3>
                  <ul style={{fontSize: '1.05rem', lineHeight: '2'}}>
                    <li>• Mental health therapists & counselors</li>
                    <li>• Recovery and treatment centers</li>
                    <li>• Medical and dental practices</li>
                    <li>• Legal services and law firms</li>
                    <li>• Wellness and fitness studios</li>
                    <li>• Professional consultants and coaches</li>
                    <li>• Salons and spa services</li>
                    <li>• Nonprofits and community organizations</li>
                  </ul>
                </div>

                <div style={{marginTop: '2.5rem', padding: '1.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px'}}>
                  <h3 style={{fontSize: '1.3rem', marginBottom: '1rem'}}>📍 Service Areas in San Diego County:</h3>
                  <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
                    We proudly serve businesses throughout San Diego County including La Jolla, Del Mar, Carlsbad, Encinitas, Solana Beach, Pacific Beach, Mission Beach, Ocean Beach, Point Loma, Downtown San Diego, North Park, Hillcrest, University City, Rancho Bernardo, Poway, and all surrounding areas.
                  </p>
                </div>
              </div>
            </div>

            {/* Case Studies Section */}
            <div style={{marginTop: '4rem', marginBottom: '3rem'}}>
              <h2 style={{fontSize: '2rem', marginBottom: '2rem', color: '#fff', textAlign: 'center'}}>Real Results from San Diego Businesses</h2>

              <div style={{display: 'grid', gap: '2rem', marginBottom: '3rem'}}>
                <div style={{background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '8px'}}>
                  <h4 style={{fontSize: '1.3rem', marginBottom: '0.5rem', color: '#fff'}}>Therapy Practice in La Jolla</h4>
                  <p style={{fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '1rem'}}>Challenge: Missing 60% of calls during sessions, losing potential clients</p>
                  <p style={{fontSize: '1.05rem', lineHeight: '1.7'}}>
                    After implementing our AI assistant and booking system, this practice saw a <strong>156% increase in new client bookings</strong> within 90 days. The AI assistant answers common questions about specializations, insurance, and availability, then routes qualified leads directly to the booking system. No-shows decreased by 38% thanks to automated SMS reminders.
                  </p>
                </div>

                <div style={{background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '8px'}}>
                  <h4 style={{fontSize: '1.3rem', marginBottom: '0.5rem', color: '#fff'}}>Recovery Center in North County</h4>
                  <p style={{fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '1rem'}}>Challenge: Families calling 24/7 in crisis, limited staff to handle inquiries</p>
                  <p style={{fontSize: '1.05rem', lineHeight: '1.7'}}>
                    Our AI assistant handles initial inquiries at any hour, provides information about programs, verifies insurance eligibility, and schedules assessments. The center now <strong>captures 100% of inquiries</strong> instead of missing after-hours calls. Staff time spent on repetitive questions dropped by 22 hours per week, allowing them to focus on patient care.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div style={{marginTop: '4rem', marginBottom: '3rem'}}>
              <h2 style={{fontSize: '2rem', marginBottom: '2rem', color: '#fff'}}>Frequently Asked Questions</h2>

              <div style={{display: 'grid', gap: '2rem'}}>
                <div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff'}}>How long does it take to implement an AI assistant?</h4>
                  <p style={{fontSize: '1.05rem', lineHeight: '1.7'}}>
                    Most AI assistants are live within 2-3 weeks. We start with a discovery call to understand your business, then spend 1-2 weeks training the AI on your services, FAQs, and booking process. After testing and refinement, we launch and provide training for your team.
                  </p>
                </div>

                <div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff'}}>Will the AI assistant work with my existing website?</h4>
                  <p style={{fontSize: '1.05rem', lineHeight: '1.7'}}>
                    Yes! Our AI assistants integrate seamlessly with any website platform (WordPress, Squarespace, Wix, custom sites, etc.). We add a simple code snippet to your site and the AI chat appears as a widget. We can also build a completely new website optimized for AI if needed—check out our <Link to="/portfolio" style={{color: '#fff', textDecoration: 'underline'}}>web design portfolio</Link> for examples.
                  </p>
                </div>

                <div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff'}}>Is this HIPAA compliant for healthcare practices?</h4>
                  <p style={{fontSize: '1.05rem', lineHeight: '1.7'}}>
                    Yes. For healthcare providers in San Diego, we implement HIPAA-compliant AI solutions with end-to-end encryption, secure data storage, and Business Associate Agreements (BAAs). Your patient data remains protected while enjoying the benefits of AI automation.
                  </p>
                </div>

                <div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff'}}>How much does an AI assistant or booking system cost?</h4>
                  <p style={{fontSize: '1.05rem', lineHeight: '1.7'}}>
                    Investment varies based on complexity, integrations, and features. Most San Diego businesses invest between $2,500-$7,500 for initial setup, with monthly maintenance starting at $150-$500. We offer flexible payment plans and can discuss ROI based on your current lead volume. <Link to="/contact" style={{color: '#fff', textDecoration: 'underline'}}>Schedule a free consultation</Link> for a custom quote.
                  </p>
                </div>

                <div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff'}}>Can the AI handle Spanish-speaking clients?</h4>
                  <p style={{fontSize: '1.05rem', lineHeight: '1.7'}}>
                    Absolutely. We can train AI assistants to communicate fluently in both English and Spanish, which is especially valuable for San Diego businesses serving diverse communities. The AI automatically detects the user's language and responds appropriately.
                  </p>
                </div>

                <div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff'}}>What if the AI can't answer a question?</h4>
                  <p style={{fontSize: '1.05rem', lineHeight: '1.7'}}>
                    Our AI assistants are smart enough to know their limits. When they encounter a question outside their training or that requires human judgment, they gracefully collect the visitor's contact information and notify your team for follow-up. You maintain full control over the escalation process.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div style={{marginTop: '4rem', marginBottom: '3rem', background: 'rgba(255,255,255,0.05)', padding: '3rem', borderRadius: '12px'}}>
              <h2 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#fff'}}>Why San Diego Businesses Choose Causory</h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
                As a San Diego-based AI consulting firm, we understand the unique needs of local businesses. We're not a faceless agency in another state—we're part of your community. We've helped dozens of San Diego businesses implement AI assistants and booking systems that deliver real ROI.
              </p>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
                Our approach combines technical expertise with local market knowledge. We know what San Diego clients expect, how to navigate HIPAA requirements for healthcare providers, and how to create AI experiences that feel personal, not robotic. Every AI assistant we build is custom-trained on your specific business, ensuring accurate, helpful responses.
              </p>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
                Beyond implementation, we provide ongoing optimization. We analyze conversation logs, identify areas for improvement, and continuously refine your AI assistant to increase conversion rates. Our clients typically see booking rates improve by 15-25% within the first 90 days as we optimize the system.
              </p>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                Whether you need a simple AI chatbot to answer FAQs or a sophisticated booking system with insurance verification and CRM integration, we have the expertise to deliver. We also offer full-service <Link to="/portfolio" style={{color: '#fff', textDecoration: 'underline'}}>web design and development</Link> if you need a new website to showcase your AI capabilities.
              </p>
            </div>

            {/* CTA Section */}
            <div className="niche-cta" style={{textAlign: 'center', marginTop: '4rem'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#fff'}}>Ready to Transform Your San Diego Business with AI?</h3>
              <p style={{fontSize: '1.1rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.9)'}}>
                Schedule a free 30-minute consultation to discuss your AI assistant or booking system needs. We'll analyze your current workflow, identify opportunities for automation, and provide a custom proposal with ROI projections.
              </p>
              <Link to="/contact" className="niche-button scroll-animate zoom-rotate delay-4" style={{display: 'inline-block', marginBottom: '1rem'}}>
                Schedule Free Consultation
              </Link>
              <p style={{fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)'}}>
                📞 Call/Text: <a href="tel:6193008337" style={{color: '#fff', textDecoration: 'underline'}}>619-300-8337</a> | 📅 <a href="https://calendly.com/schacht-dan/30min" target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'underline'}}>Book Online</a>
              </p>
            </div>

            {/* Learn More Section */}
            <div style={{marginTop: '4rem', padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px'}}>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#fff'}}>Learn More About AI for Business</h3>
              <p style={{fontSize: '1rem', lineHeight: '1.7', marginBottom: '1rem'}}>
                Want to understand how AI assistants work? Check out <a href="https://www.anthropic.com/claude" target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'underline'}}>Anthropic's Claude AI</a> to see the technology powering modern AI assistants, or read <a href="https://www.forbes.com/advisor/business/software/ai-in-business/" target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'underline'}}>Forbes' guide to AI in business</a> for industry insights.
              </p>
              <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
                Explore our <Link to="/portfolio" style={{color: '#fff', textDecoration: 'underline'}}>portfolio of San Diego websites</Link> to see examples of our work, or visit our <Link to="/about" style={{color: '#fff', textDecoration: 'underline'}}>about page</Link> to learn more about our team and approach.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIConsulting;

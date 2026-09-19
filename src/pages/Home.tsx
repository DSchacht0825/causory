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


const painPoints = [
  {
    icon: '🕰️',
    title: '"My website looks outdated."',
    body: "Your work might be excellent, but customers don't know that yet. Their first impression happens online.",
  },
  {
    icon: '📞',
    title: '"I\'m not getting enough calls."',
    body: "Traffic doesn't matter if visitors don't know what to do next. We build around calls, quotes and appointments.",
  },
  {
    icon: '⏳',
    title: '"I don\'t have time for this."',
    body: "You're running a business. You shouldn't have to become a web designer, SEO expert, copywriter and tech support person too.",
  },
];

const feelings = [
  'You send someone your website and you\'re proud of it.',
  'Customers immediately understand what you do.',
  'They can call, request a quote or book without hunting around.',
  'Your site works great on their phone.',
  'And when something needs changing, you have someone to call.',
];

const steps = [
  {
    title: 'Tell us about your business',
    body: "Three quick questions: who you are, your current website (if you have one), and the #1 thing you'd like your website to do better. It takes about a minute.",
  },
  {
    title: 'We build',
    body: 'We design a custom, mobile-first site around calls, quotes and appointments, with on-page SEO built in. Hosting, security and the technical stuff are on us.',
  },
  {
    title: 'You start looking like the company you actually are',
    body: 'Your site launches fast and stays fast, secure and up to date through the Website Care Plan. Need a change? Call or text us.',
  },
];

const projects = [
  { id: 3, image: 'image-3.jpg', title: "Casandra's Cleaning", type: 'Professional Cleaning Services' },
  { id: 4, image: 'image-4.jpg', title: 'M&M Lawn Service', type: 'Lawn Care & Landscaping' },
  { id: 6, image: 'image-6.jpg', title: 'You and I Organize', type: 'Home Organizing & Cleaning' },
  { id: 1, image: 'image-1.jpg', title: "Teresita's Birria", type: 'Food Truck Catering' },
];

const reviews: {
  initials: string;
  gradient: string;
  quote: React.ReactNode;
  name: string;
  role: string;
}[] = [
  {
    initials: 'CM',
    gradient: 'linear-gradient(135deg, #34A853, #0ea5e9)',
    quote: (
      <>
        "Customer service is everything to me! Not only are they attentive to what details you ask but they also have a lot of knowledge and deliver results of your website with tons of care. It's customizable and if you have questions the response timing is quick! If I ever launch any other businesses I will <strong>100 percent use Causory every single time!</strong>"
      </>
    ),
    name: 'Casandra Martinez',
    role: "Owner · Casandra's Cleaning",
  },
  {
    initials: 'SM',
    gradient: 'linear-gradient(135deg, #EA4335, #FBBC05)',
    quote: (
      <>
        "When Restoring San Diego was still finding its footing, Causory became our launchpad. Their web design completely transformed our online presence — our <strong>SEO traffic skyrocketed, our visibility exploded</strong>, and our message reached audiences we could never have reached before. The craftsmanship, ongoing maintenance, and attention to detail have been second to none. We'll always choose Causory — because they didn't just build a website, <strong>they built momentum for change.</strong>"
      </>
    ),
    name: 'Scott Miner',
    role: 'Founder & CEO · Restoring San Diego',
  },
  {
    initials: 'YA',
    gradient: 'linear-gradient(135deg, #f59e0b, #ec4899)',
    quote: (
      <>
        "Working with Causory was such a great experience. They were super helpful, friendly, and patient every step of the way. They really listened to my ideas and brought my thoughts to life on the site even better than I imagined. I'm so thankful for their creativity and professionalism — <strong>highly recommend Causory</strong> to anyone looking for a beautiful, well-designed website!"
      </>
    ),
    name: 'Yvonne',
    role: "Owner · Teresita's Birria",
  },
  {
    initials: 'AS',
    gradient: 'linear-gradient(135deg, #4285F4, #34A853)',
    quote: (
      <>
        "Daniel exceeded expectations on our Soul Tide website. From kickoff to launch, he kept everything simple and stress-free, providing clear timelines, proactive updates, and thoughtful guidance. He translated our brand beautifully, optimized the site for speed and mobile, and handled all the technical pieces without any hassle. <strong>Incredibly communicative, informative, and easy to work with. Five stars without hesitation.</strong>"
      </>
    ),
    name: 'Ashley Sellers',
    role: 'Local Guide · Soul Tide Therapy',
  },
  {
    initials: 'CR',
    gradient: 'linear-gradient(135deg, #ec4899, #f59e0b)',
    quote: (
      <>
        "Working with Daniel is like connecting with an old friend who knows what you need before you say it. <strong>His kindness, depth, and attention to detail made the whole process a joy.</strong>"
      </>
    ),
    name: 'Christiana Rice',
    role: 'Client',
  },
  {
    initials: 'PA',
    gradient: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
    quote: (
      <>
        "Helped tremendously! We had a contract and needed specific reporting and tracking requirements. <strong>Product was on point and helped us excel.</strong>"
      </>
    ),
    name: 'Paul Armstrong',
    role: 'Client',
  },
];

const cardAnimations = ['slide-left', 'roll-up', 'slide-right', 'fade-in'];

const GoogleG: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

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

      {/* Hero: pain + promise */}
      <section className="hero">
        <div className="hero-content show">
          <h1 className="hero-title hero-title-lg animate-fade-in-up">
            Your website should be
            <span className="hero-accent">
              bringing you customers.
            </span>
          </h1>
          <p className="hero-description animate-fade-in-up delay-200">
            If your site is outdated, slow, or doesn't clearly tell people why they should hire you, you're probably losing calls to competitors who simply look more trustworthy online.
          </p>
          <p className="hero-subline animate-fade-in-up delay-200">
            Causory builds custom websites for home service businesses that turn searches into calls.
          </p>
          <div className="hero-buttons animate-fade-in-up delay-300">
            <Link to="/contact" state={{ source: 'home-hero' }} className="btn-primary">
              Show Me What My Website Is Missing
            </Link>
            <Link to="/portfolio" className="btn-secondary">
              See Our Work
            </Link>
          </div>
          <div className="hero-pills animate-fade-in-up delay-400">
            <span className="hero-pill">Custom Design</span>
            <span className="hero-pill">Hosting &amp; Security</span>
            <span className="hero-pill">SEO Built In</span>
          </div>
        </div>
        <div className="orb orb-1 show"></div>
        <div className="orb orb-2 show"></div>
      </section>

      {/* Problem + pain points */}
      <section className="why-choose problem">
        <div className="container">
          <h2 className="section-title scroll-animate">Your work isn't the problem. Your website might be.</h2>

          <div className="scenario scroll-animate delay-1">
            <p className="scenario-question">Does your website actually help you get hired?</p>
            <p>Someone needs a plumber. They Google it. They find you and three competitors.</p>
            <p>In about 30 seconds they're deciding who looks trustworthy, professional, and easy to contact.</p>
            <p className="scenario-punch">Your website is either helping you win that customer, or helping someone else win them.</p>
          </div>

          <div className="pain-grid">
            {painPoints.map((p, i) => (
              <div key={p.title} className={`why-item pain-card scroll-animate ${cardAnimations[i]} delay-${i + 1}`}>
                <div className="why-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/contact" state={{ source: 'home-pain' }} className="cta-button">
              Fix My Website →
            </Link>
          </div>
        </div>
      </section>

      {/* Transformation */}
      <section className="feeling">
        <div className="container">
          <h2 className="section-title scroll-animate">Imagine not worrying about your website anymore.</h2>

          <ul className="feeling-list scroll-animate delay-1">
            {feelings.map((f) => (
              <li key={f}>
                <span className="cap-check">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <p className="feeling-closer scroll-animate delay-2">That's what we build.</p>

          <div className="section-cta">
            <Link to="/contact" state={{ source: 'home-feeling' }} className="cta-button">
              Let's Build Something That Works
            </Link>
          </div>
        </div>
      </section>

      {/* What "handled" means (keeps the substance of the old What's Included section) */}
      <section className="capabilities">
        <div className="container">
          <h2 className="section-title scroll-animate">Everything handled, so you don't have to.</h2>
          <p className="section-intro scroll-animate delay-1">
            One custom-designed site, fully managed: a setup fee to launch, then a flat $200/mo Website Care Plan. No tech headaches, no chasing freelancers.
          </p>

          <div className="capabilities-sub-grid">
            <Link to="/services#seo" className="capability-sub-card scroll-animate zoom-rotate delay-1">
              <div className="cap-sub-icon">🔍</div>
              <h4>Found on Google</h4>
              <p>On-page SEO from day one. Growth adds Google Business Profile integration; Authority adds advanced SEO.</p>
            </Link>
            <Link to="/services#conversion" className="capability-sub-card scroll-animate zoom-rotate delay-2">
              <div className="cap-sub-icon">📋</div>
              <h4>Calls &amp; Quote Requests</h4>
              <p>Click-to-call and quote request forms connected to your inbox, built for how home service leads actually convert.</p>
            </Link>
            <Link to="/pricing" className="capability-sub-card scroll-animate zoom-rotate delay-3">
              <div className="cap-sub-icon">🛡️</div>
              <h4>Hosting, Security &amp; Updates</h4>
              <p>Secure hosting, SSL, daily backups, content changes and technical support: the same Care Plan on every tier.</p>
            </Link>
            <Link to="/pricing#chatbot" className="capability-sub-card scroll-animate zoom-rotate delay-4">
              <div className="cap-sub-icon">🤖</div>
              <h4>AI Chatbot &amp; Photography</h4>
              <p>Capture leads while you're offline and build instant trust with branding photography. Included on Authority.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Proof: real sites */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="section-title scroll-animate">Real businesses. Real websites.</h2>
          <div className="portfolio-grid">
            {projects.map((project, index) => (
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

      {/* Proof: reviews */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title scroll-animate">Don't take our word for it.</h2>
          <p className="testimonials-intro scroll-animate delay-1">
            Real reviews from real clients, verified on Google.
          </p>

          <div className="testimonials-grid">
            {reviews.map((r, i) => (
              <div key={r.name} className={`testimonial-card scroll-animate ${cardAnimations[i % 4]} delay-${(i % 4) + 1}`}>
                <div className="google-review-badge">
                  <GoogleG />
                  <span>Google Review</span>
                </div>
                <div className="testimonial-avatar" style={{ background: r.gradient }}>{r.initials}</div>
                <div className="testimonial-content">
                  <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                  <blockquote>{r.quote}</blockquote>
                  <div className="testimonial-author">
                    <h4>{r.name}</h4>
                    <p>{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="process">
        <div className="container">
          <h2 className="section-title scroll-animate">How it works</h2>
          <p className="section-intro scroll-animate delay-1">
            No 15-page questionnaire, no jargon. Just three steps.
          </p>

          <div className="process-timeline">
            {steps.map((s, i) => (
              <div key={s.title} className={`process-step scroll-animate ${i % 2 === 0 ? 'slide-left' : 'slide-right'} delay-${i + 1}`}>
                <div className="process-number">{`0${i + 1}`}</div>
                <div className="process-content">
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trades (internal links to the trade pages) */}
      <section className="industries">
        <div className="container">
          <h2 className="section-title scroll-animate">Built for your trade</h2>
          <p className="section-intro scroll-animate delay-1">
            We focus on home service businesses. We know how your customers search and which pages turn that search into a booked job.
          </p>

          <div className="industries-grid industries-grid-4">
            <Link to="/home-services/contractors" className="industry-card scroll-animate zoom-rotate delay-1">
              <div className="industry-icon">🔨</div>
              <h3>General Contractors &amp; Remodeling</h3>
              <p>
                Project galleries, service pages by trade, and a quote request built for jobs that take real research before someone commits.
              </p>
            </Link>

            <Link to="/home-services/hvac-plumbing-electrical" className="industry-card scroll-animate zoom-rotate delay-2">
              <div className="industry-icon">🌡️</div>
              <h3>HVAC, Plumbing &amp; Electrical</h3>
              <p>
                Emergency-ready design with click-to-call up front, service-area pages, and maintenance-plan pages that build repeat business.
              </p>
            </Link>

            <Link to="/home-services/cleaning-landscaping" className="industry-card scroll-animate zoom-rotate delay-3">
              <div className="industry-icon">🧹</div>
              <h3>Cleaning, Landscaping &amp; Maintenance</h3>
              <p>
                Recurring-service pages, easy online booking requests, and review-forward design that turns one job into a standing contract.
              </p>
            </Link>

            <Link to="/home-services/roofing-restoration" className="industry-card scroll-animate zoom-rotate delay-4">
              <div className="industry-icon">🏠</div>
              <h3>Roofing &amp; Restoration</h3>
              <p>
                Insurance-claim-friendly content, storm/emergency response messaging, and before/after galleries that show the quality of the work.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Risk reversal */}
      <section className="cta concept">
        <div className="container">
          <div className="concept-card scroll-animate zoom-rotate">
            <span className="concept-badge">See it before you commit</span>
            <h2 className="concept-title">See what your business could look like before committing.</h2>
            <p className="concept-body">
              Tell us about your business. We'll create a concept for your new website so you can actually see the difference. If you love the direction, we'll talk about building it. No awkward sales pitch.
            </p>
            <Link to="/contact" state={{ source: 'home-concept' }} className="cta-button">
              Build My Free Website Concept →
            </Link>
            <p className="concept-fineprint">
              Plans start at $700 setup + the flat $200/mo Website Care Plan. <Link to="/pricing">See pricing</Link>
            </p>
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

      {/* Final CTA */}
      <section className="cta">
        <div className="cta-content">
          <h3 className="cta-title animate-fade-in-up">Let's make your website work as hard as you do.</h3>
          <p className="cta-description animate-fade-in-up delay-200">Tell us about your business and we'll show you what's possible.</p>
          <Link to="/contact" state={{ source: 'home-final' }} className="cta-button animate-scale-in delay-400">
            Let's Fix Your Website →
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;

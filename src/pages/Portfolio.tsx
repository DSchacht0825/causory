import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Portfolio: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Web Design Portfolio | Causory Projects & Case Studies</title>
        <meta name="description" content="See real websites Causory has designed and built — from home service businesses like cleaning, lawn care, and landscaping companies to local restaurants and nonprofits across San Diego and beyond." />
        <meta name="keywords" content="web design portfolio, website examples, case studies, contractor website portfolio, home service business website examples, cleaning company website design, landscaping website design, custom website projects" />
        <link rel="canonical" href="https://causory.com/portfolio" />
      </Helmet>

      <section id="portfolio" className="portfolio" style={{paddingTop: '8rem'}}>
        <div className="container">
          <h1 className="section-title scroll-animate">Our Portfolio</h1>
          <p className="portfolio-intro">
            Explore our recent work — from home service businesses like cleaning and landscaping companies to local restaurants and nonprofits.
          </p>
          <div className="portfolio-grid">
            {[
              { id: 1, image: "image-1.jpg", title: "Teresita's Birria", type: "Food Truck Catering", url: "https://www.teresitasbirria.com" },
              { id: 2, image: "image-2.jpg", title: "Serenity Collective", type: "Faith-Based Recovery Programs", url: "https://www.serenitycollective.org" },
              { id: 3, image: "image-3.jpg", title: "Casandra's Cleaning", type: "Professional Cleaning Services", url: "https://www.casandrascleaning.com" },
              { id: 4, image: "image-4.jpg", title: "M&M Lawn Service", type: "Lawn Care & Landscaping", url: "https://www.mmlawnservice.com" },
              { id: 5, image: "image-5.jpg", title: "Restoring San Diego", type: "Youth Empowerment & Arts", url: "https://www.restoringsandiego.org" },
              { id: 6, image: "image-6.jpg", title: "You and I Organize", type: "Home Organizing & Cleaning", url: "https://youandiorganize.com" }
            ].map((project, index) => (
              <div key={project.id} className={`portfolio-item scroll-animate zoom-rotate delay-${index + 1}`}>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                    <div className="portfolio-image">
                      <img src={`/${project.image}`} alt={`${project.title} - ${project.type} by Causory Web Design`} width={1200} height={685} loading="lazy" />
                    </div>
                    <div className="portfolio-overlay">
                      <h4>{project.title}</h4>
                      <p>{project.type}</p>
                    </div>
                  </a>
                ) : (
                  <>
                    <div className="portfolio-image">
                      <img src={`/${project.image}`} alt={`${project.title} - ${project.type} by Causory Web Design`} width={1200} height={685} loading="lazy" />
                    </div>
                    <div className="portfolio-overlay">
                      <h4>{project.title}</h4>
                      <p>{project.type}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/contact" className="btn-primary">Start Your Project</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

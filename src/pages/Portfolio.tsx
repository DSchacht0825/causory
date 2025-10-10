import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  return (
    <>
      <section id="portfolio" className="portfolio" style={{paddingTop: '8rem'}}>
        <div className="container">
          <h2 className="section-title scroll-animate">Our Portfolio</h2>
          <p className="portfolio-intro">
            Explore our recent work across therapy practices, recovery centers, nonprofits, and more.
          </p>
          <div className="portfolio-grid">
            {[
              { id: 1, image: "image-1.jpg", title: "Food Truck Catering Site", type: "Web Design & Development" },
              { id: 2, image: "image-2.jpg", title: "12 Step Journey Website", type: "Recovery & Wellness Platform" },
              { id: 4, image: "image-4.jpg", title: "Therapy & Wellness Center", type: "Mental Health & Healing" },
              { id: 5, image: "image-5.jpg", title: "Youth Empowerment Initiative", type: "Community Outreach & Prevention" },
              { id: 6, image: "image-1.jpg", title: "Nonprofit Foundation", type: "Charitable Organization" },
              { id: 7, image: "image-2.jpg", title: "Wellness Coaching", type: "Health & Fitness" }
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
            <Link to="/contact" className="btn-primary">Start Your Project</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

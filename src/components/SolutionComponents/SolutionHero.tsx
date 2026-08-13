import React from "react";
import { Link } from "react-router-dom";
import featureBg from "../../images/bg/features-gradient-bg.png";

const SolutionHero: React.FC = () => {
  return (
    <section
      className="solution-hero-banner"
      style={{ backgroundImage: `url(${featureBg})` }}
    >
      <div className="container">
        <span className="sub-title-badge wow fadeInUp" data-wow-duration="600ms">
          Solve operational challenges with one intelligent platform.
        </span>
        <h1 className="hero-title wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
          Complete Software Solutions for Every Sports Venue
        </h1>
        <p className="hero-desc wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
          Running a successful sports venue requires more than managing bookings. VenueGlide OS provides complete business solutions that help sports facilities automate operations, improve member experiences, increase revenue and reduce administration. Whether you manage an indoor cricket centre, padel club, tennis academy or multi-sport venue, VenueGlide delivers the technology to help your business thrive.
        </p>
        <div className="hero-btns wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
          <Link to="/contact" className="btn-primary-green">
            Book a Demo
          </Link>
          <a href="#solutions-grid" className="btn-outline-glow">
            Explore Solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionHero;

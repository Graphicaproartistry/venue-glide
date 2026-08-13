import React from "react";
import { Link } from "react-router-dom";
import featureBg from "../../images/bg/features-gradient-bg.png";

const IndustryHero: React.FC = () => {
  return (
    <section
      className="industry-hero-banner"
      style={{ backgroundImage: `url(${featureBg})` }}
    >
      <div className="container">
        <span className="sub-title-badge wow fadeInUp" data-wow-duration="600ms">
          One intelligent platform. Configured for your sport.
        </span>
        <h1 className="hero-title wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
          Industry-Specific Software Built for Every Sports Venue
        </h1>
        <p className="hero-desc wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
          Every sport operates differently. From court bookings and coaching schedules to memberships and tournaments, VenueGlide OS adapts to the unique requirements of your venue. Whether you're running a single indoor sports centre or managing multiple locations across Australia, VenueGlide provides purpose-built solutions designed to help your venue operate more efficiently, improve customer experiences and increase revenue.
        </p>
        <div className="hero-btns wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
          <Link to="/contact" className="btn-primary-green">
            Book a Personal Demo
          </Link>
          <a href="#industries-grid" className="btn-outline-glow">
            Explore Industry Solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustryHero;

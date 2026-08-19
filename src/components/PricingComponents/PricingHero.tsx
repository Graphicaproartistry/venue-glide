import React from "react";
import { Link } from "react-router-dom";
import featureBg from "../../images/bg/features-gradient-bg.png";

const PricingHero: React.FC = () => {
  return (
    <section
      className="pricing-hero-banner"
      style={{ backgroundImage: `url(${featureBg})` }}
    >
      <div className="container">
        <h1 className="hero-title wow fadeInUp" data-wow-duration="600ms">
          Simple, Transparent Pricing for Every Sports Venue
        </h1>
        <h2 className="hero-subtitle wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
          Flexible plans designed to support sports venues of every size—from independent clubs to enterprise multi-location facilities.
        </h2>
        <p className="hero-desc wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
          Whether you're launching a new sports venue or managing a national network of facilities, VenueGlide OS provides scalable pricing with powerful features to help you streamline operations, improve customer experiences and grow your business.
        </p>
        <div className="hero-btns wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
          <Link to="/contact" className="btn-primary-green">
            Book a Personalised Demo
          </Link>
          <Link to="/contact" className="btn-outline-glow">
            Speak with Our Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;

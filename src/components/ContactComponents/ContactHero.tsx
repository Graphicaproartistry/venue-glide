import React from "react";
import { Link } from "react-router-dom";
import featureBg from "../../images/bg/features-gradient-bg.png";

const ContactHero: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="contact-hero-banner"
      style={{ backgroundImage: `url(${featureBg})` }}
    >
      <div className="container">
        <h1 className="hero-title wow fadeInUp" data-wow-duration="600ms">
          Let's Build the Future of Your Sports Venue
        </h1>
        <p className="hero-desc wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
          Whether you're exploring new software, replacing an existing system or planning a new venue, our team is here to help.
        </p>
        <p className="hero-desc wow fadeInUp" data-wow-delay="150ms" data-wow-duration="600ms">
          We understand that every sports venue operates differently.
        </p>
        <p className="hero-desc wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
          Whether you're managing an indoor cricket centre, a tennis club, a football centre, a padel club or a multi-sport facility, we'll help you find the right solution for your business.
        </p>
        <p className="hero-desc wow fadeInUp" data-wow-delay="250ms" data-wow-duration="600ms">
          Our team works closely with venue owners, managers and organisations across Australia and internationally to simplify operations and support long-term growth.
        </p>
        <div className="hero-btns wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
          <Link to="/book-demo" className="btn-primary-green">
            Book a Demo
          </Link>
          <button onClick={scrollToForm} className="btn-outline-glow">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;

import React from "react";
import { Link } from "react-router-dom";
import featureBg from "../../images/bg/features-gradient-bg.png";

const PlatformHero: React.FC = () => {
  return (
    <section
      className="platform-hero-banner"
      style={{ backgroundImage: `url(${featureBg})` }}
    >
      <div className="container">
        {/* <span className="sub-title-badge ">
          Everything your sports venue needs to operate smarter,
          serve customers better and grow with confidence.
        </span> */}
        <h1 className="hero-title wow fadeInUp" data-wow-duration="600ms">
          One Intelligent Platform. Endless Possibilities.
        </h1>
        <p className="hero-desc wow fadeInUp" data-wow-delay="150ms" data-wow-duration="600ms">
          VenueGlide OS is a modern, cloud-based Sports Venue Management Platform that connects bookings, memberships, payments, customer management, point of sale, reporting, coaching and business intelligence into one seamless operating system. Whether you manage a single indoor sports venue or multiple facilities across Australia, VenueGlide gives your team complete control from one intuitive dashboard.
        </p>
        <div className="hero-btns wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
          <Link to="/contact" className="btn-primary-green">
            Book a Personal Demo
          </Link>
          <a href="#everything-venue-needs" className="btn-outline-glow">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlatformHero;

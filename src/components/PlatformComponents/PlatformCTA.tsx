import React from "react";
import featureBg from "../../images/bg/features-gradient-bg.png";

const PlatformCTA: React.FC = () => {
  return (
    <section
      className="platform-cta-banner"
      style={{ backgroundImage: `url(${featureBg})` }}
    >
      <div className="container">
        <div className="platform-cta-box wow fadeInUp" data-wow-duration="600ms">
          <h2 className="title">
            Discover the Platform Built for Modern Sports Venues
          </h2>
          <p className="desc">
            From bookings and memberships to payments, reporting and AI-powered insights, VenueGlide OS brings every part of your business together in one intelligent operating system. Book Your Personal Demo Today and see how VenueGlide can help your venue operate more efficiently, improve customer experiences and support long-term growth.
          </p>
          {/* <div className="hero-btns">
            <Link to="/contact" className="btn-primary-green">
              Book a Free Demo
            </Link>
            <Link to="/contact" className="btn-outline-glow">
              Contact Our Team
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PlatformCTA;

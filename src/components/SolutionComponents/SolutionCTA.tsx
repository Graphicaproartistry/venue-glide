import React from "react";
import featureBg from "../../images/bg/features-gradient-bg.png";

const SolutionCTA: React.FC = () => {
  return (
    <section
      className="solution-cta-banner"
      style={{ backgroundImage: `url(${featureBg})` }}
    >
      <div className="container">
        <div className="solution-cta-box wow fadeInUp" data-wow-duration="600ms">
          <h2 className="title">
            Discover the Right Solution for Your Sports Venue
          </h2>
          <p className="desc">
            Whether you're looking to improve bookings, streamline memberships, manage payments or automate operations, VenueGlide OS provides everything you need in one intelligent platform. Book Your Personal Demo and see how VenueGlide can help your sports venue operate more efficiently, improve customer satisfaction and support long-term business growth.
          </p>

        </div>
      </div>
    </section>
  );
};

export default SolutionCTA;

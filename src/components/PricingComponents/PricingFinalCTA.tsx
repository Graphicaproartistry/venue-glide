import React from "react";
import { Link } from "react-router-dom";

const PricingFinalCTA: React.FC = () => {
  return (
    <section className="pricing-section pt-0">
      <div className="container">
        <div className="pricing-final-cta-box wow fadeInUp" data-wow-duration="600ms">
          <h2 className="title">Ready to Find the Right Plan?</h2>
          <p className="desc">
            Every sports venue is different, and we'll help you choose the solution that best fits your operational needs.
          </p>
          <div className="mb-3">
            <Link to="/contact" className="btn-primary-green">
              Book a Personalised Demo Today
            </Link>
          </div>
          <p className="sub-note">
            Speak with our team to explore VenueGlide, discuss your venue's requirements and receive a tailored recommendation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingFinalCTA;

import React from "react";
import { Link } from "react-router-dom";

const IndustryCTA: React.FC = () => {
  return (
    <section className="industry-cta-banner">
      <div className="container">
        <div className="industry-cta-wrap wow fadeInUp" data-wow-duration="600ms">
          <div>
            <h2 className="cta-title">Find the Right Solution for Your Sport</h2>
            <p className="cta-desc">
              Whether you operate an indoor cricket centre, padel club, tennis academy or multi-sport venue, VenueGlide OS gives you the tools to simplify operations, improve customer experiences and grow your business.
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <Link to="/contact" className="btn-primary-green">
              Book a Personalised Demo Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryCTA;

import React from "react";
import { Link } from "react-router-dom";
import MaskText from "../motion/MaskText";
import Reveal from "../motion/Reveal";
import MagneticButton from "../motion/MagneticButton";

const IndustryCTA: React.FC = () => {
  return (
    <section className="industry-cta-banner">
      <div className="container">
        <div className="industry-cta-wrap">
          <div>
            <MaskText as="h2" className="cta-title" lines={["Find the Right Solution", "for Your Sport"]} />
            <Reveal direction="up" delay={0.1}>
              <p className="cta-desc">
                Whether you operate an indoor cricket centre, padel club,
                tennis academy or multi-sport venue, VenueGlide OS gives you
                the tools to simplify operations, improve customer
                experiences and grow your business.
              </p>
            </Reveal>
          </div>
          <Reveal direction="up" delay={0.15} style={{ flexShrink: 0 }}>
            <MagneticButton>
              <Link to="/contact" className="btn-primary-green" data-cursor="link">
                Book a Personalised Demo Today
              </Link>
            </MagneticButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default IndustryCTA;

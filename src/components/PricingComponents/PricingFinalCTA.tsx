import React from "react";
import { Link } from "react-router-dom";
import MaskText from "../motion/MaskText";
import Reveal from "../motion/Reveal";
import MagneticButton from "../motion/MagneticButton";

const PricingFinalCTA: React.FC = () => {
  return (
    <section className="pricing-section pt-0">
      <div className="container">
        <div className="pricing-final-cta-box">
          <MaskText as="h2" className="title" lines={["Ready to Find the Right Plan?"]} />
          <Reveal direction="up" delay={0.1}>
            <p className="desc">
              Every sports venue is different, and we'll help you choose the
              solution that best fits your operational needs.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.15} className="mb-3">
            <MagneticButton>
              <Link to="/contact" className="btn-primary-green" data-cursor="link">
                Book a Personalised Demo Today
              </Link>
            </MagneticButton>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="sub-note">
              Speak with our team to explore VenueGlide, discuss your
              venue's requirements and receive a tailored recommendation.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default PricingFinalCTA;

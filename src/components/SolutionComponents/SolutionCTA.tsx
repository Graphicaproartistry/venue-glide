import React from "react";
import { Link } from "react-router-dom";
import featureBg from "../../images/bg/features-gradient-bg.png";
import MaskText from "../motion/MaskText";
import Reveal from "../motion/Reveal";
import MagneticButton from "../motion/MagneticButton";

const SolutionCTA: React.FC = () => {
  return (
    <section
      className="solution-cta-banner"
      style={{ backgroundImage: `url(${featureBg})` }}
    >
      <div className="container">
        <div className="solution-cta-box">
          <MaskText
            as="h2"
            className="title"
            lines={["Discover the Right Solution", "for Your Sports Venue"]}
          />
          <Reveal direction="up" delay={0.1}>
            <p className="desc">
              Whether you're looking to improve bookings, streamline
              memberships, manage payments or automate operations, VenueGlide
              OS provides everything you need in one intelligent platform.
              Book your personal demo and see how VenueGlide can help your
              sports venue operate more efficiently, improve customer
              satisfaction and support long-term business growth.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.2} className="hero-btns justify-content-center d-flex gap-3 flex-wrap mt-4">
            <MagneticButton>
              <Link to="/book-demo" className="btn-primary-green" data-cursor="link">
                Book a Free Demo
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link to="/contact" className="btn-outline-glow" data-cursor="link">
                Contact Our Team
              </Link>
            </MagneticButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default SolutionCTA;

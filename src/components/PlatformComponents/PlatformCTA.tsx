import React from "react";
import { Link } from "react-router-dom";
import featureBg from "../../images/bg/features-gradient-bg.png";
import MaskText from "../motion/MaskText";
import Reveal from "../motion/Reveal";
import MagneticButton from "../motion/MagneticButton";

const PlatformCTA: React.FC = () => {
  return (
    <section
      className="platform-cta-banner"
      style={{ backgroundImage: `url(${featureBg})` }}
    >
      <div className="container">
        <div className="platform-cta-box">
          <MaskText
            as="h2"
            className="title"
            lines={["Discover the Platform Built", "for Modern Sports Venues"]}
          />
          <Reveal direction="up" delay={0.1}>
            <p className="desc">
              From bookings and memberships to payments, reporting and
              AI-powered insights, VenueGlide OS brings every part of your
              business together in one intelligent operating system. Book
              your personal demo today and see how VenueGlide can help your
              venue operate more efficiently, improve customer experiences
              and support long-term growth.
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

export default PlatformCTA;

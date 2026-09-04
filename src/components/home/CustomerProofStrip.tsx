import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../motion/Reveal";
import MagneticButton from "../motion/MagneticButton";
import "./customer-proof.css";

/**
 * A single, real, named customer reference — CrickZilla, Mickleham VIC —
 * rather than a wall of invented logos. Deliberately modest: one confirmed
 * customer stated plainly reads as more credible (and is more honest) than
 * implying a roster this site can't back up.
 */
const CustomerProofStrip: React.FC = () => {
  return (
    <section className="ed-section customer-proof-section">
      <div className="ed-container customer-proof-inner">
        <Reveal direction="up">
          <span className="ed-label">Now Live in Melbourne</span>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <p className="customer-proof-text">
            CrickZilla, the indoor cricket and VR entertainment centre in
            Mickleham, has moved its lane, box cricket, coaching and VR
            bookings onto VenueGlide OS — one of the first indoor sports
            centres in Melbourne running its booking system on the platform.
          </p>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <MagneticButton>
            <Link
              className="customer-proof-link"
              to="/blog/crickzilla-melbourne-indoor-cricket-centre-chooses-venueglide"
              data-cursor="link"
            >
              Read the CrickZilla story →
            </Link>
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
};

export default CustomerProofStrip;

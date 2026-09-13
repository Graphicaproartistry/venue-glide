import React from "react";
import Reveal from "../motion/Reveal";

/**
 * A short, plain-language direct-answer block for "What is VenueGlide" —
 * the kind of self-contained paragraph AI search engines (ChatGPT,
 * Perplexity, Google AI Overviews) lift verbatim when answering
 * "what is [product]" or "sports venue booking software" queries.
 */
const WhatIsVenueGlide: React.FC = () => {
  return (
    <section className="ed-section">
      <div className="ed-container" style={{ maxWidth: "980px" }}>
        <Reveal direction="up">
          <span className="ed-label">What is VenueGlide</span>
        </Reveal>
        <Reveal direction="up" delay={0.05}>
          <h2 className="ed-heading" style={{ fontSize: "clamp(1.4rem, 2.2vw, 2rem)", marginBottom: "18px" }}>
            Sports venue booking and management software
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <p className="ed-lede">
            VenueGlide is cloud-based operating system software for sports and recreation
            venues in Melbourne and across Australia. It replaces spreadsheets, paper
            waivers and separate booking, POS and payment tools with one connected
            platform for online court bookings, memberships, point-of-sale, coaching
            programs and real-time reporting — used by indoor cricket centres, padel
            and tennis clubs, football and futsal facilities, and multi-sport venues.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default WhatIsVenueGlide;

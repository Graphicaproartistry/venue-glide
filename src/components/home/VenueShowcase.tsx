import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import MaskText from "../motion/MaskText";
import Reveal from "../motion/Reveal";

import cricket from "../../images/sports/cricket.png";
import padel from "../../images/sports/padel.png";
import football from "../../images/sports/football.png";
import multisport from "../../images/sports/multisport.png";

interface ShowcaseItem {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const ITEMS: ShowcaseItem[] = [
  {
    image: cricket,
    alt: "Indoor cricket centre mid-match",
    title: "Indoor cricket centres",
    description:
      "Lane scheduling, league fixtures and casual hire in one calendar — with automatic waitlists when a lane frees up and QR check-in at the door.",
  },
  {
    image: padel,
    alt: "Padel court in play",
    title: "Padel & tennis clubs",
    description:
      "Peak and off-peak pricing that adjusts itself, coach-led sessions sold as term packages, and member billing that runs on direct debit without chasing.",
  },
  {
    image: football,
    alt: "Indoor futsal pitch under lights",
    title: "Football & futsal turf",
    description:
      "Recurring competition bookings, team rosters and pitch utilisation reporting, so you can see exactly which slots earn and which sit empty.",
  },
  {
    image: multisport,
    alt: "Multi-sport complex interior",
    title: "Multi-sport complexes",
    description:
      "Every court, coach, pro-shop sale and membership across the whole facility reporting into a single dashboard — and a single source of truth.",
  },
];

const VenueShowcase: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="ed-section ed-section--alt">
      <div className="ed-container">
        <Reveal direction="up">
          <span className="ed-label">Built for your venue</span>
        </Reveal>

        <MaskText
          as="h2"
          className="ed-display ed-display--sm"
          lines={["Purpose-built for", "how venues actually run"]}
        />

        <div style={{ marginTop: 72 }}>
          {ITEMS.map((item, idx) => (
            <motion.article
              key={item.title}
              className={`ed-showcase-item ${idx % 2 === 1 ? "ed-showcase-item--flip" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.85,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="ed-showcase-media">
                <img src={item.image} alt={item.alt} loading="lazy" />
              </div>

              <div className="ed-showcase-body">
                <span className="ed-showcase-index">
                  {String(idx + 1).padStart(2, "0")} — Venue type
                </span>
                <h3 className="ed-showcase-title">{item.title}</h3>
                <p className="ed-showcase-desc">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenueShowcase;

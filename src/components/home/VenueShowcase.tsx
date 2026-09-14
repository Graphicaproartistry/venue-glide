import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
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
  /** Only the cricket card has a matching bowler-to-batsman line to animate a
   *  ball along, so this is opt-in per item rather than a generic effect. */
  animateBall?: boolean;
}

const ITEMS: ShowcaseItem[] = [
  {
    image: cricket,
    alt: "Indoor cricket centre mid-match",
    title: "Indoor cricket centres",
    description:
      "Lane scheduling, league fixtures and casual hire in one calendar — with automatic waitlists when a lane frees up and QR check-in at the door.",
    animateBall: true,
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

/** Scroll-linked cricket ball: tracks scroll progress of its own media
 *  container (not the whole section) so the ball travels from the bowler's
 *  hand toward the batsman exactly while that card is passing through view,
 *  instead of drifting the moment the page loads. */
const CricketBallOverlay: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.35"] });

  const left = useTransform(scrollYProgress, [0, 1], ["22%", "58%"]);
  const top = useTransform(scrollYProgress, [0, 0.5, 1], ["56%", "42%", "49%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      <motion.span
        className="ed-cricket-ball"
        style={{ left, top, opacity }}
        aria-hidden="true"
      />
    </div>
  );
};

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
          className="ed-heading"
          lines={["Purpose-built for how", "venues actually run"]}
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
              <div className="ed-showcase-media" data-cursor="view" data-cursor-label="View">
                <img src={item.image} alt={item.alt} loading="lazy" />
                {item.animateBall && !shouldReduceMotion && <CricketBallOverlay />}
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

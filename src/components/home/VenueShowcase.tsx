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

/** Scroll-linked cricket delivery: tracks scroll progress of its own media
 *  container (not the whole page) so the sequence only plays while that
 *  card is passing through view. The ball releases from the bowler's actual
 *  hand position in the photo, dips through a bounce partway down the
 *  pitch, then rises into the bat — with a bat-swing swoosh and impact
 *  flash timed to the moment of contact. Coordinates are calibrated to
 *  this specific photo (bowler's hand, pitch, batsman's bat), not generic
 *  guesses, so the motion actually lines up with what's in the frame. */
const CricketBallOverlay: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.35"] });

  // Release (bowler's hand) -> bounce on the pitch -> rises to the bat.
  const ballLeft = useTransform(scrollYProgress, [0, 0.45, 0.78], ["23%", "38%", "49%"]);
  const ballTop = useTransform(scrollYProgress, [0, 0.45, 0.62, 0.78], ["58%", "68%", "56%", "50%"]);
  const ballScale = useTransform(scrollYProgress, [0, 0.1, 0.45, 0.78], [0.7, 1, 1.15, 0.85]);
  const ballOpacity = useTransform(scrollYProgress, [0, 0.06, 0.8, 0.88], [0, 1, 1, 0]);

  // Bat swing: a motion-blur arc that draws in right as the ball arrives,
  // reading as a fast downswing rather than a literally re-animated limb.
  const swingPathLength = useTransform(scrollYProgress, [0.68, 0.86], [0, 1]);
  const swingOpacity = useTransform(scrollYProgress, [0.66, 0.7, 0.88, 0.96], [0, 1, 1, 0]);

  // Impact flash right at contact.
  const impactScale = useTransform(scrollYProgress, [0.76, 0.84, 0.95], [0.3, 1.6, 2.1]);
  const impactOpacity = useTransform(scrollYProgress, [0.76, 0.8, 0.95], [0, 0.9, 0]);

  return (
    <div ref={ref} style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      <motion.span
        className="ed-cricket-ball"
        style={{ left: ballLeft, top: ballTop, scale: ballScale, opacity: ballOpacity }}
        aria-hidden="true"
      />
      <motion.span
        className="ed-cricket-impact"
        style={{ left: "49%", top: "50%", scale: impactScale, opacity: impactOpacity }}
        aria-hidden="true"
      />
      {/* viewBox matches the card's 4:3 aspect ratio exactly, so path
          coordinates map 1:1 to % position without skewing the curve. */}
      <svg className="ed-bat-swing" viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true">
        <motion.path
          d="M 176 114 Q 192 147 232 183"
          style={{ pathLength: swingPathLength, opacity: swingOpacity }}
        />
      </svg>
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

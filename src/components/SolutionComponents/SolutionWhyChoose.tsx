import React from "react";
import { motion } from "framer-motion";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

const whyChooseItems = [
  "Increase online bookings",
  "Improve member retention",
  "Reduce manual administration",
  "Automate repetitive tasks",
  "Streamline staff operations",
  "Improve customer experiences",
  "Increase operational efficiency",
  "Grow revenue",
];

const SolutionWhyChoose: React.FC = () => {
  return (
    <section className="solution-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <Reveal direction="up">
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#00D4ff",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  display: "inline-block",
                  marginBottom: "12px",
                }}
              >
                A Smarter Way to Run Your Venue
              </span>
            </Reveal>
            <MaskText as="h2" className="solution-sec-title" lines={["Why Businesses Choose", "VenueGlide"]} />

            <ul className="solution-check-list mt-4">
              {whyChooseItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.4) }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="col-lg-6">
            <Reveal direction="right" distance={32} delay={0.1}>
              <motion.div
                className="solution-img-wrapper"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                data-cursor="view"
              >
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                  alt="Why Businesses Choose VenueGlide"
                />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionWhyChoose;

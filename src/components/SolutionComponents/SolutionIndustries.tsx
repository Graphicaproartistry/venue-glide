import React from "react";
import { motion } from "framer-motion";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

const industriesList = [
  "Indoor Cricket Centres",
  "Padel Clubs",
  "Tennis Clubs",
  "Football Centres",
  "Basketball Stadiums",
  "Badminton Centres",
  "Pickleball Clubs",
  "Squash Centres",
  "VR & Entertainment Venues",
  "Sports Academies",
  "Community Recreation Centres",
  "Multi-Sport Venues",
];

const SolutionIndustries: React.FC = () => {
  return (
    <section className="solution-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <Reveal direction="left" distance={32}>
              <motion.div
                className="solution-img-wrapper"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                data-cursor="view"
              >
                <img
                  src="https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg"
                  alt="Industries We Support"
                />
              </motion.div>
            </Reveal>
          </div>

          <div className="col-lg-6">
            <MaskText as="h2" className="solution-sec-title" lines={["Industries We Support"]} />
            <Reveal direction="up" delay={0.1}>
              <p className="solution-sec-desc">
                Our solutions are trusted by a wide range of sports and recreation businesses.
              </p>
            </Reveal>

            <ul style={{ listStyle: "none", paddingLeft: 0, marginBottom: "24px" }}>
              {industriesList.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
                  style={{
                    fontSize: "14.5px",
                    lineHeight: "1.8",
                    color: "#cbd5e1",
                    position: "relative",
                    paddingLeft: "22px",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "2px",
                      top: "-1px",
                      color: "#00D4ff",
                      fontSize: "16px",
                    }}
                  >
                    •
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>

            <Reveal direction="up" delay={0.2}>
              <div
                style={{
                  fontSize: "13.5px",
                  lineHeight: "1.6",
                  color: "#94a3b8",
                  fontStyle: "italic",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  paddingTop: "14px",
                }}
              >
                Every venue has unique operational requirements, and VenueGlide can be configured to match your business model.
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionIndustries;

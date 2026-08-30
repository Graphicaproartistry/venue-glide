import React from "react";
import { motion } from "framer-motion";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

const checklistItems = [
  "Online bookings",
  "Availability Management",
  "Customer Profile",
  "Membership",
  "Payments",
  "Point of Sale",
  "Coaching programs",
  "Reporting & Analytics",
  "VenueGlide AI",
  "No duplicate customer records.",
  "No manual data entry.",
  "No disconnected software.",
  "Just one intelligent operating system.",
];

const PlatformWorksTogether: React.FC = () => {
  return (
    <section className="platform-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <MaskText as="h2" className="platform-sec-title" lines={["Everything Works Together"]} />
            <Reveal direction="up" delay={0.1}>
              <p className="platform-sec-desc">
                Unlike traditional software where each module operates
                independently, VenueGlide connects every part of your
                business into a single source of truth.
              </p>
            </Reveal>

            <div className="row">
              <div className="col-12">
                <ul style={{ listStyle: "none", paddingLeft: 0, marginBottom: 0 }}>
                  {checklistItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.4) }}
                      style={{
                        fontSize: "14.5px",
                        lineHeight: "1.8",
                        color: "#cbd5e1",
                        position: "relative",
                        paddingLeft: "24px",
                        marginBottom: "6px",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          top: "0",
                          color: "#00D4ff",
                          fontWeight: "bold",
                        }}
                      >
                        ✓
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <Reveal direction="right" distance={32} delay={0.1}>
              <motion.div
                className="platform-img-wrapper"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                data-cursor="view"
              >
                <img
                  src="https://images.pexels.com/photos/5256819/pexels-photo-5256819.jpeg"
                  alt="Everything Works Together"
                />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformWorksTogether;

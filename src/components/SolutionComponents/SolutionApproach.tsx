import React from "react";
import { motion } from "framer-motion";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

const SolutionApproach: React.FC = () => {
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
                Built Around the Way Sports Venues Operate
              </span>
            </Reveal>
            <MaskText as="h2" className="solution-sec-title" lines={["Our Approach"]} />

            <Reveal direction="up" delay={0.1}>
              <p style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", marginBottom: "14px" }}>
                We don't believe in one-size-fits-all software.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.15}>
              <p className="solution-sec-desc">
                VenueGlide is designed specifically for sports businesses, with flexible workflows, configurable booking rules, membership options and reporting tools that adapt to your venue—not the other way around.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="solution-sec-desc">
                Whether your goal is to improve efficiency, grow memberships or deliver a better customer experience, VenueGlide provides the tools to help you succeed.
              </p>
            </Reveal>
          </div>

          <div className="col-lg-6">
            <Reveal direction="right" distance={32} delay={0.15}>
              <div className="solution-mobile-mockup">
                <div className="mockup-app-title">VenueGlide OS</div>
                <div className="mockup-input-box mb-3">
                  <span>Create Account</span>
                  <span style={{ color: "#00D4ff" }}>✓</span>
                </div>
                <div style={{ fontSize: "13px", color: "#94a3b8", textAlign: "left", marginBottom: "6px" }}>
                  Your Email
                </div>
                <div className="mockup-input-box mb-4">
                  <span>venue@venueglide.com</span>
                  <span style={{ color: "#00D4ff" }}>✓</span>
                </div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: "#0a84ff",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "14px",
                    padding: "12px",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  Get Started
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionApproach;

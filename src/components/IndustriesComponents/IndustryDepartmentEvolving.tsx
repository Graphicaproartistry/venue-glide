import React from "react";
import { motion } from "framer-motion";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

const departmentItems = [
  "Bookings",
  "Members",
  "Payments",
  "Coaching",
  "Point of Sale",
  "Reporting",
  "VenueGlide AI",
  "Business Growth",
];

const IndustryDepartmentEvolving: React.FC = () => {
  return (
    <section className="industry-section">
      <div className="container">
        {/* Sub-Section 1: One Platform. Every Department Connected. */}
        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6">
            <Reveal direction="left" distance={32}>
              <motion.div
                className="platform-img-wrapper"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                data-cursor="view"
              >
                <img src="https://images.pexels.com/photos/1624895/pexels-photo-1624895.jpeg" alt="One Platform Every Department Connected" />
              </motion.div>
            </Reveal>
          </div>

          <div className="col-lg-6">
            <MaskText
              as="h2"
              className="industry-sec-title"
              lines={["One Platform. Every", "Department Connected."]}
            />
            <Reveal direction="up" delay={0.1}>
              <p className="industry-sec-desc">
                VenueGlide brings every part of your venue together.
              </p>
            </Reveal>

            <ul style={{ listStyle: "none", paddingLeft: 0, marginBottom: "20px" }}>
              {departmentItems.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.06, 0.4) }}
                  style={{
                    fontSize: "14.5px",
                    color: "#cbd5e1",
                    position: "relative",
                    paddingLeft: "24px",
                    marginBottom: "8px",
                  }}
                >
                  <span style={{ position: "absolute", left: 0, top: 0, color: "#00D4ff", fontWeight: "bold" }}>
                    ✓
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>

            <Reveal direction="up" delay={0.2}>
              <div
                style={{
                  fontSize: "13.5px",
                  color: "#94a3b8",
                  fontStyle: "italic",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  paddingTop: "14px",
                }}
              >
                Every booking, payment, membership and customer interaction is connected, giving your team complete visibility across the entire business.
              </div>
            </Reveal>
          </div>
        </div>

        {/* Sub-Section 2: Australia's Sports Industry Is Evolving */}
        <div className="row align-items-center g-5 pt-4">
          <div className="col-lg-6">
            <MaskText
              as="h2"
              className="industry-sec-title"
              lines={["Australia's Sports", "Industry Is Evolving"]}
            />
            <Reveal direction="up" delay={0.1}>
              <p className="industry-sec-desc">
                Modern sports venues require more than spreadsheets and disconnected software. Customers expect instant online bookings, mobile access, digital payments and seamless experiences. VenueGlide helps sports facilities embrace digital transformation with a cloud-based platform that supports operational efficiency, customer satisfaction and long-term growth.
              </p>
            </Reveal>
          </div>

          <div className="col-lg-6">
            <Reveal direction="right" distance={32} delay={0.1}>
              <motion.div
                className="platform-img-wrapper"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                data-cursor="view"
              >
                <img src="https://images.pexels.com/photos/159400/television-camera-men-outdoors-ballgame-159400.jpeg" alt="Australia Sports Industry Evolving" />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryDepartmentEvolving;

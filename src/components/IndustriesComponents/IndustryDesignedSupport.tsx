import React from "react";
import { motion } from "framer-motion";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

const IndustryDesignedSupport: React.FC = () => {
  return (
    <section className="industry-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left: Dashboard UI Mockup */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                background: "rgba(13, 20, 36, 0.9)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "18px",
                padding: "28px",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  paddingBottom: "16px",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff" }}
                >
                  Venue Performance Overview
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#00D4ff",
                    background: "rgba(0,255,151,0.1)",
                    padding: "4px 10px",
                    borderRadius: "20px",
                  }}
                >
                  ● Active
                </span>
              </div>

              <div className="row g-3 mb-4">
                <div className="col-4 text-center">
                  <div style={{ fontSize: "12px", color: "#94a3b8" }}>Sales</div>
                  <div style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff" }}>
                    12,325
                  </div>
                  <div style={{ fontSize: "11px", color: "#00D4ff" }}>↑ +12.4%</div>
                </div>
                <div className="col-4 text-center">
                  <div style={{ fontSize: "12px", color: "#94a3b8" }}>Bookings</div>
                  <div style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff" }}>
                    1,061
                  </div>
                  <div style={{ fontSize: "11px", color: "#00D4ff" }}>↑ +8.2%</div>
                </div>
                <div className="col-4 text-center">
                  <div style={{ fontSize: "12px", color: "#94a3b8" }}>Total</div>
                  <div style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff" }}>
                    $118,095
                  </div>
                  <div style={{ fontSize: "11px", color: "#00D4ff" }}>↑ +15.3%</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="col-lg-6">
            <MaskText
              as="h2"
              className="industry-sec-title"
              lines={["Designed to Support Every", "Stage of Your Business"]}
            />
            <Reveal direction="up" delay={0.1}>
              <p className="industry-sec-desc">
                From independent sports clubs to enterprise venue operators, VenueGlide adapts to businesses of every size. Whether you're opening your first venue or expanding nationally, our platform grows alongside your business with scalable tools for operations, customer management and reporting.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryDesignedSupport;

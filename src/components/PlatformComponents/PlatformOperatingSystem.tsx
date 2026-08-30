import React from "react";
import { motion } from "framer-motion";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

const PlatformOperatingSystem: React.FC = () => {
  return (
    <section className="platform-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <Reveal direction="left" distance={32}>
              <motion.div
                className="platform-img-wrapper"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                data-cursor="view"
              >
                <img
                  src="https://images.pexels.com/photos/17160705/pexels-photo-17160705.jpeg"
                  alt="The Complete Operating System for Sports Venues"
                />
              </motion.div>
            </Reveal>
          </div>

          <div className="col-lg-6">
            <MaskText
              as="h2"
              className="platform-sec-title"
              lines={["The Complete Operating", "System for Sports Venues"]}
            />
            <Reveal direction="up" delay={0.15}>
              <p className="platform-sec-desc">
                Managing a successful sports venue requires more than just a
                booking calendar. You need a platform that connects every
                department, every customer interaction and every operational
                process. VenueGlide OS centralises every aspect of your venue
                into one connected ecosystem, eliminating duplicate data,
                reducing manual work and giving your team real-time
                visibility across your entire business. From the moment a
                customer books online to payment processing, check-in,
                coaching, retail purchases and business reporting, every
                interaction is automatically connected.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOperatingSystem;

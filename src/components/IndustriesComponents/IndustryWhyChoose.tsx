import React from "react";
import { motion } from "framer-motion";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

const whyChecklist = [
  "Increase bookings",
  "Improve court utilisation",
  "Simplify memberships",
  "Manage coaching programs",
  "Automate administration",
  "Improve customer retention",
  "Increase revenue",
  "Gain valuable business insights",
  "Scale confidently",
];

const IndustryWhyChoose: React.FC = () => {
  return (
    <section
      className="why-sports-banner"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg')`,
      }}
    >
      <div className="overlay-dark"></div>
      <div className="container position-relative z-2">
        <div className="row justify-content-end">
          <div className="col-lg-7 col-md-9">
            <Reveal direction="up" className="why-sports-card">
              <MaskText as="h2" className="card-title" lines={["Why Sports Venues Choose VenueGlide"]} />
              <p className="card-desc">
                Sports businesses choose VenueGlide because it delivers more than online bookings. Our platform helps venues:
              </p>

              <ul className="check-grid">
                {whyChecklist.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryWhyChoose;

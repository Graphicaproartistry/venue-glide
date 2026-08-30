import React from "react";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

const industries = [
  "Indoor Cricket Centres",
  "Padel Clubs",
  "Tennis Clubs",
  "Football Centres",
  "Basketball Facilities",
  "Pickleball Clubs",
  "Badminton Centres",
  "Squash Centres",
  "Sports Academies",
  "Community Recreation Centres",
  "Multi-Sport Venues",
];

const ContactIndustries: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <MaskText as="h2" className="pricing-sec-title" lines={["Industries We Support"]} />
        <Reveal direction="up" delay={0.1}>
          <p className="pricing-sec-subtitle">VenueGlide works with:</p>
        </Reveal>

        <div className="industries-grid">
          {industries.map((ind, idx) => (
            <Reveal key={idx} direction="up" distance={16} delay={Math.min((idx % 3) * 0.06 + 0.1, 0.4)} className="industry-card">
              <i className="far fa-dumbbell"></i>
              <span>{ind}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactIndustries;

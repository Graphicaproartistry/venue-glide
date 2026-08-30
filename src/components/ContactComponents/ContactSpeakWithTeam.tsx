import React from "react";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

const contactReasons = [
  { title: "Product Demonstrations", icon: "far fa-laptop-code" },
  { title: "Sales Enquiries", icon: "far fa-chart-line-up" },
  { title: "Technical Questions", icon: "far fa-headset" },
  { title: "Partnership Opportunities", icon: "far fa-handshake" },
  { title: "Enterprise Solutions", icon: "far fa-building" },
  { title: "Customer Support", icon: "far fa-life-ring" },
  { title: "Implementation Services", icon: "far fa-cogs" },
  { title: "Multi-Venue Projects", icon: "far fa-network-wired" },
];

const ContactSpeakWithTeam: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <MaskText as="h2" className="pricing-sec-title" lines={["Speak With Our Team"]} />
        <Reveal direction="up" delay={0.1}>
          <h3 className="pricing-sec-subtitle">We'd Love to Hear From You</h3>
        </Reveal>

        <Reveal direction="up" delay={0.15}>
          <p
            className="text-center"
            style={{ color: "#cbd5e1", fontSize: "16px", maxWidth: "800px", margin: "0 auto 30px" }}
          >
            Whether you have a question about VenueGlide OS, pricing, integrations or implementation, our specialists are ready to help.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <h4 className="process-header-title">Contact us for:</h4>
        </Reveal>

        <div className="speak-grid">
          {contactReasons.map((item, idx) => (
            <Reveal
              key={idx}
              direction="up"
              distance={16}
              delay={Math.min((idx % 4) * 0.06 + 0.15, 0.45)}
              className="speak-card"
            >
              <i className={item.icon}></i>
              <span>{item.title}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSpeakWithTeam;

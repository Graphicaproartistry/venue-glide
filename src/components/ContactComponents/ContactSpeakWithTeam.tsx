import React from "react";

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
        <h2 className="pricing-sec-title wow fadeInUp" data-wow-duration="600ms">
          Speak With Our Team
        </h2>
        <h3 className="pricing-sec-subtitle wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
          We'd Love to Hear From You
        </h3>

        <p
          className="text-center wow fadeInUp"
          data-wow-delay="150ms"
          data-wow-duration="600ms"
          style={{ color: "#cbd5e1", fontSize: "16px", maxWidth: "800px", margin: "0 auto 30px" }}
        >
          Whether you have a question about VenueGlide OS, pricing, integrations or implementation, our specialists are ready to help.
        </p>

        <h4 className="process-header-title wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
          Contact us for:
        </h4>

        <div className="speak-grid">
          {contactReasons.map((item, idx) => (
            <div
              key={idx}
              className="speak-card wow fadeInUp"
              data-wow-delay={`${(idx % 4) * 80 + 200}ms`}
              data-wow-duration="600ms"
            >
              <i className={item.icon}></i>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSpeakWithTeam;

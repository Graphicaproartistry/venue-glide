import React from "react";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

const PricingWhyChoose: React.FC = () => {
  return (
    <section className="pricing-why-choose">
      <div className="container">
        <div className="pricing-why-box">
          <MaskText as="h2" className="section-title" lines={["Why Choose VenueGlide?"]} />
          <Reveal direction="up" delay={0.1}>
            <p>
              Unlike traditional booking software that charges separately for different modules, VenueGlide brings everything together in one intelligent operating system.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <p>
              Every plan includes access to our core platform, allowing you to manage bookings, memberships, payments, customer relationships and business reporting from one secure cloud solution.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default PricingWhyChoose;

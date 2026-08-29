import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LuKeyRound, LuCreditCard, LuCalculator, LuPlus } from "react-icons/lu";
import { Icon } from "../common/Icon";
import { IconType } from "react-icons";
import MaskText from "../motion/MaskText";
import Reveal from "../motion/Reveal";

interface IntegrationItem {
  icon: IconType;
  name: string;
  tagline: string;
  description: string;
}

const INTEGRATIONS: IntegrationItem[] = [
  {
    icon: LuKeyRound,
    name: "Igloo",
    tagline: "Staffless access",
    description:
      "Smart-lock door access lets members unlock the venue themselves during early-morning, late-night or unstaffed hours — granted automatically for their booking window and revoked the moment it ends.",
  },
  {
    icon: LuCreditCard,
    name: "Stripe",
    tagline: "Payments",
    description:
      "Cards, debit and direct debit processed natively, with automated recurring membership billing and secure checkout on every booking.",
  },
  {
    icon: LuCalculator,
    name: "Xero",
    tagline: "Accounting",
    description:
      "Daily sales, invoices and revenue sync straight into your accounting platform — no manual reconciliation at month end.",
  },
];

/**
 * A tilt-on-hover card driven by pointer position (Framer Motion transform,
 * no library beyond what's already in the stack) — a small but genuinely
 * more "animatic" interaction than a static card, reserved for this section
 * since these are the three concrete integrations the business highlights.
 */
const IntegrationCard: React.FC<IntegrationItem & { index: number }> = ({
  icon,
  name,
  tagline,
  description,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(800px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0px)";
  };

  return (
    <Reveal direction="up" distance={24} delay={Math.min(index * 0.1, 0.3)}>
      <div
        ref={cardRef}
        className="integration-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
        data-cursor="view"
      >
        <span className="integration-card-icon">
          <Icon icon={icon} size={26} />
        </span>
        <div className="integration-card-heading">
          <h3>{name}</h3>
          <span>{tagline}</span>
        </div>
        <p>{description}</p>
      </div>
    </Reveal>
  );
};

const IntegrationsShowcase: React.FC = () => (
  <section className="ed-section integrations-section">
    <div className="ed-container">
      <Reveal direction="up">
        <span className="ed-label">Connected out of the box</span>
      </Reveal>

      <MaskText
        as="h2"
        className="ed-heading"
        lines={["Integrates with the tools", "your venue already runs on"]}
      />

      <Reveal direction="up" delay={0.1}>
        <p className="ed-lede" style={{ marginTop: 20 }}>
          VenueGlide connects directly to the payment, accounting and access
          systems Australian venues already trust — plus a growing list of
          integrations available on request for your specific setup.
        </p>
      </Reveal>

      <div className="integrations-grid">
        {INTEGRATIONS.map((item, idx) => (
          <IntegrationCard key={item.name} index={idx} {...item} />
        ))}

        <Reveal direction="up" distance={24} delay={0.3}>
          <div className="integration-card integration-card--more">
            <span className="integration-card-icon">
              <Icon icon={LuPlus} size={26} />
            </span>
            <div className="integration-card-heading">
              <h3>More on request</h3>
              <span>Custom integrations</span>
            </div>
            <p>
              Running a different POS, access control or accounting system?
              Talk to us — customisations and additional integrations are
              available depending on your venue's requirements.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default IntegrationsShowcase;

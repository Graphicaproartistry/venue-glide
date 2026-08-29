import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./SportsVenueFeatures.css";
import featureBg from "../../images/bg/features-gradient-bg.png";
import {
  LuCalendarCheck,
  LuIdCard,
  LuReceipt,
  LuHeartHandshake,
  LuGraduationCap,
  LuChartColumn,
  LuZap,
} from "react-icons/lu";
import { Icon } from "../common/Icon";
import { IconType } from "react-icons";
import Reveal from "../motion/Reveal";

interface FeatureRowProps {
  icon: IconType;
  title: string;
  description: string;
  tags: string[];
}

const featureData: FeatureRowProps[] = [
  {
    icon: LuCalendarCheck,
    title: "Online Booking Management",
    description:
      "Enable court, field and facility bookings online 24/7 with real-time scheduling.",
    tags: [
      "Real-time court availability",
      "Interactive venue scheduling",
      "Automated SMS confirmations",
      "Peak & off-peak dynamic rates",
      "Waitlist auto-allocation",
      "Instant QR code check-in",
    ],
  },
  {
    icon: LuIdCard,
    title: "Membership Management",
    description:
      "Automate memberships, recurring billing and member perks from one dashboard.",
    tags: [
      "Automated direct debit billing",
      "Family & multi-tier plans",
      "Digital waiver signing",
      "Member attendance tracking",
      "Automated renewal reminders",
      "Loyalty rewards program",
    ],
  },
  {
    icon: LuReceipt,
    title: "Sports Facility POS",
    description:
      "Sell retail equipment, café items, coaching sessions and rentals seamlessly.",
    tags: [
      "Pro shop retail & inventory",
      "Café & food ordering",
      "Equipment hire tracking",
      "Coaching package checkout",
      "Digital gift card redemption",
      "EFT POS hardware sync",
    ],
  },
  {
    icon: LuHeartHandshake,
    title: "Customer CRM",
    description:
      "Build lasting player relationships with complete historical activity tracking.",
    tags: [
      "Complete player visit timeline",
      "Booking & spending history",
      "Automated re-engagement",
      "Targeted SMS & email campaigns",
      "Player preference profiles",
      "Integrated communication log",
    ],
  },
  {
    icon: LuGraduationCap,
    title: "Coaching Management",
    description:
      "Organize coaches, private sessions, junior clinics and group academies.",
    tags: [
      "Cricket & tennis academies",
      "Padel & football coaching",
      "Private lesson scheduling",
      "Coach roster management",
      "Automated student attendance",
      "Term package payments",
    ],
  },
  {
    icon: LuChartColumn,
    title: "Business Reporting",
    description:
      "Gain 360-degree operational visibility into court utilization and revenue.",
    tags: [
      "Real-time revenue metrics",
      "Peak court utilization stats",
      "Member retention analytics",
      "Staff performance reporting",
      "POS sales breakdown",
      "Automated financial exports",
    ],
  },
];

const FeatureRow: React.FC<FeatureRowProps & { index: number }> = ({
  icon,
  title,
  description,
  tags,
  index,
}) => (
  <Reveal
    direction="up"
    distance={20}
    delay={Math.min(index * 0.06, 0.3)}
    className="capability-row"
  >
    <div className="capability-row-marker">
      <span className="capability-row-index">{String(index + 1).padStart(2, "0")}</span>
      <span className="capability-row-icon">
        <Icon icon={icon} size={22} />
      </span>
    </div>

    <div className="capability-row-content">
      <h3 className="capability-row-title">{title}</h3>
      <p className="capability-row-desc">{description}</p>
      <ul className="capability-row-tags">
        {tags.map((tag, tagIdx) => (
          <li key={tagIdx}>{tag}</li>
        ))}
      </ul>
    </div>
  </Reveal>
);

const SportsVenueFeatures: React.FC = () => {
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 75%", "end 55%"],
  });
  const spineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      className="sports-venue-features bg_img"
      style={{ backgroundImage: `url(${featureBg})` }}
    >
      <div className="container">
        <Reveal direction="up" className="sec-title-wrap text-center mb-5">
          <span className="sub-title d-inline-flex align-items-center gap-2 px-3 py-1 mb-2 rounded-pill text-uppercase fw-semibold">
            <Icon icon={LuZap} size={14} />
            Engineered for Sports Venues
          </span>
          <h2 className="sec-title">
            Powerful Features Designed for <br className="d-none d-md-inline" /> Modern Sports Facilities
          </h2>
        </Reveal>

        <div className="capability-rail" ref={railRef}>
          <div className="capability-rail-track" aria-hidden="true" />
          <motion.div
            className="capability-rail-fill"
            style={{ height: spineHeight }}
            aria-hidden="true"
          />

          {featureData.map((card, idx) => (
            <FeatureRow key={card.title} index={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsVenueFeatures;

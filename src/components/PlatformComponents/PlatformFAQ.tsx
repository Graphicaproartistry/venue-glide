import React, { useState } from "react";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is a Sports Venue Management Platform?",
    answer:
      "A sports venue management platform is software that helps venues manage bookings, memberships, payments, customer relationships, coaching, reporting and daily operations from one central system.",
  },
  {
    id: 2,
    question: "Is VenueGlide suitable for multiple locations?",
    answer:
      "Yes. VenueGlide supports single venues, franchise groups and enterprise organisations with centralised management and reporting.",
  },
  {
    id: 3,
    question: "Does VenueGlide include online booking software?",
    answer:
      "Yes. Customers can check real-time availability, make bookings, pay online and receive automated confirmations.",
  },
  {
    id: 4,
    question: "Can VenueGlide replace multiple software systems?",
    answer:
      "Yes. VenueGlide combines booking software, CRM, membership management, POS, reporting, automation and payments into one integrated platform.",
  },
  {
    id: 5,
    question: "Is VenueGlide cloud-based?",
    answer:
      "Yes. VenueGlide is a secure cloud-based platform that can be accessed from desktop, tablet and mobile devices.",
  },
];

const PlatformFAQ: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="platform-section">
      <div className="container">
        <div className="sec-title-wrap text-center mb-5">
          <span className="sub-title-badge">FAQ</span>
          <MaskText as="h2" className="platform-sec-title" lines={["Frequently Asked Questions"]} />
        </div>

        <div className="platform-faq-accordion">
          {faqData.map((item, idx) => {
            const isOpen = activeId === item.id;
            return (
              <Reveal
                key={item.id}
                direction="up"
                distance={16}
                delay={Math.min(idx * 0.06, 0.3)}
                className={`platform-faq-item ${isOpen ? "active" : ""}`}
              >
                <button
                  className="platform-faq-btn"
                  onClick={() => toggleFAQ(item.id)}
                >
                  <span>{item.question}</span>
                  <span className="platform-faq-icon">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="platform-faq-answer">
                    <p className="m-0">{item.answer}</p>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformFAQ;

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
    question: "Do I need to sign a long-term contract?",
    answer:
      "We offer flexible subscription options designed to suit businesses of different sizes. Speak with our team to discuss the best plan for your venue.",
  },
  {
    id: 2,
    question: "Can I upgrade my plan later?",
    answer:
      "Yes. As your venue grows, you can upgrade to additional features and enterprise capabilities at any time.",
  },
  {
    id: 3,
    question: "Is onboarding included?",
    answer:
      "Yes. Every VenueGlide customer receives onboarding guidance, with enhanced implementation services available for larger organisations.",
  },
  {
    id: 4,
    question: "Does VenueGlide support multiple locations?",
    answer:
      "Yes. Our Enterprise plan is specifically designed for organisations managing multiple sports venues.",
  },
  {
    id: 5,
    question: "Is support included?",
    answer:
      "Yes. All plans include customer support, with priority and dedicated support available on higher-tier plans.",
  },
  {
    id: 6,
    question: "Can VenueGlide be customised?",
    answer:
      "Absolutely. Enterprise customers can access custom workflows, integrations and implementation services tailored to their operational requirements.",
  },
];

const PricingFAQ: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="pricing-section">
      <div className="container">
        <MaskText as="h2" className="pricing-sec-title" lines={["Frequently Asked Questions"]} />

        <div className="pricing-faq-accordion">
          {faqData.map((item, idx) => {
            const isOpen = activeId === item.id;
            return (
              <Reveal
                key={item.id}
                direction="up"
                distance={16}
                delay={Math.min(idx * 0.07, 0.3)}
                className={`pricing-faq-item ${isOpen ? "active" : ""}`}
              >
                <button
                  className="pricing-faq-btn"
                  onClick={() => toggleFAQ(item.id)}
                >
                  <span>{item.question}</span>
                  <span className="pricing-faq-icon">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="pricing-faq-answer">
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

export default PricingFAQ;

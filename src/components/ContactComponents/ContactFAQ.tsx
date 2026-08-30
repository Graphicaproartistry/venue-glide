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
    question: "How quickly will someone contact me?",
    answer: "Most enquiries receive a response within one business day.",
  },
  {
    id: 2,
    question: "Can I request a personalised demonstration?",
    answer:
      "Yes. Our team provides live demonstrations tailored to your venue and operational requirements.",
  },
  {
    id: 3,
    question: "Can VenueGlide support multiple locations?",
    answer:
      "Absolutely. We work with both independent venues and enterprise organisations managing multiple facilities.",
  },
  {
    id: 4,
    question: "Is VenueGlide available outside Australia?",
    answer:
      "Yes. VenueGlide is a cloud-based platform designed to support sports venues worldwide.",
  },
  {
    id: 5,
    question: "Do you offer onboarding and training?",
    answer:
      "Yes. We provide onboarding, implementation guidance and ongoing customer support to help your team get the most from VenueGlide.",
  },
];

const ContactFAQ: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="contact-section">
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

export default ContactFAQ;

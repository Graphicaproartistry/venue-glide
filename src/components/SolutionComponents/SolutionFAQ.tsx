import React, { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Which sports venues can use VenueGlide?",
    answer: "VenueGlide is designed for indoor cricket centres, tennis clubs, padel clubs, football centres, basketball facilities, badminton venues, pickleball clubs, sports academies and multi-sport facilities.",
  },
  {
    id: 2,
    question: "Can VenueGlide replace my current booking software?",
    answer:
      "Yes. VenueGlide combines online bookings, memberships, CRM, POS, reporting, payments and automation into one integrated platform.",
  },
  {
    id: 3,
    question: "Does VenueGlide support multiple venues?",
    answer:
      "Absolutely. Multi-location management allows you to manage several venues from a single account while maintaining separate reporting and operational controls.",
  },
  {
    id: 4,
    question: "Is VenueGlide suitable for growing businesses?",
    answer:
      "Yes. The platform is scalable and supports businesses from a single venue through to enterprise operators managing multiple locations.",
  },
];

const SolutionFAQ: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="solution-section">
      <div className="container">
        <div className="sec-title-wrap text-center mb-5 wow fadeInUp" data-wow-duration="600ms">
          <span className="sub-title-badge">FAQ</span>
          <h2 className="solution-sec-title">Frequently Asked Questions</h2>

        </div>

        <div className="solution-faq-accordion wow fadeInUp" data-wow-delay="150ms" data-wow-duration="600ms">
          {faqData.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div
                key={item.id}
                className={`solution-faq-item ${isOpen ? "active" : ""}`}
              >
                <button
                  className="solution-faq-btn"
                  onClick={() => toggleFAQ(item.id)}
                >
                  <span>{item.question}</span>
                  <span className="solution-faq-icon">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="solution-faq-answer">
                    <p className="m-0">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionFAQ;

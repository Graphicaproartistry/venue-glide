import React, { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How long does the demo take?",
    answer:
      "Most personalised demonstrations take between 30 and 45 minutes, depending on the size and complexity of your venue.",
  },
  {
    id: 2,
    question: "Is the demo free?",
    answer:
      "Yes. Every VenueGlide demonstration is completely free and comes with no obligation.",
  },
  {
    id: 3,
    question: "Can multiple team members attend?",
    answer:
      "Absolutely. We encourage venue owners, managers and operational staff to join the session so everyone can see how the platform supports their role.",
  },
  {
    id: 4,
    question: "Will the demo be customised?",
    answer:
      "Yes. Before your session we'll learn about your venue so we can focus on the features most relevant to your business.",
  },
  {
    id: 5,
    question: "Do I need technical knowledge?",
    answer:
      "No. The demonstration is designed for venue owners, managers and staff, regardless of technical experience.",
  },
  {
    id: 6,
    question: "Can you demonstrate features for my sport?",
    answer:
      "Yes. Whether you operate an indoor cricket centre, tennis club, padel club, football centre or multi-sport venue, we'll tailor the demonstration to your business.",
  },
];

const BookDemoFAQ: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="book-demo-section">
      <div className="container">
        <h2 className="pricing-sec-title wow fadeInUp" data-wow-duration="600ms">
          Frequently Asked Questions
        </h2>

        <div className="pricing-faq-accordion wow fadeInUp" data-wow-delay="150ms" data-wow-duration="600ms">
          {faqData.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div
                key={item.id}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BookDemoFAQ;

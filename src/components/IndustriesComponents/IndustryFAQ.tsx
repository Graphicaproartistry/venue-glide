import React, { useState } from "react";
import { Link } from "react-router-dom";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Which sports are supported by VenueGlide?",
    answer:
      "VenueGlide supports indoor cricket, padel, tennis, football, basketball, badminton, squash, pickleball, sports academies, recreation centres and multi-sport facilities.",
  },
  {
    id: 2,
    question: "Can VenueGlide be customised for my venue?",
    answer:
      "Yes. Every venue has unique booking rules, pricing, memberships and operational requirements. VenueGlide can be configured to suit your business.",
  },
  {
    id: 3,
    question: "Is VenueGlide suitable for multiple locations?",
    answer:
      "Absolutely. Our platform is built for single venues, franchise groups and enterprise organisations managing multiple facilities.",
  },
  {
    id: 4,
    question: "Does VenueGlide support coaching programs?",
    answer:
      "Yes. Coaching schedules, attendance, payments and customer management are all included.",
  },
];

const IndustryFAQ: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="industry-section">
      <div className="container">
        <div className="sec-title-wrap text-center mb-5 wow fadeInUp" data-wow-duration="600ms">
          <span className="sub-title-badge">FAQ</span>
          <h2 className="industry-sec-title">Frequently Asked Questions</h2>
          <p
            style={{
              fontSize: "15px",
              color: "#cbd5e1",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Find answers to commonly asked questions about our product or service in our comprehensive FAQ section.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Left: Accordions */}
          <div className="col-lg-8 wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="600ms">
            <div className="industry-faq-accordion">
              {faqData.map((item) => {
                const isOpen = activeId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`industry-faq-item ${isOpen ? "active" : ""}`}
                    style={{
                      background: "rgba(13, 20, 36, 0.75)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "14px",
                      marginBottom: "16px",
                      overflow: "hidden",
                    }}
                  >
                    <button
                      className="industry-faq-btn"
                      onClick={() => toggleFAQ(item.id)}
                      style={{
                        width: "100%",
                        padding: "22px 28px",
                        background: "transparent",
                        border: "none",
                        textAlign: "left",
                        fontSize: "17px",
                        fontWeight: 700,
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                      }}
                    >
                      <span>{item.question}</span>
                      <span
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          background: "rgba(255, 255, 255, 0.06)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#00D4ff",
                          fontSize: "18px",
                          transform: isOpen ? "rotate(45deg)" : "none",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          padding: "0 28px 24px",
                          fontSize: "15px",
                          lineHeight: 1.7,
                          color: "#cbd5e1",
                        }}
                      >
                        <p className="m-0">{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Side Support Card */}
          <div className="col-lg-4 wow fadeInRight" data-wow-delay="300ms" data-wow-duration="600ms">
            <div className="industry-faq-side-box">
              <div className="icon-box">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>

              <h3 className="title">Do you need any help & support?</h3>
              <p className="desc">
                Our venue specialists can show you how VenueGlide adapts to your
                facility's exact operational requirements.
              </p>
              <Link to="/contact" className="demo-link">
                <span>Book a Demo Call</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryFAQ;

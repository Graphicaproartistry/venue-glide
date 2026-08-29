import React, { useState } from "react";
import "./SportsVenueFAQ.css";
import featureBg from "../../images/bg/features-gradient-bg.png";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is sports venue management software?",
    answer:
      "Sports venue management software is an all-in-one cloud platform that centralizes court bookings, membership management, POS transactions, coaching programs, staff scheduling, and financial analytics for sports facilities.",
  },
  {
    id: 2,
    question: "Can VenueGlide manage multiple locations?",
    answer:
      "Yes! VenueGlide is built with multi-location architecture, allowing you to manage multiple sports facilities, courts, staff accounts, and financial reports across different sites from one central dashboard.",
  },
  {
    id: 3,
    question: "Does VenueGlide support online court bookings?",
    answer:
      "Absolutely. Customers can view real-time availability 24/7, select preferred court times, make recurring or single bookings, apply dynamic pricing, and complete instant payments online.",
  },
  {
    id: 4,
    question: "Can I manage memberships?",
    answer:
      "Yes. VenueGlide provides comprehensive membership management, including automated direct debit processing, family memberships, attendance tracking, loyalty programs, and digital waivers.",
  },
  {
    id: 5,
    question: "Does VenueGlide include POS?",
    answer:
      "Yes! VenueGlide features an integrated Sports Facility POS system that lets you sell merchandise, equipment rentals, café items, coaching sessions, and gift cards directly at your venue.",
  },
  {
    id: 6,
    question: "Can I accept online payments?",
    answer:
      "Yes. VenueGlide integrates natively with Stripe to process credit cards, debit cards and direct debits, with automated recurring billing handled securely end to end.",
  },
  {
    id: 7,
    question: "Does VenueGlide integrate with Xero?",
    answer:
      "Yes! VenueGlide offers a native Xero integration, allowing automated syncing of daily sales, invoices, revenue streams, and financial reports straight into your accounting platform.",
  },
  {
    id: 8,
    question: "Can customers book online?",
    answer:
      "Yes. Customers get access to a mobile-responsive online booking portal where they can check court schedules, reserve sessions, manage their memberships, and pay online 24/7.",
  },
  {
    id: 9,
    question: "Does VenueGlide support coaching programs?",
    answer:
      "Yes! You can easily schedule group coaching classes, private sessions, junior sports academies, coach availability, student rosters, and recurring program fees.",
  },
  {
    id: 10,
    question: "Is VenueGlide suitable for indoor cricket centres?",
    answer:
      "Yes! VenueGlide is specifically designed to support indoor sports venues including cricket centres, padel clubs, tennis courts, football facilities, and multi-sport complexes.",
  },
  {
    id: 11,
    question: "Can I manage padel clubs?",
    answer:
      "Absolutely. VenueGlide provides tailored tools for padel clubs including court reservation grids, lighting/gate access integrations, tournament scheduling, and membership tiers.",
  },
  {
    id: 12,
    question: "Does VenueGlide work on mobile devices?",
    answer:
      "Yes! VenueGlide is fully cloud-based and responsive. Admins, staff, coaches, and customers can access all features smoothly on desktop, tablet, and mobile browsers.",
  },
  {
    id: 13,
    question: "Can members enter the venue during staffless hours?",
    answer:
      "Yes. VenueGlide integrates with Igloo smart-lock door access, so members and booked customers can unlock the venue themselves during early-morning, late-night or unstaffed hours — access is granted automatically for the duration of their booking and revoked afterwards.",
  },
  {
    id: 14,
    question: "Is VenueGlide available in Melbourne and across Australia?",
    answer:
      "Yes. VenueGlide is built and supported in Melbourne, Victoria, and used by sports venues across Australia — from independent single-court clubs to multi-location operators.",
  },
];

const SportsVenueFAQ: React.FC = () => {
  // Default question #6 ("Can I accept online payments?") active to mirror screenshot
  const [activeId, setActiveId] = useState<number | null>(6);

  const toggleFAQ = (id: number) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section
      className="sports-venue-faq bg_img"
      style={{ backgroundImage: `url(${featureBg})` }}
    >
      <div className="container">
        <div className="row">
          {/* Left Column Header */}
          <div className="col-lg-4">
            <div
              className="faq-header-wrap wow fadeInUp"
              data-wow-duration="600ms"
            >
              <span className="faq-badge">FAQS</span>
              <h2 className="faq-title">
                Frequently Asked <br className="d-none d-lg-block" /> Questions
              </h2>
            </div>
          </div>

          {/* Right Column Questions List */}
          <div className="col-lg-8">
            <div className="faq-list">
              {faqData.map((item) => {
                const isOpen = activeId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`faq-item ${isOpen ? "active" : ""}`}
                  >
                    <button
                      type="button"
                      className="faq-question-btn"
                      onClick={() => toggleFAQ(item.id)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-question-text">{item.question}</span>
                      <div className="faq-icon-box">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 1V13M1 7H13"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </button>
                    <div className="faq-answer">
                      <div className="faq-answer-content">{item.answer}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsVenueFAQ;

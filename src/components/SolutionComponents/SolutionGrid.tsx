import React from "react";
import {
  LuCalendarCheck,
  LuUsers,
  LuHeartHandshake,
  LuCreditCard,
  LuGraduationCap,
  LuDollarSign,
  LuChartColumn,
  LuBuilding2,
  LuSparkles
} from "react-icons/lu";
import { Icon } from "../common/Icon";
import { IconType } from "react-icons";

interface SolutionItem {
  id: number;
  title: string;
  desc: string;
  icon: IconType;
  bullets: string[];
}

const solutionItems: SolutionItem[] = [
  {
    id: 1,
    title: "Simplify Facility Bookings",
    desc: "Give customers the ability to book courts, pitches, lanes and facilities online 24/7 with real-time availability, instant confirmations and secure payments.",
    icon: LuCalendarCheck,
    bullets: [
      "Online bookings",
      "Court scheduling",
      "Recurring reservations",
      "Dynamic pricing",
      "QR check-in",
      "Waitlists",
      "Automated reminders",
    ],
  },
  {
    id: 2,
    title: "Grow and Retain Your Members",
    desc: "Manage memberships, subscriptions and renewals from one platform while improving member engagement through automation and personalised experiences.",
    icon: LuUsers,
    bullets: [
      "Membership plans",
      "Family memberships",
      "Direct debit",
      "Attendance tracking",
      "Loyalty rewards",
      "Automated renewals",
      "Digital waivers",
    ],
  },
  {
    id: 3,
    title: "Build Stronger Relationships",
    desc: "Every customer interaction is stored in one central CRM, helping your team provide personalised service and build long-term loyalty.",
    icon: LuHeartHandshake,
    bullets: [
      "Customer profiles",
      "Booking history",
      "Communication logs",
      "Marketing campaigns",
      "Notes",
      "Preferences",
      "Customer segmentation",
    ],
  },
  {
    id: 4,
    title: "Sell More With Integrated POS",
    desc: "Manage café sales, merchandise, coaching sessions and equipment hire through a fully integrated Point of Sale connected to customer accounts and reporting.",
    icon: LuCreditCard,
    bullets: [
      "Retail",
      "Food & Beverage",
      "Merchandise",
      "Equipment Hire",
      "Coaching Packages",
    ],
  },
  {
    id: 5,
    title: "Manage Coaches and Programs",
    desc: "Schedule coaches, training sessions, private lessons and group programs while keeping attendance, payments and customer communication organised.",
    icon: LuGraduationCap,
    bullets: [
      "Cricket Academies",
      "Tennis Coaching",
      "Football Training",
      "Padel Coaching",
      "Junior Development",
    ],
  },
  {
    id: 6,
    title: "Faster Payments, Better Cash Flow",
    desc: "Accept secure online payments, deposits, memberships and recurring subscriptions with integrated payment gateways.",
    icon: LuDollarSign,
    bullets: [
      "Credit Cards",
      "Digital Wallets",
      "Membership Payments",
      "Deposits",
      "Refunds",
      "Invoicing",
    ],
  },
  {
    id: 7,
    title: "Make Better Business Decisions",
    desc: "Track every aspect of your venue through real-time reporting and analytics.",
    icon: LuChartColumn,
    bullets: [
      "Revenue",
      "Occupancy",
      "Peak Hours",
      "Membership Growth",
      "Staff Performance",
      "Coaching Revenue",
      "POS Sales",
      "Customer Retention",
    ],
  },
  {
    id: 8,
    title: "One Platform for Every Location",
    desc: "Whether you manage one sports centre or twenty venues across Australia, VenueGlide centralises your operations while allowing each location to maintain its own schedules, pricing and reporting.",
    icon: LuBuilding2,
    bullets: [

    ],
  },
  {
    id: 9,
    title: "Intelligence Built into Every Section",
    desc: "VenueGlide AI (Beta) helps managers analyse business performance, answer operational questions and generate reports in seconds.",
    icon: LuSparkles,
    bullets: [
      "Revenue forecasting",
      "Occupancy analysis",
      "Membership trends",
      "Booking insights",
      "Business recommendations",
    ],
  },
];

const SolutionGrid: React.FC = () => {
  return (
    <section className="solution-section" id="solutions-grid">
      <div className="container">
        <div className="sec-title-wrap text-center mb-5 wow fadeInUp" data-wow-duration="600ms">
          <h2 className="solution-sec-title">Online Booking Solution</h2>
        </div>

        <div className="row g-4">
          {solutionItems.map((item, idx) => (
            <div key={item.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${(idx % 3) * 100 + 100}ms`} data-wow-duration="600ms">
              <div className="solution-grid-card">
                <div className="icon-badge">
                  <Icon icon={item.icon} size={22} />
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
                {item.bullets.length > 0 && (
                  <ul className="bullet-list bullet-list-custom py-0 px-3">
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionGrid;

import React from "react";
import { 
  LuCalendarCheck, 
  LuUsers, 
  LuUserCheck, 
  LuCreditCard, 
  LuGraduationCap, 
  LuChartColumn, 
  LuSparkles 
} from "react-icons/lu";
import { Icon } from "../common/Icon";
import { IconType } from "react-icons";

interface DemoFeatureItem {
  title: string;
  desc: string;
  icon: IconType;
}

const features: DemoFeatureItem[] = [
  {
    title: "Online Booking Management",
    desc: "See how customers book courts, facilities and coaching online in real time.",
    icon: LuCalendarCheck,
  },
  {
    title: "Membership Management",
    desc: "Discover how memberships, renewals, attendance and loyalty programs are automated.",
    icon: LuUsers,
  },
  {
    title: "Customer CRM",
    desc: "View complete customer profiles, booking history, communication and marketing tools.",
    icon: LuUserCheck,
  },
  {
    title: "Point of Sale",
    desc: "Explore café, retail, merchandise and equipment hire workflows.",
    icon: LuCreditCard,
  },
  {
    title: "Coaching Management",
    desc: "Learn how coaches, lessons, academies and player development programs are managed.",
    icon: LuGraduationCap,
  },
  {
    title: "Reporting & Analytics",
    desc: "See live business dashboards and performance reports.",
    icon: LuChartColumn,
  },
  {
    title: "VenueGlide AI (Beta)",
    desc: "Experience AI-powered reporting, forecasting and operational insights.",
    icon: LuSparkles,
  },
];

const BookDemoWhatYouSee: React.FC = () => {
  return (
    <section className="book-demo-section">
      <div className="container">
        <h2 className="pricing-sec-title wow fadeInUp" data-wow-duration="600ms">
          What You'll See
        </h2>
        <h3 className="pricing-sec-subtitle wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
          A Demo Tailored to Your Venue
        </h3>

        <div className="what-you-see-intro wow fadeInUp" data-wow-delay="150ms" data-wow-duration="600ms">
          <p>No generic presentations.</p>
          <p>No pre-recorded videos.</p>
          <p>Every demonstration is customised for your venue.</p>
          <p style={{ color: "#cbd5e1", marginTop: "8px" }}>
            We'll walk you through the features that matter most to your business.
          </p>
        </div>

        <div className="what-you-see-grid">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="what-you-see-card wow fadeInUp"
              data-wow-delay={`${(idx % 3) * 100 + 200}ms`}
              data-wow-duration="600ms"
            >
              <div className="card-icon-box">
                <Icon icon={item.icon} size={24} />
              </div>
              <h4 className="card-title">{item.title}</h4>
              <p className="card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookDemoWhatYouSee;

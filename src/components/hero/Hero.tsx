
import React from "react";
import { Link } from "react-router-dom";

// Image imports (using your provided path)
import heroBg from "../../images/bg/hero_bg.png";
import heroIcon from "../../images/icon/animated-gif02.gif";
import featureIcon1 from "../../images/icon/feature-icon01.svg";
import featureIcon2 from "../../images/icon/feature-icon02.svg";

const HeroSection: React.FC = () => {
  return (
    <section
      className="hero hero-style pos-rel bg_img"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="container">
        <div className="row">
          {/* ---------- Left Content ---------- */}
          <div className="col-lg-9 col-md-9">
            <div className="hero-content">
              <h2 className="title scale-animation wow">
                Complete Sports Venue Management Software for Australia
              </h2>
              <p className="sub-title scale-animation wow">
                Everything your sports venue needs to manage bookings, memberships, coaching, payments, POS, reporting and customer relationships — all from one intelligent cloud platform.
              </p>
              <div className="hero-btn scale-animation wow ">
                <Link className="thm-btn agency-btn" to="/about" style={{ marginRight: "10px", marginBottom: "10px" }}>
                  <span className="text">Book Now</span>
                  <span className="arrow">
                    <span className="arrow-icon">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="5.06592"
                          y="19.9785"
                          width="20.5712"
                          height="2.61221"
                          transform="rotate(-40.2798 5.06592 19.9785)"
                          fill="white"
                        />
                        <rect
                          x="7.97095"
                          y="7.24463"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 7.97095 7.24463)"
                          fill="white"
                        />
                        <rect
                          x="11.6523"
                          y="7.54834"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 11.6523 7.54834)"
                          fill="white"
                        />
                        <rect
                          x="15.334"
                          y="7.85205"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 15.334 7.85205)"
                          fill="white"
                        />
                        <rect
                          x="18.7119"
                          y="11.8374"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.7119 11.8374)"
                          fill="white"
                        />
                        <rect
                          x="18.4084"
                          y="15.52"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.4084 15.52)"
                          fill="white"
                        />
                        <rect
                          x="18.104"
                          y="19.2012"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.104 19.2012)"
                          fill="white"
                        />
                      </svg>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="5.06592"
                          y="19.9785"
                          width="20.5712"
                          height="2.61221"
                          transform="rotate(-40.2798 5.06592 19.9785)"
                          fill="white"
                        />
                        <rect
                          x="7.97095"
                          y="7.24463"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 7.97095 7.24463)"
                          fill="white"
                        />
                        <rect
                          x="11.6523"
                          y="7.54834"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 11.6523 7.54834)"
                          fill="white"
                        />
                        <rect
                          x="15.334"
                          y="7.85205"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 15.334 7.85205)"
                          fill="white"
                        />
                        <rect
                          x="18.7119"
                          y="11.8374"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.7119 11.8374)"
                          fill="white"
                        />
                        <rect
                          x="18.4084"
                          y="15.52"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.4084 15.52)"
                          fill="white"
                        />
                        <rect
                          x="18.104"
                          y="19.2012"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.104 19.2012)"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </span>
                </Link>
                <Link className="thm-btn agency-btn" to="/about">
                  <span className="text">Watch Platform Tour</span>
                  <span className="arrow">
                    <span className="arrow-icon">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="5.06592"
                          y="19.9785"
                          width="20.5712"
                          height="2.61221"
                          transform="rotate(-40.2798 5.06592 19.9785)"
                          fill="white"
                        />
                        <rect
                          x="7.97095"
                          y="7.24463"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 7.97095 7.24463)"
                          fill="white"
                        />
                        <rect
                          x="11.6523"
                          y="7.54834"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 11.6523 7.54834)"
                          fill="white"
                        />
                        <rect
                          x="15.334"
                          y="7.85205"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 15.334 7.85205)"
                          fill="white"
                        />
                        <rect
                          x="18.7119"
                          y="11.8374"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.7119 11.8374)"
                          fill="white"
                        />
                        <rect
                          x="18.4084"
                          y="15.52"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.4084 15.52)"
                          fill="white"
                        />
                        <rect
                          x="18.104"
                          y="19.2012"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.104 19.2012)"
                          fill="white"
                        />
                      </svg>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="5.06592"
                          y="19.9785"
                          width="20.5712"
                          height="2.61221"
                          transform="rotate(-40.2798 5.06592 19.9785)"
                          fill="white"
                        />
                        <rect
                          x="7.97095"
                          y="7.24463"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 7.97095 7.24463)"
                          fill="white"
                        />
                        <rect
                          x="11.6523"
                          y="7.54834"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 11.6523 7.54834)"
                          fill="white"
                        />
                        <rect
                          x="15.334"
                          y="7.85205"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 15.334 7.85205)"
                          fill="white"
                        />
                        <rect
                          x="18.7119"
                          y="11.8374"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.7119 11.8374)"
                          fill="white"
                        />
                        <rect
                          x="18.4084"
                          y="15.52"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.4084 15.52)"
                          fill="white"
                        />
                        <rect
                          x="18.104"
                          y="19.2012"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.104 19.2012)"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* ---------- Right Icon ---------- */}
          <div className="col-lg-3 col-md-3">
            <div
              className="hero-icon wow zoomIn"
              data-wow-delay="700ms"
              data-wow-duration="800ms"
            >
              <img src={heroIcon} alt="Hero icon" />
            </div>
          </div>
        </div>
        {/* ===== Title Section ===== */}
        <div className="sec-title sec-title-center about-sec-title about-sec-title-two text-center pt-5 mt-5 pb-2" style={{ paddingTop: "90px" }}>
          <span className="sub-title d-inline-flex align-items-center gap-2 px-4 py-2 mb-3 rounded-pill text-uppercase fw-semibold" style={{ background: "rgba(0, 212, 255, 0.12)", color: "#00D4FF", border: "1px solid rgba(0, 212, 255, 0.3)", fontSize: "12px", letterSpacing: "1.5px" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
            </svg>
            Australia's #1 Sports Venue OS
          </span>

          <h2 className="title mt-2" style={{ fontSize: "38px", fontWeight: 700, lineHeight: "1.25", marginBottom: "16px" }}>
            Built for Every Modern Sports Venue
          </h2>

          <p className="content mx-auto" style={{ maxWidth: "720px", fontSize: "16px", color: "rgba(255, 255, 255, 0.75)", lineHeight: "1.6" }}>
            Whether you operate a single indoor facility or manage multi-sport venues across Australia, VenueGlide OS powers seamless operations and maximum court utilization.
          </p>
        </div>

        {/* ---------- Features / Support Cards ---------- */}
        <div className="row g-4 mt-2 pb-5">
          {/* Card 1: We Support */}
          <div className="col-lg-6 mt-30">
            <div
              className="xb-feature-item h-100 p-4 p-md-5 rounded-4 pos-rel wow fadeInUp"
              data-wow-delay="700ms"
              data-wow-duration="600ms"
              style={{
                background: "rgba(10, 15, 30, 0.75)",
                border: "1px solid rgba(0, 212, 255, 0.25)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(12px)"
              }}
            >
              <div className="d-flex align-items-center gap-3 mb-4">
                <span className="p-3 rounded-3" style={{ background: "rgba(0, 212, 255, 0.12)", border: "1px solid rgba(0, 212, 255, 0.25)" }}>
                  <img src={featureIcon1} alt="icon" style={{ width: "28px", height: "28px" }} />
                </span>
                <div>
                  <h3 style={{ color: "#ffffff", fontSize: "22px", fontWeight: 700, marginBottom: "2px" }}>
                    We Support All Venues:
                  </h3>
                  <span style={{ fontSize: "12px", color: "#00D4FF", fontWeight: 500 }}>
                    Customized workflows for every sport type
                  </span>
                </div>
              </div>

              <div className="row g-2">
                {[
                  {
                    name: "Indoor Cricket Centres",
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20" /><path d="M2 12h20" />
                      </svg>
                    )
                  },
                  {
                    name: "Padel & Tennis Clubs",
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9" /><path d="M12 3v18" strokeDasharray="2 2" />
                      </svg>
                    )
                  },
                  {
                    name: "Football & Futsal Turf",
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" /><polygon points="12 6 15 9 14 13 10 13 9 9" />
                      </svg>
                    )
                  },
                  {
                    name: "Basketball Stadiums",
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" /><path d="M5.5 5.5A10 10 0 0 1 12 2" /><path d="M18.5 18.5A10 10 0 0 1 12 22" />
                      </svg>
                    )
                  },
                  {
                    name: "Badminton Centres",
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v10" /><circle cx="12" cy="16" r="4" /><path d="M8 6h8" />
                      </svg>
                    )
                  },
                  {
                    name: "Pickleball Clubs",
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="6" y="3" width="12" height="12" rx="3" /><line x1="12" y1="15" x2="12" y2="21" />
                      </svg>
                    )
                  },
                  {
                    name: "Squash Facilities",
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" />
                      </svg>
                    )
                  },
                  {
                    name: "Multi-Sport Complexes",
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
                      </svg>
                    )
                  },
                  {
                    name: "Sports Academies",
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    )
                  },
                  {
                    name: "Training Facilities",
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    )
                  }
                ].map((venue, vIdx) => (
                  <div className="col-6" key={vIdx}>
                    <div className="p-2 px-3 rounded-3 d-flex align-items-center gap-2" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.08)", transition: "all 0.3s ease" }}>
                      <span className="d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "20px", height: "20px", borderRadius: "4px", background: "rgba(0, 212, 255, 0.1)" }}>
                        {venue.icon}
                      </span>
                      <span style={{ fontSize: "12px", color: "#e2e8f0", fontWeight: 500 }}>{venue.name}</span>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* Card 2: Platform Capabilities */}
          <div className="col-lg-6 mt-30">
            <div
              className="xb-feature-item h-100 p-4 p-md-5 rounded-4 pos-rel wow fadeInUp"
              data-wow-delay="800ms"
              data-wow-duration="600ms"
              style={{
                background: "rgba(10, 15, 30, 0.75)",
                border: "1px solid rgba(0, 212, 255, 0.25)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(12px)"
              }}
            >
              <div className="d-flex align-items-center gap-3 mb-4">
                <span className="p-3 rounded-3" style={{ background: "rgba(0, 212, 255, 0.12)", border: "1px solid rgba(0, 212, 255, 0.25)" }}>
                  <img src={featureIcon2} alt="icon" style={{ width: "28px", height: "28px" }} />
                </span>
                <div>
                  <h3 style={{ color: "#ffffff", fontSize: "22px", fontWeight: 700, marginBottom: "2px" }}>
                    Australia's Complete Venue OS
                  </h3>
                  <span style={{ fontSize: "12px", color: "#00D4FF", fontWeight: 500 }}>
                    Connected in real-time across your business
                  </span>
                </div>
              </div>

              <div className="row g-3">
                {[
                  {
                    title: "0 Disconnected Software",
                    desc: "Replaces fragmented booking systems with 1 unified platform.",
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    )
                  },
                  {
                    title: "0 Duplicated Data",
                    desc: "Real-time sync between POS, court schedules & CRM.",
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    )
                  },
                  {
                    title: "100% Automated Admin",
                    desc: "Auto SMS confirmations, waivers & direct debit billing.",
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                      </svg>
                    )
                  },
                  {
                    title: "AI Business Insights (Beta)",
                    desc: "Instant revenue predictions and occupancy analytics.",
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
                      </svg>
                    )
                  }
                ].map((pillar, pIdx) => (
                  <div className="col-12 col-sm-6" key={pIdx}>
                    <div className="p-3 rounded-3 h-100" style={{ background: "rgba(15, 23, 42, 0.6)", border: "1px solid rgba(0, 212, 255, 0.15)" }}>
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <span className="d-flex align-items-center justify-content-center" style={{ width: "24px", height: "24px", borderRadius: "6px", background: "rgba(0, 212, 255, 0.12)" }}>
                          {pillar.icon}
                        </span>
                        <h4 style={{ color: "#fff", fontSize: "13px", fontWeight: 700, margin: 0 }}>{pillar.title}</h4>
                      </div>
                      <p style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "11px", margin: 0, lineHeight: "1.4" }}>
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}

              </div>

              <div className="mt-4 p-3 rounded-3 text-center d-flex align-items-center justify-content-center gap-2" style={{ background: "rgba(0, 212, 255, 0.08)", border: "1px solid rgba(0, 212, 255, 0.25)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span style={{ fontSize: "13px", color: "#00D4FF", fontWeight: 600 }}>
                  Purpose-built specifically for Australian sports facilities.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default HeroSection;

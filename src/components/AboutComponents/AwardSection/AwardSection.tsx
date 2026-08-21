import React from "react";
import { Link } from "react-router-dom";

// Sports Venue Images
import cricketImg from "../../../images/sports/cricket.png";
import footballImg from "../../../images/sports/football.png";
import padelImg from "../../../images/sports/padel.png";
import basketballImg from "../../../images/sports/basketball.png";
import multisportImg from "../../../images/sports/multisport.png";

const sportsVenues = [
    {
        title: "Indoor Cricket Arena",
        sport: "Cricket",
        img: cricketImg,
        icon: (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20" />
            </svg>
        ),
        badge: "24/7 Nets & Pitch"
    },
    {
        title: "Football Turf Pitch",
        sport: "Football",
        img: footballImg,
        icon: (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polygon points="12 6 15 9 14 13 10 13 9 9" />
            </svg>
        ),
        badge: "Floodlit Stadium"
    },
    {
        title: "Padel & Tennis Club",
        sport: "Padel",
        img: padelImg,
        icon: (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" /><path d="M12 3v18" strokeDasharray="2 2" />
            </svg>
        ),
        badge: "Glass Court Tech"
    },
    {
        title: "Basketball Stadium",
        sport: "Basketball",
        img: basketballImg,
        icon: (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M5.5 5.5A10 10 0 0 1 12 2" />
            </svg>
        ),
        badge: "Hardwood Floor"
    },
    {
        title: "Multi-Sport Complex",
        sport: "Multi-Sport",
        img: multisportImg,
        icon: (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
            </svg>
        ),
        badge: "Unified Operating System"
    },
];

const AwardSection: React.FC = () => {
    return (
        <section className="award pos-rel py-5" style={{ background: "linear-gradient(180deg, #00020F 0%, #080D1F 100%)" }}>
            <div className="container">
                <div className="row align-items-center g-5">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-6">
                        <div className="sec-title mb-30">
                            <span className="sub-title d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-pill text-uppercase fw-semibold" style={{ background: "rgba(0, 212, 255, 0.12)", color: "#00D4FF", border: "1px solid rgba(0, 212, 255, 0.3)", fontSize: "12px", letterSpacing: "1px" }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                </svg>
                                Transform Your Operations
                            </span>
                            <h2 className="title title-line_height mb-3" style={{ fontSize: "38px", fontWeight: 700, lineHeight: "1.2" }}>
                                Ready to Modernise Your Sports Venue?
                            </h2>
                            <p className="content mb-4" style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.75)", lineHeight: "1.6" }}>
                                Discover how VenueGlide OS helps Australian sports venues automate operations, increase court bookings, enhance member retention, and maximize facility revenue.
                            </p>

                            <div className="d-flex flex-wrap align-items-center gap-3 mt-4">
                                <Link className="thm-btn agency-btn px-4 py-3" to="/contact" style={{ borderRadius: "12px", background: "linear-gradient(135deg, #00D4FF 0%, #0088ff 100%)", color: "#0a0f1e", fontWeight: 700, fontSize: "15px" }}>
                                    Book Your Personal Demo Today →
                                </Link>
                                <span className="d-inline-flex align-items-center gap-1" style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.6)", fontWeight: 500 }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                    </svg>
                                    14-day free setup • No credit card required
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT - SPORTS VENUES DISPLAY GRID */}
                    <div className="col-lg-6">
                        <div className="row g-3">
                            {sportsVenues.map((item, idx) => (
                                <div className={idx === 4 ? "col-12" : "col-6"} key={idx}>
                                    <div
                                        className="position-relative overflow-hidden rounded-4 p-3 d-flex flex-column justify-content-end"
                                        style={{
                                            height: idx === 4 ? "180px" : "160px",
                                            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(10,15,30,0.9) 100%), url(${item.img})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
                                            transition: "transform 0.3s ease, border-color 0.3s ease"
                                        }}
                                    >
                                        <div className="position-absolute top-0 start-0 m-2">
                                            <span className="badge rounded-pill px-2 py-1 d-inline-flex align-items-center gap-1" style={{ background: "rgba(0, 0, 0, 0.65)", backdropFilter: "blur(8px)", color: "#00D4FF", border: "1px solid rgba(0, 212, 255, 0.3)", fontSize: "10px" }}>
                                                {item.icon} {item.sport}
                                            </span>
                                        </div>

                                        <div>
                                            <h4 style={{ color: "#ffffff", fontSize: "15px", fontWeight: 700, marginBottom: "2px" }}>
                                                {item.title}
                                            </h4>
                                            <span style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "11px", fontWeight: 500 }}>
                                                ✓ {item.badge}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <span className="award-gradiant"></span>
        </section>
    );
};

export default AwardSection;


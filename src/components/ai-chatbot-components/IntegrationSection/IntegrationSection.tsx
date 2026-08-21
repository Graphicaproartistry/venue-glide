import React from "react";
import ComparisonSection from "./Comparison";

// ✅ Import assets
import bgImg from "../../../images/bg/integrations-bg.png";
import softwareDashboard from "../../../images/integration/software_dashboard.png";

const IntegrationComparisonSection: React.FC = () => {
    const replacedFeatures = [
        { 
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
            ), 
            title: "Court Booking Software", 
            tag: "Replaces 3+ Tools" 
        },
        { 
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
                </svg>
            ), 
            title: "Sports Facility POS", 
            tag: "Hardware & Soft" 
        },
        { 
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                </svg>
            ), 
            title: "Membership CRM", 
            tag: "Auto-Renewals" 
        },
        { 
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                </svg>
            ), 
            title: "Financial Reporting", 
            tag: "Real-time" 
        },
        { 
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
            ), 
            title: "Payment Processing", 
            tag: "Direct Debit" 
        },
        { 
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12A10 10 0 0 0 12 2v10z" /><path d="M12 22A10 10 0 0 0 22 12H12z" />
                </svg>
            ), 
            title: "Marketing Automation", 
            tag: "Email & SMS" 
        }
    ];

    return (
        <section
            id="integration"
            className="integration-conparison pt-40 pb-120 bg_img"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <div className="container">
                {/* ================= LEFT CONTENT ================= */}
                <div className="integration-container">
                    <div className="row mt-none-30 align-items-center">
                        <div className="col-lg-6 mt-30">
                            <div className="integration-content">
                                <div className="sec-title sec-title--two process-title mb-20">
                                    <span className="sub-title d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-pill text-uppercase fw-semibold" style={{ background: "rgba(0, 212, 255, 0.12)", color: "#00D4FF", border: "1px solid rgba(0, 212, 255, 0.25)", fontSize: "12px", letterSpacing: "1px" }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                        </svg>
                                        All-In-One Platform
                                    </span>
                                    <h2 className="title" style={{ fontSize: "38px", fontWeight: 700, lineHeight: "1.25", marginBottom: "16px" }}>
                                        Why Replace Multiple Systems?
                                    </h2>
                                    <p className="sub-title d-block mb-30" style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.75)", lineHeight: "1.6" }}>
                                        Most venues juggle 10+ disconnected tools. VenueGlide unifies everything into one intelligent operating system — cutting costs and saving 15+ hours weekly.
                                    </p>
                                </div>

                                {/* Replaced software feature tags grid */}
                                <div className="row g-3 mb-4">
                                    {replacedFeatures.map((item, idx) => (
                                        <div className="col-6" key={idx}>
                                            <div className="d-flex align-items-center p-3 rounded-3 h-100" style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(10px)", transition: "all 0.3s ease" }}>
                                                <span className="me-3 d-flex align-items-center justify-content-center p-2 rounded-2 flex-shrink-0" style={{ width: "36px", height: "36px", background: "rgba(0, 212, 255, 0.1)", border: "1px solid rgba(0, 212, 255, 0.2)" }}>
                                                    {item.icon}
                                                </span>
                                                <div>
                                                    <div style={{ color: "#fff", fontWeight: 600, fontSize: "14px", lineHeight: "1.3" }}>
                                                        {item.title}
                                                    </div>
                                                    <span style={{ fontSize: "11px", color: "#00D4FF", fontWeight: 500 }}>
                                                        ✓ {item.tag}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="integration-btn mt-35">
                                    <div className="cta-btn wow fadeInUp" data-wow-duration="600ms">
                                        <a className="thm-btn chatbot-btn" href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                                            Book Demo — Experience Unified OS
                                            <span className="arrow-icon">
                                                {[...Array(2)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        width="24"
                                                        height="24"
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
                                                    </svg>
                                                ))}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ================= SOFTWARE DASHBOARD SHOWCASE IMAGE ================= */}
                        <div className="col-lg-6 mt-30">
                            <div className="position-relative p-2 rounded-4 overflow-hidden" style={{ background: "rgba(10, 15, 30, 0.75)", border: "1px solid rgba(0, 212, 255, 0.3)", boxShadow: "0 20px 50px rgba(0, 212, 255, 0.15)", backdropFilter: "blur(12px)" }}>
                                <div className="position-relative overflow-hidden rounded-3">
                                    <img 
                                        src={softwareDashboard} 
                                        alt="VenueGlide Unified Software Operating System Dashboard" 
                                        className="w-100 h-auto rounded-3 d-block" 
                                        style={{ transition: "transform 0.4s ease", border: "1px solid rgba(255, 255, 255, 0.1)" }}
                                    />
                                    <div className="position-absolute bottom-0 start-0 end-0 p-3 d-flex align-items-center justify-content-between" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(10,15,30,0.95) 100%)" }}>
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="d-inline-flex align-items-center justify-content-center p-1 rounded-circle" style={{ background: "#00D4FF", color: "#000" }}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                            </span>
                                            <span style={{ fontSize: "12px", color: "#fff", fontWeight: 600 }}>
                                                Unified VenueGlide OS Platform
                                            </span>
                                        </div>
                                        <span className="badge rounded-pill px-3 py-1" style={{ background: "rgba(0, 212, 255, 0.2)", color: "#00D4FF", border: "1px solid rgba(0, 212, 255, 0.4)", fontSize: "10px" }}>
                                            Live Cloud Operations
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= COMPARISON SECTION ================= */}
                <ComparisonSection />
            </div>
        </section>
    );
};

export default IntegrationComparisonSection;



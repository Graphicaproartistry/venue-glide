import React from "react";

// ==== Import Images ====
import gif1 from "../../../images/icon/original-66948a0d81d.gif";
import gif2 from "../../../images/icon/0deec720000b2066289b.gif";
import gif3 from "../../../images/icon/b10c3e43e836d32554bf.gif";

import featureIcon1 from "../../../images/icon/feature-icon01.svg";
import featureIcon2 from "../../../images/icon/feature-icon02.svg";

import aboutBg from "../../../images/bg/about-bg02.png";

const AboutSection: React.FC = () => {
  return (
    <section className="about pos-rel py-5" style={{ background: "linear-gradient(180deg, #00020F 0%, #080D1F 100%)" }}>

      <div className="container">
        {/* ===== Title Section ===== */}
        <div className="sec-title sec-title-center about-sec-title about-sec-title-two text-center mb-5 wow fadeInUp" data-wow-duration="600ms">
          <span className="sub-title d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-pill text-uppercase fw-semibold" style={{ background: "rgba(0, 212, 255, 0.12)", color: "#00D4FF", border: "1px solid rgba(0, 212, 255, 0.25)", fontSize: "12px", letterSpacing: "1px" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            ABOUT VENUEGLIDE OS
          </span>

          <h2 className="title" style={{ fontSize: "40px", fontWeight: 700, lineHeight: "1.25", marginBottom: "16px", color: "#ffffff" }}>
            Powering the Future of Sports Venue Management
          </h2>

          <p className="content mx-auto mb-4" style={{ maxWidth: "780px", fontSize: "16px", color: "rgba(255, 255, 255, 0.8)", lineHeight: "1.6" }}>
            VenueGlide OS is Australia's unified sports venue management platform—built specifically for indoor sports centres, padel clubs, tennis venues, football turfs, and multi-sport complexes to simplify operations, increase bookings, and drive growth.
          </p>

          {/* Metric Highlight Badges */}
          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            <div className="px-3 py-2 rounded-pill d-inline-flex align-items-center gap-2" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(0, 212, 255, 0.2)" }}>
              <span style={{ color: "#00D4FF", fontWeight: 700, fontSize: "13px" }}>⚡ 100% Cloud-Based</span>
            </div>
            <div className="px-3 py-2 rounded-pill d-inline-flex align-items-center gap-2" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(0, 212, 255, 0.2)" }}>
              <span style={{ color: "#00D4FF", fontWeight: 700, fontSize: "13px" }}>⏱️ Save 15+ Hrs Weekly</span>
            </div>
            <div className="px-3 py-2 rounded-pill d-inline-flex align-items-center gap-2" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(0, 212, 255, 0.2)" }}>
              <span style={{ color: "#00D4FF", fontWeight: 700, fontSize: "13px" }}>🔒 10+ Disconnected Tools Replaced</span>
            </div>
          </div>
        </div>

        {/* ===== Equalized Mission & Vision Cards ===== */}
        <div className="row g-4 align-items-stretch mt-2">
          {/* Card 1: Our Mission */}
          <div className="col-lg-6 d-flex">
            <div 
              className="p-4 p-md-5 rounded-4 w-100 d-flex flex-column justify-content-between" 
              style={{ 
                background: "rgba(13, 20, 36, 0.75)", 
                backdropFilter: "blur(12px)", 
                border: "1px solid rgba(0, 212, 255, 0.25)", 
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)",
                transition: "all 0.3s ease" 
              }}
            >
              <div>
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="d-inline-flex align-items-center justify-content-center p-3 rounded-3" style={{ background: "rgba(0, 212, 255, 0.12)", border: "1px solid rgba(0, 212, 255, 0.25)", width: "52px", height: "52px" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>
                  <div>
                    <span style={{ fontSize: "11px", color: "#00D4FF", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>OUR MISSION</span>
                    <h3 style={{ color: "#ffffff", fontSize: "20px", fontWeight: 700, margin: 0 }}>Simplifying Venue Operations</h3>
                  </div>
                </div>

                <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14.5px", lineHeight: "1.6", marginBottom: "20px" }}>
                  Empower Australian sports venue owners and operators with technology that reduces administration, improves operational efficiency, and creates exceptional experiences for members, players, and staff.
                </p>

                <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2">
                  <li className="d-flex align-items-center gap-2" style={{ fontSize: "13.5px", color: "#cbd5e1" }}>
                    <span className="d-inline-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(0, 212, 255, 0.15)", color: "#00D4FF" }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    24/7 Online Court & Field Booking Automation
                  </li>
                  <li className="d-flex align-items-center gap-2" style={{ fontSize: "13.5px", color: "#cbd5e1" }}>
                    <span className="d-inline-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(0, 212, 255, 0.15)", color: "#00D4FF" }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    Automated Direct Debit & Membership Management
                  </li>
                  <li className="d-flex align-items-center gap-2" style={{ fontSize: "13.5px", color: "#cbd5e1" }}>
                    <span className="d-inline-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(0, 212, 255, 0.15)", color: "#00D4FF" }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    Integrated Point of Sale & Coaching Rosters
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Our Vision */}
          <div className="col-lg-6 d-flex">
            <div 
              className="p-4 p-md-5 rounded-4 w-100 d-flex flex-column justify-content-between" 
              style={{ 
                background: "rgba(13, 20, 36, 0.75)", 
                backdropFilter: "blur(12px)", 
                border: "1px solid rgba(0, 212, 255, 0.25)", 
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)",
                transition: "all 0.3s ease" 
              }}
            >
              <div>
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="d-inline-flex align-items-center justify-content-center p-3 rounded-3" style={{ background: "rgba(0, 212, 255, 0.12)", border: "1px solid rgba(0, 212, 255, 0.25)", width: "52px", height: "52px" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
                    </svg>
                  </div>
                  <div>
                    <span style={{ fontSize: "11px", color: "#00D4FF", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>OUR VISION</span>
                    <h3 style={{ color: "#ffffff", fontSize: "20px", fontWeight: 700, margin: 0 }}>Operating System for Sports</h3>
                  </div>
                </div>

                <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14.5px", lineHeight: "1.6", marginBottom: "20px" }}>
                  Building the leading cloud operating system for sports venues—combining automation, artificial intelligence, and real-time analytics to redefine how sports businesses operate and grow.
                </p>

                <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2">
                  <li className="d-flex align-items-center gap-2" style={{ fontSize: "13.5px", color: "#cbd5e1" }}>
                    <span className="d-inline-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(0, 212, 255, 0.15)", color: "#00D4FF" }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    AI-Powered Business Intelligence & Forecasting
                  </li>
                  <li className="d-flex align-items-center gap-2" style={{ fontSize: "13.5px", color: "#cbd5e1" }}>
                    <span className="d-inline-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(0, 212, 255, 0.15)", color: "#00D4FF" }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    Seamless Multi-Site Venue Management
                  </li>
                  <li className="d-flex align-items-center gap-2" style={{ fontSize: "13.5px", color: "#cbd5e1" }}>
                    <span className="d-inline-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(0, 212, 255, 0.15)", color: "#00D4FF" }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    Real-Time Xero Accounting & Revenue Sync
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

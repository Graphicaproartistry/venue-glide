import React from "react";
import { Link } from "react-router-dom";
import { LuCheck, LuSmartphone, LuTablet, LuMonitor } from "react-icons/lu";
import { Icon } from "../common/Icon";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";
import MagneticButton from "../motion/MagneticButton";
import "./PlatformBookingExperience.css";

const capabilities = [
  "Live availability across every court, lane or facility — no double-bookings",
  "Player count, time slot and paid add-ons selected on one screen",
  "One responsive booking flow — phone, tablet and desktop, no separate app",
  "Instant confirmation the moment a customer completes checkout",
];

const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const times = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00"];

const PlatformBookingExperience: React.FC = () => {
  return (
    <section className="platform-section booking-experience-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="platform-sub-title">Booking Experience</span>
            <MaskText
              as="h2"
              className="platform-sec-title"
              lines={["A Booking Flow Built", "for Every Screen"]}
            />
            <Reveal direction="up" delay={0.15}>
              <p className="platform-sec-desc">
                Every VenueGlide booking page is mobile-first by design. A
                customer gets the same real-time availability, add-ons and
                instant confirmation whether they're booking from their phone
                between overs, a tablet at reception, or a desktop at home —
                one responsive flow, not a cut-down mobile version bolted onto
                a desktop product.
              </p>
            </Reveal>

            <div className="booking-capability-list">
              {capabilities.map((item, idx) => (
                <Reveal
                  key={idx}
                  direction="up"
                  distance={12}
                  delay={Math.min(idx * 0.08 + 0.2, 0.5)}
                  className="booking-capability-item"
                >
                  <span className="booking-capability-check">
                    <Icon icon={LuCheck} size={12} />
                  </span>
                  {item}
                </Reveal>
              ))}
            </div>

            <Reveal direction="up" delay={0.45} className="booking-device-row">
              <span className="booking-device-chip">
                <Icon icon={LuSmartphone} size={15} /> Mobile
              </span>
              <span className="booking-device-chip">
                <Icon icon={LuTablet} size={15} /> Tablet
              </span>
              <span className="booking-device-chip">
                <Icon icon={LuMonitor} size={15} /> Desktop
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.55}>
              <MagneticButton>
                <Link className="ed-btn ed-btn--solid" to="/book-demo" data-cursor="link">
                  See It On Your Venue
                </Link>
              </MagneticButton>
            </Reveal>
          </div>

          <div className="col-lg-6">
            <Reveal direction="right" distance={32}>
              <div className="booking-mockup-frame" data-cursor="view">
                <div className="booking-mockup-chrome">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="booking-mockup-screen">
                  <div className="booking-mockup-header">
                    <h4>Court Booking</h4>
                    <p>Choose a date, time and add-ons, then confirm instantly.</p>
                  </div>

                  <div className="booking-mockup-offer">
                    <strong>20%</strong> Opening offer — off all bookings
                  </div>

                  <div className="booking-mockup-players">
                    <span>Choose how many players</span>
                    <div className="booking-mockup-stepper">
                      <button type="button" aria-label="Decrease">−</button>
                      <span>2</span>
                      <button type="button" aria-label="Increase">+</button>
                    </div>
                  </div>

                  <div className="booking-mockup-calendar">
                    <span className="booking-mockup-label">Choose a date</span>
                    <div className="booking-mockup-days">
                      {days.map((d) => (
                        <span key={d} className={d === 5 ? "is-selected" : ""}>
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="booking-mockup-times">
                    <span className="booking-mockup-label">Choose a time slot</span>
                    <div className="booking-mockup-time-grid">
                      {times.map((t) => (
                        <span key={t} className={t === "10:00" ? "is-selected" : ""}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="booking-mockup-lanes">
                    {["Court 1", "Court 2"].map((court) => (
                      <div className="booking-mockup-lane" key={court}>
                        <div className="booking-mockup-lane-head">
                          <span>{court}</span>
                          <span className="booking-mockup-price">$XX/hr</span>
                        </div>
                        <div className="booking-mockup-addons">
                          <label>
                            <input type="checkbox" readOnly checked={court === "Court 1"} />
                            Equipment hire (+$XX)
                          </label>
                          <label>
                            <input type="checkbox" readOnly />
                            Coaching add-on (+$XX)
                          </label>
                        </div>
                        <button type="button" className="booking-mockup-select">
                          Select a time
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformBookingExperience;

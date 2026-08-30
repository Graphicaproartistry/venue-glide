import React from "react";
import { LuCheck, LuUser, LuLogOut } from "react-icons/lu";
import { Icon } from "../common/Icon";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";
import "./PlatformBookingExperience.css";
import "./PlatformCustomerAccounts.css";

const accountBenefits = [
  "One profile, saved for every future booking — no retyping details",
  "A full booking history, upcoming and past, in one place",
  "Faster rebooking for returning customers and members",
  "The same account works across every booking page for that venue",
];

const bookings = [
  { title: "Court Booking", detail: "Court 2 · 90 min", date: "12/09/2026", time: "17:00 – 18:30", id: "VG-4Q1X8", status: "Upcoming" },
  { title: "Coaching Session", detail: "1-on-1 · 60 min", date: "05/09/2026", time: "10:00 – 11:00", id: "VG-N29TZ", status: "Completed" },
];

const PlatformCustomerAccounts: React.FC = () => {
  return (
    <section className="platform-section customer-accounts-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 order-lg-2">
            <span className="platform-sub-title">Customer Accounts</span>
            <MaskText
              as="h2"
              className="platform-sec-title"
              lines={["Every Customer Gets Their", "Own VenueGlide Account"]}
            />
            <Reveal direction="up" delay={0.15}>
              <p className="platform-sec-desc">
                Customers don't have to re-enter their details every time they
                book. With a VenueGlide account, they save their profile once,
                view their upcoming and past bookings in one place, and
                rebook a favourite session in a couple of clicks — from
                whichever device they're on.
              </p>
            </Reveal>

            <div className="booking-capability-list">
              {accountBenefits.map((item, idx) => (
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
          </div>

          <div className="col-lg-6 order-lg-1">
            <Reveal direction="left" distance={32}>
              <div className="booking-mockup-frame" data-cursor="view">
                <div className="booking-mockup-chrome">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="booking-mockup-screen account-mockup-screen">
                  <div className="account-mockup-profile">
                    <div className="account-mockup-profile-head">
                      <span>My Profile</span>
                      <span className="account-mockup-edit">Edit</span>
                    </div>
                    <div className="account-mockup-field">
                      <span>Name</span>
                      <strong>Alex Morgan</strong>
                    </div>
                    <div className="account-mockup-field">
                      <span>Email</span>
                      <strong>alex@example.com</strong>
                    </div>
                    <div className="account-mockup-field">
                      <span>Phone</span>
                      <strong>04XX XXX XXX</strong>
                    </div>
                    <button type="button" className="account-mockup-signout">
                      <Icon icon={LuLogOut} size={13} /> Sign Out
                    </button>
                  </div>

                  <div className="account-mockup-bookings">
                    <div className="account-mockup-bookings-head">
                      <h4>My Bookings</h4>
                      <div className="account-mockup-tabs">
                        <span className="is-active">Upcoming</span>
                        <span>Past History</span>
                      </div>
                    </div>

                    {bookings.map((b) => (
                      <div className="account-mockup-booking-card" key={b.id}>
                        <div className="account-mockup-booking-top">
                          <span>
                            <Icon icon={LuUser} size={13} /> {b.title}
                          </span>
                          <span
                            className={
                              b.status === "Upcoming"
                                ? "account-mockup-status is-upcoming"
                                : "account-mockup-status"
                            }
                          >
                            {b.status}
                          </span>
                        </div>
                        <p>{b.detail}</p>
                        <div className="account-mockup-booking-meta">
                          <span>{b.date}</span>
                          <span>{b.time}</span>
                          <span>{b.id}</span>
                        </div>
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

export default PlatformCustomerAccounts;

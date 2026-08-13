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
    <section className="about pos-rel pb-140">

      <div className="container">
        {/* ===== Top Scrolling Images ===== */}

        {/* ===== Title Section ===== */}
        <div className="sec-title sec-title-center about-sec-title about-sec-title-two mt-45 wow fadeInUp" data-wow-duration="600ms">
          {/* <span className="sub-title mb-10">Who We are?</span> */}

          <h2 className="title">
            Powering the
            <span><img src={gif1} alt="gif" /></span>
            Future
            <span><img src={gif2} alt="gif" /></span>
            of Sports
            <span><img src={gif3} alt="gif" /></span>
            Venue Management
          </h2>

          <p className="content">
            VenueGlide is an Australian technology company dedicated to transforming the way sports venues operate. We build intelligent, cloud-based software that helps sports facilities simplify operations, increase revenue and deliver exceptional customer experiences. Our flagship platform, VenueGlide OS, is a complete Sports Venue Management Software designed specifically for indoor sports centres, padel clubs, tennis clubs, football centres, cricket venues, multi-sport facilities and recreation centres across Australia. Rather than relying on multiple disconnected systems, VenueGlide OS brings everything together into one powerful platform—bookings, memberships, customer management, coaching, payments, point of sale, reporting and business intelligence. We believe venue management should be simple, connected and built for growth.
          </p>
        </div>

        {/* ===== Feature Boxes ===== */}
        <div className="row mt-40">
          {/* 1 */}
          <div className="col-lg-6 col-md-6 mt-30">
            <div className="xb-feature-item wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <img src={featureIcon1} alt="icon" />
                </span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">Simplifying Sports Venue Operations Across Australia</h2>
                  <p className="xb-item--content">
                    Our mission is to empower sports venue owners and operators with technology that reduces administration, improves operational efficiency and creates better experiences for members, players and staff. Every sports venue faces unique challenges—from managing court availability and memberships to handling payments, coaching schedules and customer communication. VenueGlide OS is designed to solve those challenges through intelligent automation, real-time reporting and an intuitive user experience that keeps your entire business connected.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="col-lg-6 col-md-6 mt-30">
            <div className="xb-feature-item wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <img src={featureIcon2} alt="icon" />
                </span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">Building the Operating System for Modern Sports Venues</h2>
                  <p className="xb-item--content">
                    We envision a future where every sports venue operates from one intelligent platform instead of multiple disconnected software systems. Our goal is to become Australia's leading Sports Venue Management Platform, helping venues of every size streamline operations, make data-driven decisions and grow sustainably. By combining automation, cloud technology and artificial intelligence, VenueGlide is redefining how sports businesses operate in an increasingly digital world.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}

        </div>
      </div>

      {/* Background */}
      <div className="about-bg">
        <img src={aboutBg} alt="background" />
      </div>
    </section>
  );
};

export default AboutSection;

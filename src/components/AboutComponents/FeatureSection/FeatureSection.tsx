import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "../../motion/Reveal";
import MaskText from "../../motion/MaskText";

// Import your background + icons
import bgImage from "../../../images/bg/feature-bg.jpg";
import icon01 from "../../../images/icon/fea-small-icon01.svg";
import icon04 from "../../../images/icon/fea-small-icon04.svg";
import icon02 from "../../../images/icon/fea-small-icon02.svg";
import icon06 from "../../../images/icon/fea-small-icon06.svg";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const FeatureSection: React.FC = () => {

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Reset background
    gsap.set(el, {
      backgroundPosition: "center 0px",
      backgroundSize: "cover",
    });

    // GSAP Parallax Effect
    gsap.to(el, {
      backgroundPositionY: "200px", // how much parallax to move
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",   // start when section enters screen
        end: "bottom top",     // end when section leaves screen
        scrub: 1,              // smooth parallax scroll
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="feature-section parallax-section"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="xb-feature-content">
              <div className="sec-title sec-title-center fea-sec-title mb-35">
                <MaskText as="h2" className="title title-line_height" lines={["Customer-First Innovation"]} />
                <Reveal direction="up" delay={0.1}>
                  <span className=" mb-20">Every feature within VenueGlide OS is developed with feedback from sports venue owners, managers and operational teams.
                    We understand that running a sports venue requires balancing customer satisfaction with operational efficiency.
                    That's why our development philosophy focuses on:</span>
                </Reveal>
              </div>

              <div className="row g-4 align-items-stretch mt-3">

                {/* Item 1: Simplicity */}
                <Reveal direction="up" delay={0.15} className="col-lg-6 col-md-6 d-flex">
                  <div 
                    className="p-4 rounded-4 w-100 d-flex align-items-center gap-3"
                    style={{
                      background: "rgba(13, 20, 36, 0.75)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(0, 212, 255, 0.25)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
                      minHeight: "140px",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-center p-3 rounded-3 flex-shrink-0" style={{ background: "rgba(0, 212, 255, 0.12)", border: "1px solid rgba(0, 212, 255, 0.25)", width: "52px", height: "52px" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ color: "#ffffff", fontSize: "20px", fontWeight: 700, marginBottom: "6px" }}>
                        Simplicity
                      </h3>
                      <p style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "13.5px", lineHeight: "1.5", margin: 0 }}>
                        Technology should reduce complexity, not create it.
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Item 2: Reliability */}
                <Reveal direction="up" delay={0.2} className="col-lg-6 col-md-6 d-flex">
                  <div 
                    className="p-4 rounded-4 w-100 d-flex align-items-center gap-3"
                    style={{
                      background: "rgba(13, 20, 36, 0.75)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(0, 212, 255, 0.25)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
                      minHeight: "140px",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-center p-3 rounded-3 flex-shrink-0" style={{ background: "rgba(0, 212, 255, 0.12)", border: "1px solid rgba(0, 212, 255, 0.25)", width: "52px", height: "52px" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <polyline points="9 12 11 14 15 10" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ color: "#ffffff", fontSize: "20px", fontWeight: 700, marginBottom: "6px" }}>
                        Reliability
                      </h3>
                      <p style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "13.5px", lineHeight: "1.5", margin: 0 }}>
                        Your venue operates every day. Your software should too.
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Item 3: Automation */}
                <Reveal direction="up" delay={0.25} className="col-lg-6 col-md-6 d-flex">
                  <div 
                    className="p-4 rounded-4 w-100 d-flex align-items-center gap-3"
                    style={{
                      background: "rgba(13, 20, 36, 0.75)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(0, 212, 255, 0.25)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
                      minHeight: "140px",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-center p-3 rounded-3 flex-shrink-0" style={{ background: "rgba(0, 212, 255, 0.12)", border: "1px solid rgba(0, 212, 255, 0.25)", width: "52px", height: "52px" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ color: "#ffffff", fontSize: "20px", fontWeight: 700, marginBottom: "6px" }}>
                        Automation
                      </h3>
                      <p style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "13.5px", lineHeight: "1.5", margin: 0 }}>
                        Reduce repetitive administrative tasks through intelligent workflows.
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Item 4: Scalability */}
                <Reveal direction="up" delay={0.3} className="col-lg-6 col-md-6 d-flex">
                  <div 
                    className="p-4 rounded-4 w-100 d-flex align-items-center gap-3"
                    style={{
                      background: "rgba(13, 20, 36, 0.75)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(0, 212, 255, 0.25)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
                      minHeight: "140px",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-center p-3 rounded-3 flex-shrink-0" style={{ background: "rgba(0, 212, 255, 0.12)", border: "1px solid rgba(0, 212, 255, 0.25)", width: "52px", height: "52px" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ color: "#ffffff", fontSize: "20px", fontWeight: 700, marginBottom: "6px" }}>
                        Scalability
                      </h3>
                      <p style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "13.5px", lineHeight: "1.5", margin: 0 }}>
                        Support venues of all sizes, from independent clubs to enterprise organisations.
                      </p>
                    </div>
                  </div>
                </Reveal>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeatureSection;

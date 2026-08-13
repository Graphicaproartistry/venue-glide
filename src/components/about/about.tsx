import React, { useEffect } from "react";
import aboutBg from "../../images/bg/about-bg.png";

const AboutSection: React.FC = () => {
  useEffect(() => {
    const bgEl = document.querySelector<HTMLElement>(".xb-about-img-wrap");
    if (bgEl) bgEl.style.backgroundImage = `url(${aboutBg})`;
  }, []);

  return (
    <section className="about pt-140">
      {/* <div className="container">
        <div className="sec-title about-sec-title mb-75">
          <span className="sub-title">Who We are?</span>
          <h2 className="title">
            We helping
            <span>
              <img src={gif1} alt="animation" />
            </span>{" "}
            grow businesses and
            <span>
              <img src={gif2} alt="animation" />
            </span>
            scale with smart, data-driven AI agency{" "}
            <span>
              <img src={gif3} alt="animation" />
            </span>
          </h2>
        </div>
      </div> */}

      {/* ✅ One single marquee with all 3 images */}
      {/* <div className="xb-about-img-wrap bg_img wow">
        <Marquee speed={40} gradient={false} pauseOnHover={false}>
          {aboutImages.map((img, idx) => (
            <div key={idx} className="xb-about-img-item img-hove-effect">
              <div className="xb-img">
                <Link to="/service-details">
                  <img src={img} alt={`about-${idx + 1}`} />
                </Link>
              </div>
            </div>
          ))}
        </Marquee>
      </div> */}
    </section>
  );
};

export default AboutSection;

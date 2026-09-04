import React from "react";
import { Link } from "react-router-dom";
import { LuMapPin, LuMail } from "react-icons/lu";
import { Icon } from "../common/Icon";

// Image imports
import footerBg from "../../images/bg/footer-bg.png";

const Footer: React.FC = () => {
  const arrowIcon = (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5.06641"
        y="19.2783"
        width="20.5712"
        height="2.61221"
        transform="rotate(-40.2798 5.06641 19.2783)"
        fill="white"
      />
      <rect
        x="7.97144"
        y="6.54443"
        width="2.61221"
        height="2.61221"
        transform="rotate(-40.2798 7.97144 6.54443)"
        fill="white"
      />
      <rect
        x="11.6528"
        y="6.84814"
        width="2.61221"
        height="2.61221"
        transform="rotate(-40.2798 11.6528 6.84814)"
        fill="white"
      />
      <rect
        x="15.3345"
        y="7.15186"
        width="2.61221"
        height="2.61221"
        transform="rotate(-40.2798 15.3345 7.15186)"
        fill="white"
      />
      <rect
        x="18.7124"
        y="11.1372"
        width="2.61221"
        height="2.61221"
        transform="rotate(-40.2798 18.7124 11.1372)"
        fill="white"
      />
      <rect
        x="18.4089"
        y="14.8198"
        width="2.61221"
        height="2.61221"
        transform="rotate(-40.2798 18.4089 14.8198)"
        fill="white"
      />
      <rect
        x="18.1045"
        y="18.501"
        width="2.61221"
        height="2.61221"
        transform="rotate(-40.2798 18.1045 18.501)"
        fill="white"
      />
    </svg>
  );

  const socials = [
    {
      icon: <i className="fa-brands fa-facebook"></i>,
      name: "Facebook",
      url: "https://www.facebook.com/",
    },
    {
      icon: <i className="fa-brands fa-linkedin"></i>,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/143606390/",
    },
  ];

  return (
    <footer
      className="footer footer-style-one bg_img"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="xb-footer-wrap">
        {/* Footer Navigation */}
        <div className="xb-footer-nav">
          <div className="xb-footer-nav-item">
            <span className="sub-title">Venue Glide</span>
            <h2 className="title">
              <Link to="/">Home</Link>
            </h2>
          </div>
          <div className="xb-footer-nav-item">
            <span className="sub-title">Who we are?</span>
            <h2 className="title">
              <Link to="/about">About us</Link>
            </h2>
          </div>
          <div className="xb-footer-nav-item">
            <span className="sub-title">How we deliver</span>
            <h2 className="title">
              <Link to="/contact">Contact us</Link>
            </h2>
          </div>
          <div className="xb-footer-nav-item">
            <span className="sub-title">What we're good at?</span>
            <h2 className="title">
              <Link to="/solutions">Solutions</Link>
            </h2>
          </div>
          <div className="xb-footer-nav-item">
            <span className="sub-title">What we serve</span>
            <h2 className="title">
              <Link to="/industries">Industries</Link>
            </h2>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="xb-social-media-wrap">
          {socials.map((social, idx) => (
            <div className="xb-social-media-item ul_li_between" key={idx}>
              <div className="xb-item--holder ul_li">
                <div className="xb-item--icon">{social.icon}</div>
                <span className="xb-item--name">{social.name}</span>
              </div>

              <span className="xb-item--arrow">{arrowIcon}</span>

              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="xb-overlay"
              ></a>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="xb-footer-bottom">
          <div className="contact-item">
            <Icon icon={LuMapPin} size={18} style={{ color: "#00D4FF", marginRight: "8px" }} />
            <span className="contact-method">12 Dimboola Road, Broadmeadows, Melbourne VIC, Australia</span>
          </div>

          <div className="contact-item">
            <a href="tel:+61405207904">
              <Icon icon={LuMail} size={18} style={{ color: "#00D4FF", marginRight: "8px" }} />
            </a>
            <a className="contact-method" href="tel:+61405207904">
              +61 405 207 904
            </a>
          </div>

          <div className="contact-item">
            <a href="mailto:hello@venueglide.com.au">
              <Icon icon={LuMail} size={18} style={{ color: "#00D4FF", marginRight: "8px" }} />
            </a>
            <a className="contact-method" href="mailto:hello@venueglide.com.au">
              hello@venueglide.com.au
            </a>
          </div>

          <div className="contact-item copyright-item">
            <p>
              Copyright © 2026 <Link to="/">Venue Glide</Link>, All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

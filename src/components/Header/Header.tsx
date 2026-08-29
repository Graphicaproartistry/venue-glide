import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../images/logo/VenueGlide-logo-white-text.png";
import { LuMenu, LuX } from "react-icons/lu";
import { Icon } from "../common/Icon";
import MagneticButton from "../motion/MagneticButton";
import "./nav.css";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Platform", to: "/platform" },
  { label: "Solutions", to: "/solutions" },
  { label: "Industries", to: "/industries" },
  { label: "Pricing", to: "/pricing" },
  { label: "Book Demo", to: "/book-demo" },
  { label: "Contact", to: "/contact" },
];

/**
 * Premium minimal nav: transparent over the hero, solidifies on scroll,
 * thin underline-on-hover links instead of the legacy pill buttons. Built
 * as its own self-contained component/stylesheet (nav.css) rather than
 * patching the old `.header-style--one` rules in main.css.
 */
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <header className={`ed-nav ${isScrolled ? "is-scrolled" : ""}`}>
        <Link to="/" className="ed-nav-logo" onClick={scrollTop}>
          <img src={logo} alt="VenueGlide" />
        </Link>

        <nav>
          <ul className="ed-nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={scrollTop}
                  className={location.pathname === link.to ? "is-active" : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MagneticButton>
          <Link className="ed-nav-cta" to="/contact" onClick={scrollTop} data-cursor="link">
            Purchase Now
          </Link>
        </MagneticButton>

        <button
          className="ed-nav-burger"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <Icon icon={LuMenu} size={24} />
        </button>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="ed-mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <button
              className="ed-mobile-menu-close"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <Icon icon={LuX} size={26} />
            </button>

            <ul className="ed-mobile-menu-list">
              {NAV_LINKS.map((link, idx) => (
                <motion.li
                  key={link.to}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "100%" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + idx * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link to={link.to} onClick={scrollTop}>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="ed-mobile-menu-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.55 }}
            >
              <Link className="ed-btn ed-btn--solid" to="/contact" onClick={scrollTop}>
                Purchase Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

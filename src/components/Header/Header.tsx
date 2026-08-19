import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo/VenueGlide-logo-white-text.png";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Scroll up → show sticky smoothly
      if (currentScroll < lastScrollY.current && currentScroll > 100) {
        setIsSticky(true);
        setTimeout(() => setIsVisible(true), 10); // delay for smooth entrance
      }
      // Scroll down → hide sticky instantly
      else if (currentScroll > lastScrollY.current) {
        setIsVisible(false);
        setTimeout(() => setIsSticky(false), 100); // small delay for hide
      }

      // Reset if near top
      if (currentScroll <= 100) {
        setIsSticky(false);
        setIsVisible(false);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const handleSubmit = (e: React.FormEvent) => e.preventDefault();

  return (
    <header
      id="xb-header-area"
      className="header-area header-style--one header-transparent is-sticky"
    >
      <div
        className={`xb-header xb-sticky-stt ${isSticky ? "xb-header-area-sticky" : ""
          } ${isVisible ? "xb-header-fixed" : "xb-header-hidden"}`}
      >
        <div className="container mxw-1650">
          <div className="header__wrap ul_li_between">
            {/* Logo */}
            <div className="xb-header-logo">
              <Link to="/" className="logo1" onClick={handleClick}>
                <img src={logo} alt="Logo" width={200} />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="main-menu__wrap navbar navbar-expand-lg p-0">
              <nav className="main-menu collapse navbar-collapse">
                <ul>

                  <li>
                    <Link to="/" onClick={handleClick}>
                      <span>Home</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/about" onClick={handleClick}>
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/platform" onClick={handleClick}>
                      <span>Platform</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions" onClick={handleClick}>
                      <span>Solutions</span>
                    </Link>
                  </li>

                  {/* MegaMenu */}
                  {/* <li className="menu-item-has-children megamenu">
                    <Link to="#" onClick={handleClick}>
                      <span>Pages</span>
                    </Link>
                    <MegaMenu1 />
                  </li>

                  <li className="menu-item-has-children megamenu">
                    <Link to="#" onClick={handleClick}>
                      <span>Services</span>
                    </Link>
                    <MegaMenuServices />
                  </li> */}

                  <li>
                    <Link to="/industries" onClick={handleClick}>
                      <span>Industries</span>
                    </Link>
                  </li>


                  <li>
                    <Link to="/pricing" onClick={handleClick}>
                      <span>Pricing</span>
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="#" onClick={handleClick}>
                      <span>Resources</span>
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/book-demo" onClick={handleClick}>
                      <span>Book Demo</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={handleClick}>
                      <span>Contact</span>
                    </Link>
                  </li>

                </ul>
              </nav>
            </div>

            {/* Button */}
            <div className="header-btn">
              <Link to="/contact" className="thm-btn" onClick={handleClick}>
                Purchase Now
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="header-bar-mobile side-menu d-lg-none">
              <button
                className="xb-nav-mobile"
                onClick={() => setMobileActive(!mobileActive)}
              >
                <i className="far fa-bars"></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="xb-header-wrap">
            <div className={`xb-header-menu ${mobileActive ? "active" : ""}`}>
              <div className="xb-header-menu-scroll">
                <div
                  className="xb-menu-close xb-hide-xl xb-close"
                  onClick={() => setMobileActive(false)}
                ></div>

                <div className="xb-logo-mobile xb-hide-xl">
                  <Link to="/" rel="home">
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>

                <div className="xb-header-mobile-search xb-hide-xl">
                  <form role="search" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Search..."
                      name="s"
                      className="search-field"
                    />
                    <button className="search-submit" type="submit">
                      <i className="far fa-search"></i>
                    </button>
                  </form>
                </div>

                <nav className="xb-header-nav">
                  <MobileMenu />
                </nav>
              </div>
            </div>
            <div className="xb-header-menu-backdrop"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

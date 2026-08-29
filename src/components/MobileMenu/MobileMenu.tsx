import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./style.css";

interface MenuItem {
  id: number;
  title: string;
  link: string;
  submenu?: MenuItem[];
}

const menus: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",

  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Platform",
    link: "/platform",

  },
  {
    id: 4,
    title: "Solutions",
    link: "/solutions",

  },
  {
    id: 5,
    title: "Industries",
    link: "/industries",
  },
  {
    id: 6,
    title: "Pricing",
    link: "/pricing",
  },
  {
    id: 7,
    title: "Resources",
    link: "#",
  },
  {
    id: 8,
    title: "Company",
    link: "#",
  },
  {
    id: 9,
    title: "Book Demo",
    link: "/book-demo",
  },

];

const MobileMenu: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <ul className="responsivemenu">
        {menus.map((menu) => (
          <li key={menu.id} className={openId === menu.id ? "active" : ""}>
            {menu.submenu ? (
              <Fragment>
                <p onClick={() => handleToggle(menu.id)}>
                  {menu.title}
                  <i
                    className={
                      openId === menu.id ? "fa fa-angle-up" : "fa fa-angle-down"
                    }
                  ></i>
                </p>

                <AnimatePresence initial={false}>
                  {openId === menu.id && (
                    <motion.ul
                      className="subMenu"
                      style={{ overflow: "hidden" }}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {menu.submenu.map((sub) => (
                        <li key={sub.id}>
                          <Link to={sub.link} onClick={handleClick}>
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </Fragment>
            ) : (
              <Link to={menu.link} onClick={handleClick}>
                {menu.title}
              </Link>
            )}
          </li>
        ))}
        <div className="header-btn">
          <Link to="/contact" className="thm-btn" onClick={handleClick}>
            Purchase Now
          </Link>
        </div>
      </ul>

    </>
  );
};

export default MobileMenu;

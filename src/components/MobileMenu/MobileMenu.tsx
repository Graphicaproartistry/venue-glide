import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
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
    link: "#",
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
    link: "#",
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

                {/* MUI Collapse for smooth animation */}
                <Collapse in={openId === menu.id} timeout="auto" unmountOnExit>
                  <ul className="subMenu">
                    {menu.submenu.map((sub) => (
                      <li key={sub.id}>
                        <Link to={sub.link} onClick={handleClick}>
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Collapse>
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

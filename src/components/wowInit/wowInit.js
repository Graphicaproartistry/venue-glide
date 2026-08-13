import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import WOW from "wowjs";

const WowInit = () => {
  const location = useLocation();

  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
    window.dispatchEvent(new Event("scroll"));
    window.dispatchEvent(new Event("resize"));

    const timer = setTimeout(() => {
      wow.init();
      window.dispatchEvent(new Event("scroll"));
    }, 100);

    return () => {
      clearTimeout(timer);
      wow.sync();
    };
  }, [location.pathname]);

  return null;
};

export default WowInit;

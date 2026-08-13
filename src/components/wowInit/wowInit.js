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

    const timer = setTimeout(() => {
      wow.init();
    }, 100);

    return () => {
      clearTimeout(timer);
      wow.sync();
    };
  }, [location.pathname]);

  return null;
};

export default WowInit;

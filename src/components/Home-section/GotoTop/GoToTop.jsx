import React, { useEffect, useState } from "react";
import { GoArrowUp } from "react-icons/go";
import './gtop.css'
const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 300;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div div className="gotop">
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}> 
          <GoArrowUp className="top-btn--icon" />
          <span className="tooltiptext">Go to Top</span> 
        </div>
      )}
    </div>
  );
};

export default GoToTop;
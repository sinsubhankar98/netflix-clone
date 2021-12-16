import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img className="nav__logo" src="logo.png" alt="" />
        <img className="nav__avatar" src="smiley.jpg" alt="" />
      </div>
    </div>
  );
}

export default Nav;

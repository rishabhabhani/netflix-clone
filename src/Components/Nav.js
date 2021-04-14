import React, { useEffect, useState } from "react";
import "../Assets/Nav.css";
import NetflixLogo from "../Assets/img/netflix-logo.png";
import Avatar from "../Assets/img/user_avatar.png";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={NetflixLogo} alt="netflix logo" />
      <img className="nav__avatar" src={Avatar} alt="avatar" />
    </div>
  );
}

export default Nav;

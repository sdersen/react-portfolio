import React from "react";
import "./navbar.scss";
import { color } from "../../colors";


const NavbarLinks = () => {
  return (
    <div className="navbar-links">
      <div className="link-container hidden">
        <a href="/contact" style= {{color: color}}>Contact</a>
        <a href="/about" style= {{color: color}}>About</a>
        <a href="/" style= {{color: color}}>Home</a>
      </div>
    </div>
  );
};

export default NavbarLinks;

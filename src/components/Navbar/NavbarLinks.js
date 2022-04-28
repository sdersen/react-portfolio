import React from "react";
import "./navbar.scss";

const NavbarLinks = () => {
  return (
    <div className="navbar-links">
      <div className="link-container hidden">
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
        <a href="/">Home</a>
      </div>
    </div>
  );
};

export default NavbarLinks;

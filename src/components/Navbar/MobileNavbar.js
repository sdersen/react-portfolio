import React from "react";
import "./navbar.scss";
import NavbarLinks from "./NavbarLinks";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { color } from "../../colors";

import { useState } from "react";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const hamburger = (
    <FiMenu
      className="hamburger-icon"
      size="35px"
      color={color}
      onClick={() => setOpen(!open)}
    />
  );
  const close = (
    <FiX
      className="hamburger-icon"
      size="35px"
      color={color}
      onClick={() => setOpen(!open)}
    />
  );
  return (
    <div className="mobile-navbar">
      <div className="profile-hamburger-icons">{open ? close : hamburger}</div>
      {open && <NavbarLinks />}
    </div>
  );
};

export default MobileNavbar;

import React from "react";
import { color } from "../colors";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import "./contact.scss";
import { navigate } from "@gatsbyjs/reach-router";

const Contact = (props) => {
  return (
    <div className="contact">
      <h1 style={{ color: color }}>Contact</h1>
      <h3>Sofia Dersen</h3>
      <h4>sofia_dersen@hotmail.com</h4>
      <div className="social-links">
        <BsGithub
          onClick={() => navigate("https://github.com/sdersen")}
          className="social-icon"
          style={{ fill: color }}
          size="40px"
          href="https://github.com/sdersen"
        />
        <BsLinkedin
          onClick={() =>
            navigate("https://www.linkedin.com/in/sofia-ders%C3%A9n-020a1325/")
          }
          className="social-icon"
          style={{ fill: color }}
          size="40px"
        />
      </div>
    </div>
  );
};

export default Contact;

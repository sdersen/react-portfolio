import "./footer.scss";
import { color } from "../../colors";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { navigate } from "@gatsbyjs/reach-router";


function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: color }}>
      <div className="social-links">
        <BsGithub className="social-icon" onClick={() => navigate("https://github.com/sdersen") } size="40px"/>
        <BsLinkedin className="social-icon" onClick={() => navigate("https://www.linkedin.com/in/sofia-ders%C3%A9n-020a1325/") } size="40px"/>
      </div>
      <a href="mailto:sofia_dersen@hotmail.com">sofia_dersen@hotmail.com</a>
    </footer>
  );
}

export default Footer;

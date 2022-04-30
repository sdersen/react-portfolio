import "./footer.scss";
import { color } from "../../colors";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: color }}>
      <div className="social-links">
        <BsGithub className="social-icon" size="40px" href="https://github.com/sdersen"/>
        <BsLinkedin className="social-icon"  size="40px" href="https://www.linkedin.com/in/sofia-ders%C3%A9n-020a1325/"/>
      </div>
      <a href="mailto:sofia_dersen@hotmail.com">sofia_dersen@hotmail.com</a>
    </footer>
  );
}

export default Footer;

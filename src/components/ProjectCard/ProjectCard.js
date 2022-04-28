import "./projectCard.scss";
import { MdKeyboardArrowRight } from "react-icons/md";

function ProjectCard({ title, href, src, desc, tags }) {
  return (
    <div className="card" href={href}>
      <div className="name-container">
        <h4 className="card-title">{title}</h4>
      </div>
      <h5 className="card-desc">{desc}</h5>
      <p>{tags}</p>
      <a href={href}>Read more <MdKeyboardArrowRight
      size="30px"
      /> </a>
    </div>
  );
}

export default ProjectCard;

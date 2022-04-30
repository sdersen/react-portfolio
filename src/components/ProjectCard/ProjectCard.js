import "./projectCard.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import { color } from "../../colors";


function ProjectCard({ title, href, src, desc, tags }) {

  const borderColor = `${color} solid 2px`;
  return (
    <div className="card" style= {{border: borderColor}}>
      <div className="name-container">
        <h3 className="card-title" style= {{color: color}}>{title}</h3>
      </div>
      <h3 className="card-desc">{desc}</h3>
      <p>{tags}</p>
      <a href={href} style= {{color: color}}>Read more <MdKeyboardArrowRight
      size="30px"
      fill={color}
      /> </a>
    </div>
  );
}

export default ProjectCard;

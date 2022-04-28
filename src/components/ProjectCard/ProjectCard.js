import "./projectCard.scss";

function ProjectCard({ title, href, src, desc }) {
  return (
    <div className="card" href={href}>
      <div className="name-container">
        <h4>{title}</h4>
      </div>
      <h5>{desc}</h5>
      <a href={href}>Read more</a>
    </div>
  );
}

export default ProjectCard;

import React, { useState } from "react";
import client from "../contentful";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import "./home.scss";
import { color } from "../colors";

const Home = () => {
  const [posts, setPosts] = useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: "project",
      })
      .then((entries) => {
        setPosts(entries.items);
      });
  }, []);
  console.log(posts);
  return (
    <div>
      <h1>SOFIA DERSÈN</h1>
      <h2>Web Developer</h2>
      <section className="header">
        <div className="right-header" style={{ backgroundColor: color }}></div>
      </section>
      <section style={{ maxWidth:"1440px"}}>
        <h3 className="projects-text" style={{ color: color }}>
          Projects
        </h3>
        <div className="projects">
          {posts &&
            posts.map((post, i) => {
              return (
                <div key={i}>
                  <ProjectCard
                    className="card"
                    title={post.fields.title}
                    href={`posts/${post.fields.slug}`}
                    desc={post.fields.shortDescription}
                    tags={post.fields.tags}
                  />
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default Home;

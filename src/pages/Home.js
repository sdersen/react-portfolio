import React, { useState } from "react";
import client from "../contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
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

  return (
    <div>
      <h1>SOFIA DERSÈN</h1>
      <h2>Web Developer</h2>

      <section className="header">
        <div className="right-header" style={{backgroundColor: color}}></div>
        {/* <img
          src="https://source.unsplash.com/_UeY8aTI6d0"
          alt="hands writing on a silver laptop"
        ></img> */}
      </section>
      <section>
        <h3 className="projects-text" style= {{color: color}}>Projects</h3>
        <div className="projects">
          {posts &&
            posts.map((post, i) => {
              return (
                <div key={i}>
                  <ProjectCard
                    className="card"
                    title={post.fields.title}
                    href={`posts/${post.fields.slug}`}
                    desc={documentToReactComponents(
                      post.fields.shortDescription
                    )}
                    tags={documentToReactComponents(post.fields.tags)}
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

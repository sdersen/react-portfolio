import React, { useState } from "react";
import client from "../contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import ProjectCard from "../components/ProjectCard/ProjectCard";
import "./home.scss";

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
      <h1>Sofia Dersén - Web Developer</h1>
      <section className="header">
        <div className="left-container"></div>
        <img
          src="https://source.unsplash.com/_UeY8aTI6d0"
          alt="hands writing on a silver laptop"
        ></img>
      </section>
      <section className="projects">
        {posts &&
          posts.map((post, i) => {
            return (
              <div key={i}>
                <ProjectCard
                  title={post.fields.title}
                  href={`posts/${post.fields.slug}`}
                  desc={documentToReactComponents(post.fields.shortDescription)}
                />
                {/* <img
                alt={post.fields.image.fields.description}
                src={post.fields.image.fields.file.url}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                }}
              /> */}
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default Home;

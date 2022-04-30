import { React, useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "../contentful";
import "./singelpost.scss";
import { color } from "../colors";


const SinglePost = (props) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    client
      .getEntries({
        content_type: "project",
        "fields.slug": props.slug,
      })
      .then((entries) => {
        setPost(entries.items[0]);
      });
  }, [props.slug]);
  console.log(post);
  return (
    <div className="single-post">
      <h1 className="title" style= {{color: color}}>{post && post.fields.title}</h1>
      <img
        src={post && post.fields.image2.fields.file.url}
        alt={post && post.fields.image2.fields.Description}
      />
      <div className="links">
        {post && documentToReactComponents(post.fields.liveLink)}
        {post && documentToReactComponents(post.fields.github)}
      </div>
      {post && documentToReactComponents(post.fields.shortDescription)}
      {post && documentToReactComponents(post.fields.tags)}
      {post && documentToReactComponents(post.fields.descriptionRich)}
    </div>
  );
};

export default SinglePost;

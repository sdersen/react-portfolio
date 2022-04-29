import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "../contentful";
import "./singelpost.scss";

const SinglePost = (props) => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: "project",
        "fields.slug": props.slug,
      })
      .then((entries) => {
        setPost(entries.items[0]);
      });
  }, [props.slug]);

  return (
    <div className="single-post">
      <img
        src={post && post.fields.image2.fields.file.url}
        alt={post && post.fields.image2.fields.Description}
      />
      <h1 className="title">{post && post.fields.title}</h1>
      <div className="links">
        {post && documentToReactComponents(post.fields.liveLink)}
        {post && documentToReactComponents(post.fields.github)}
      </div>
      {post && documentToReactComponents(post.fields.tags)}
      {post && documentToReactComponents(post.fields.shortDescription)}
      {post && documentToReactComponents(post.fields.descriptionRich)}
    </div>
  );
};

export default SinglePost;

import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  return (
    <div style={{ padding: "20px" }}>
      <h2>Blog Post</h2>
      <p>Viewing post with ID: {id}</p>
      <p>This is a sample blog post content for post {id}.</p>
    </div>
  );
};

export default BlogPost;

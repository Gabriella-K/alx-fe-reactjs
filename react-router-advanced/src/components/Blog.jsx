import React from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { postId } = useParams();
  return (
    <div style={{ padding: "20px" }}>
      <h2>Blog Post</h2>
      <p>Viewing post with ID: {postId}</p>
      <p>This is a sample blog post content for post {postId}.</p>
    </div>
  );
};

export default Blog;

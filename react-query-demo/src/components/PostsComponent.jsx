import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
        Error: {error.message}
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "50px auto", padding: "20px" }}>
      <h2>Posts from JSONPlaceholder</h2>
      <button
        onClick={() => refetch()}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Refetch Posts
      </button>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {data.map((post) => (
          <li
            key={post.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;

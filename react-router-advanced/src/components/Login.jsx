import React from "react";

const Login = ({ setIsAuthenticated }) => {
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Login</h2>
      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Log In
      </button>
    </div>
  );
};

export default Login;

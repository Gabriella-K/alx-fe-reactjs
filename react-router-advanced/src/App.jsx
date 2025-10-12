import "./App.css";
import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <nav
        style={{
          padding: "10px",
          backgroundColor: "#f8f9fa",
          marginBottom: "20px",
        }}
      >
        <NavLink
          to="/"
          style={({ isActive }) => ({
            marginRight: "10px",
            textDecoration: isActive ? "underline" : "none",
            color: isActive ? "#007bff" : "black",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          style={({ isActive }) => ({
            marginRight: "10px",
            textDecoration: isActive ? "underline" : "none",
            color: isActive ? "#007bff" : "black",
          })}
        >
          Profile
        </NavLink>
        <NavLink
          to="/blog/1"
          style={({ isActive }) => ({
            marginRight: "10px",
            textDecoration: isActive ? "underline" : "none",
            color: isActive ? "#007bff" : "black",
          })}
        >
          BlogPost
        </NavLink>
        <NavLink
          to="/login"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
            color: isActive ? "#007bff" : "black",
          })}
        >
          {isAuthenticated ? "Logged In" : "Login"}
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BrowserRouter />
    </>
  );
}

export default App;

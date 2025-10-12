import React from "react";
import { Routes, Route, NavLink, Outlet } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Profile</h2>
      <nav style={{ marginBottom: "20px" }}>
        <NavLink
          to="details"
          style={({ isActive }) => ({
            marginRight: "10px",
            textDecoration: isActive ? "underline" : "none",
            color: isActive ? "#007bff" : "black",
          })}
        >
          Details
        </NavLink>
        <NavLink
          to="settings"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
            color: isActive ? "#007bff" : "black",
          })}
        >
          Settings
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Profile;

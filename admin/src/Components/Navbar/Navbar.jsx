import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import navProfile from "../../assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        style={{ width: "160px", height: "auto" }}
        className="nav-logo"
        src={logo}
        alt=""
      />
      <h1>Admin Panel</h1>
    </div>
  );
};

export default Navbar;

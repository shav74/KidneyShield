import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>Add Request</p>
        </div>
      </Link>
      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>Live Requests</p>
        </div>
      </Link>
      <Link to={"/addarticle"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>Add Article</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;

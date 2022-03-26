import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img
          className="header-logo-image"
          src={props.logo}
          crossOrigin="anonymous"
          alt="EC_Logo"
        ></img>
        <h4>Engineer's Cradle</h4>
      </div>
      <nav className="nav">
        <Link to="/table">Task-2</Link>
      </nav>
    </div>
  );
};

export default Header;

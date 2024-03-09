import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/contact" style={linkStyle}>
            Contact
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/users" style={linkStyle}>
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// Inline styles
const navStyle = {
  backgroundColor: "#333",
  padding: "10px",
};

const ulStyle = {
  listStyleType: "none",
  margin: 0,
  padding: 0,
};

const liStyle = {
  display: "inline",
  marginRight: "10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

export default Navbar;

import React from "react";
import PropTypes from "prop-types";
import "../css/navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();

  const handelLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <nav className="navbar">
        <ul className="navlinks">
          {localStorage.getItem("token") ? (
            <li>
              <Link to="/home">{props.title1}</Link>
            </li>
          ) : (
            <li>
              <Link to="/">{props.title2}</Link>
            </li>
          )}
          <li>
            <Link to="/about">{props.title3}</Link>
          </li>
          <li>
            <Link to="/blog">{props.title4}</Link>
          </li>
          <li>
            <Link to="/help">{props.title5}</Link>
          </li>
        </ul>
        <form className="nav-form">
          {/* <input className="nav-input" type="search" placeholder="Search" /> */}
          {localStorage.getItem("token") ? (
            ""
          ) : (
            <Link to="/signup">
              <button className="nav-button">Signup</button>
            </Link>
          )}
          {localStorage.getItem("token") ? (
            <button className="nav-button" onClick={handelLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="nav-button">Login</button>
            </Link>
          )}
        </form>
      </nav>
    </>
  );
};

export default Navbar;

Navbar.defaultProps = {
  title1: "Chahar",
  title2: "Home",
  title3: "About",
  title4: "Blog",
  title5: "Help",
};

Navbar.protoTypes = {
  title2: PropTypes.string,
  title3: PropTypes.string,
  title4: PropTypes.string,
};

import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  // show nav
  const sideNavOn = () => {
    let ul = document.querySelector(".pages");
    ul.style.left = "0px";
  };
  // hide nav
  const sideNavOff = () => {
    let ul = document.querySelector(".pages");
    ul.style.left = "-700px";
  };

  // Logout
  const handelLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <nav className="navBar">
        <i className="fa fa-bars fa-btns" onClick={sideNavOn}></i>
        <p className="appName">Abhishek's App</p>

        <ul className="pages">
          <i className="fa fa-times fa-btns " onClick={sideNavOff}></i>
          {localStorage.getItem("token") ? (
            <li>
              <Link to="/notes">{props.title1}</Link>
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
            <Link to="/services">{props.title4}</Link>
          </li>
          <li>
            <Link to="/frrd">{props.title5}</Link>
          </li>
        </ul>
        <div className="nav-buttons">
          {localStorage.getItem("token") ? (
            <button onClick={handelLogout}>
              <Link to="/Logout">Logout</Link>
            </button>
          ) : (
            ""
          )}
          {localStorage.getItem("token") ? (
            ""
          ) : (
            <button>
              <Link to="/signup">Signup</Link>
            </button>
          )}
          {localStorage.getItem("token") ? (
            ""
          ) : (
            <button>
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  title1: "Notes",
  title2: "Home",
  title3: "About",
  title4: "services",
  title5: "Feedback",
};

export default Navbar;

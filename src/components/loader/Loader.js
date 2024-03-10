import React from "react";
import loader from "../loader/loader.gif";
import "./loader.css";

const Loader = () => {
  return (
    <div>
      <div className="loader-box">
        <img src={loader} alt="loading..." />
      </div>
    </div>
  );
};
export default Loader;

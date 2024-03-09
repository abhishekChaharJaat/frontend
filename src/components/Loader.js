import React from "react";
import loader from "../images/loader.gif";
import "../css/loader.css";

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

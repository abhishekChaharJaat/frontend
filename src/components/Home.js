import React from "react";
import "../css/home.css";
import Input from "./Input";
import ComC from "./ComC";

const Home = () => {
  return (
    <>
      <Input />
      <div className="box">
        <ComC />
      </div>
    </>
  );
};

export default Home;

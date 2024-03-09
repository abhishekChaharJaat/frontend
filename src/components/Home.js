import React, { useContext } from "react";
import "../css/home.css";
import Input from "./Input";
import ComC from "./ComC";
import { myContext } from "../contexts/myContext";
import Loader from "./Loader";

const Home = () => {
  const { loading } = useContext(myContext);
  return (
    <>
      {loading && <Loader />}
      <Input />
      <div className="box">
        <ComC />
      </div>
    </>
  );
};

export default Home;

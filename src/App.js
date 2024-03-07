import "./App.css";
import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Blog from "./components/Blog";
import Login from "./components/Login";
import Myapp from "./components/Myapp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from "./contexts/myContext";
import Signup from "./components/Signup";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <MyContext>
          <Navbar title1="Chahar" />
          <Routes>
            <Route exact path="/" element={<Myapp />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </MyContext>
      </BrowserRouter>
    </div>
  );
}

export default App;

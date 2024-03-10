import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/signup/Signup";
import Notes from "./pages/notes/Notes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from "./contexts/MyContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyContext>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About title3={About} />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </MyContext>
      </BrowserRouter>
    </>
  );
}

export default App;

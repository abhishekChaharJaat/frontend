import React, { useContext, useState } from "react";
import "./login.css";
import { dataContext } from "../../contexts/MyContext";
import serverPort from "../../contexts/serverPorts";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";

const Login = () => {
  const navigate = useNavigate();
  const { getAllNotes } = useContext(dataContext);
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(`${serverPort}/api/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();

    if (json.success) {
      localStorage.setItem("token", json.token);
      navigate("/notes");
      getAllNotes();
    } else {
      alert("Login failed :  Please enter correct credentials");
    }
    setLoading(false);
  };

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-box">
      {loading && <Loader />}
      {!loading && (
        <form className="login-from" onSubmit={handelSubmit}>
          <h3>Login</h3>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={credentials.email}
            onChange={onchange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={credentials.password}
            onChange={onchange}
          />

          <a href="/">Forgot password</a>
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;

import { useContext, useState } from "react";
import "../css/signup.css";
import { useNavigate } from "react-router-dom";
import { myContext } from "../contexts/myContext";
import serverPort from "../contexts/serverports";

export default function Login() {
  const { getAllNotes } = useContext(myContext);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handelSubmit = async (e) => {
    e.preventDefault();

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
  };

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="login-box" id="box">
        <form className="form" onSubmit={handelSubmit}>
          <h3 className="formheading">Abhishek's App</h3>
          <input
            className="input"
            type="email"
            name="email"
            value={credentials.email}
            onChange={onchange}
            placeholder="Email"
          />
          <input
            className="input"
            type="password"
            name="password"
            value={credentials.password}
            onChange={onchange}
            placeholder="Password"
          />
          <div className="forgot-box">
            <a className="forgot" href="/">
              Forgot password
            </a>
          </div>
          <button type="submit" className="login-signup-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

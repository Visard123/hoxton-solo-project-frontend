import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "../Login/Login";

// import "./Login.css";

export default function SignUp({ user, users, setUser }) {
  const [error, setError] = useState();
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  function signUp(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const userEmail = users.map((user) => user.email);
    const emailInUse = "Email is in use";
    console.log(userEmail);
    if (!userEmail.includes(email)) {
      fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, email: email, password: password }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            alert("Oops, something went wrong.");
          } else {
            localStorage.setItem("token", data.token);
            Login(e);
          }
        });
    } else setEmailError(emailInUse);
  }
  if (user) {
    navigate(`/home`);
  }
  if (error) {
    return (
      <div className="login-form">
        <form onSubmit={signUp} action="">
          <div className="app-form">
            <h1 className="login-headertext">Sign Up</h1>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit">REGISTER</button>
          </div>
        </form>
      </div>
    );
  } else if (emailError) {
    return (
      <div className="login-form">
        <form onSubmit={signUp} action="">
          <div className="app-form">
            <h1 className="login-headertext">Sign Up</h1>
            <p>Email is used</p>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit">REGISTER</button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="login-form">
        <form onSubmit={signUp} action="">
          <div className="app-form">
            <h1 className="login-headertext">Sign Up</h1>

            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit">REGISTER</button>
          </div>
        </form>
      </div>
    );
  }
}

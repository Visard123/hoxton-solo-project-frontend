import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login({ user, users, setUser }) {
  const [error, setError] = useState();

  const navigate = useNavigate();

  function logIn(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    fetch("http://localhost:4001/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((resp) => resp.json())
      .then((dataFromServer) => {
        if (dataFromServer.error) {
          setError(dataFromServer.error);
        } else {
          localStorage.setItem("token", dataFromServer.token);
          setError(undefined);
          setUser(dataFromServer.user);
        }
      });
  }

  if (user) {
    navigate(`/home`);
  }

  return (
    <div className="login-form">
      <form action="" onSubmit={logIn}>
        <div className="app-form">
          <h1 className="login-headertext">Log In</h1>
          {error ? error : null}
          <input type="text" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button type="submit">SUBMIT</button>
          {/* <p>Your first time</p> <p>Create an account</p> */}
        </div>
      </form>
    </div>
  );
}

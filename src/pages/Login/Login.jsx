import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login({ user, users, setUser }) {
  const [error, setError] = useState();
  const [emailError, setEmailError] = useState("");

  function logIn(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    fetch("http://locahost4001/login", {
      method: "POST",
      headers: {
        "Content-type": "aplication/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((resp) => resp.json())
      .then((dataFromServer) => {
        if (dataFromServer.error) {
          setError(dataFromServer.error);
        } else {
          localStorage.setItem("token", dataFromServer.token);
          setUser(dataFromServer.user);
        }
      });
  }

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
            logIn(e);
          }
        });
    } else setEmailError(emailInUse);
  }
}

import { useState } from "react";
// import { NavLink } from "react-router-dom";
import "./App.css";
//@ts-ignore
import Header from "./components/Header/Header";
//@ts-ignore
import Footer from "./components/Footer/Footer";
//@ts-ignore
import Main from "./components/Main/Main";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
//@ts-ignore
import LandingPage from "./pages/LandingPage";
import "./pages/Login/Login.css";
function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <LandingPage />
      <div className="login-form">
        <form action="">
          <div className="app-form">
            <h1 className="login-headertext">Log In</h1>
            <input type="text" name="email" placeholder="Email" required />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div>

      {/* <div className="login-form">
        <form action="">
          <div className="app-form">
            <h1 className="login-headertext">Sign Up</h1>
            <input type="text" name="name" placeholder="name" required />
            <input type="email" name="email" placeholder="email" required />
            <input
              type="password"
              name="password"
              placeholder="password"
              required
            />
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div> */}
    </div>
  );
}

export default App;

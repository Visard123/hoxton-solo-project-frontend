import { useEffect, useState } from "react";
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

import Login from "./pages/Login/Login";

import Signup from "./pages/Signup/Signup";

// import "./components/Restaurants/Restaurants.css";
import OrderSection from "./pages/OrderSection/OrderSection";

import AllRestaurants from "./pages/AllRestaurants/AllRestaurants";
import Home from "./pages/Home/Home";
function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(undefined);
  console.log(setUser);
  // useEffect(() => {
  //   fetch(`http://localhost:4001/users`)
  //     .then((resp) => resp.json())
  //     .then((usersFromServer) => setUsers(usersFromServer));
  // }, []);

  useEffect(() => {
    fetch(`http://localhost:4001/users`)
      .then((resp) => resp.json())
      .then((usersFromServer) => setUsers(usersFromServer));
  }, []);

  useEffect(() => {
    if (localStorage.token) {
      fetch(`http://localhost:4001/validate`, {
        headers: {
          Authorization: localStorage.token,
        },
      })
        .then((resp) => resp.json())
        .then((userFromServer) => setUser(userFromServer));
    }
  }, []);

  // function totalPrice(basket) {
  //   let total = 0
  //   for (const order of basket) {
  //       total = total + order.item.price * order.quantity
  //   }
  //   return total.toFixed(2)

  return (
    <div className="App">
      <LandingPage setUser={setUser} />
      {/* <OrderSection /> */}

      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home user={user} setUser={setUser} />} />
        <Route
          path="/login"
          element={<Login setUser={setUser} user={user} users={users} />}
        />
        <Route
          path="/signup"
          element={<Signup setUser={setUser} user={user} users={users} />}
        />
      </Routes>
    </div>
  );
}

export default App;

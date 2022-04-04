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

import "./components/Restaurants/Restaurants.css";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(undefined);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:4000/users`)
      .then((resp) => resp.json())
      .then((usersFromServer) => setUsers(usersFromServer));
  }, []);

  useEffect(() => {
    if (localStorage.token) {
      fetch(`http://localhost:4000/validate`, {
        headers: {
          Authorization: localStorage.token,
        },
      })
        .then((resp) => resp.json())
        .then((userFromServer) => setUser(userFromServer));
    }
  }, []);

  return (
    <div className="App">
      <LandingPage />
      <Routes>
        <Route
          path="/login"
          element={<Login setUser={setUser} user={user} users={users} />}
        />
        <Route
          path="/signup"
          element={<Signup setUser={setUser} user={user} users={users} />}
        />
      </Routes>
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
            {/* <p>Your first time</p> <p>Create an account</p> */}
          </div>
        </form>
      </div>
      <div className="login-form">
        <form action="">
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
      <div className="order-wrapper">
        <h2>Restorant Name</h2>
      </div>
      <div className="restaurants-list">
        <h1 className="restaurant-list">List of Restaurants</h1>
        <ul className="listof-restaurants">
          {/* {props.properties.map((property) => (
          <Link key={property.id} to={`/properties/${property.id}`}> */}
          <li>
            <div className="restaurant-elements">
              {/* <img src={restaurant.image} alt={restaurant.name} /> */}
              <img
                src="https://kfc.al/sites/default/files/Zinger%20Boxmaster%20Menu.jpg"
                alt="kfc"
              />
            </div>
            <div className="restaurant-data">
              <div>
                {/* <h2>{restaurant.name}</h2> */}
                <h2>Kfc</h2>
              </div>
            </div>
          </li>
          <li>
            <div className="restaurant-elements">
              {/* <img src={restaurant.image} alt={restaurant.name} /> */}
              <img
                src="https://dhurata.com/images/retailers/article/tiranepizzaera/kapricioza.jpg"
                alt="kfc"
              />
            </div>
            <div className="restaurant-data">
              <div>
                {/* <h2>{restaurant.name}</h2> */}
                <h2>Kfc</h2>
              </div>
            </div>
          </li>

          <li>
            <div className="restaurant-elements">
              {/* <img src={restaurant.image} alt={restaurant.name} /> */}
              <img
                src="https://kfc.al/sites/default/files/Zinger%20Boxmaster%20Menu.jpg"
                alt="kfc"
              />
            </div>
            <div className="restaurant-data">
              <div>
                {/* <h2>{restaurant.name}</h2> */}
                <h2>Kfc</h2>
              </div>
            </div>
          </li>

          <li>
            <div className="restaurant-elements">
              {/* <img src={restaurant.image} alt={restaurant.name} /> */}
              <img
                src="https://kfc.al/sites/default/files/Zinger%20Boxmaster%20Menu.jpg"
                alt="kfc"
              />
            </div>
            <div className="restaurant-data">
              <div>
                {/* <h2>{restaurant.name}</h2> */}
                <h2>Kfc</h2>
              </div>
            </div>
          </li>

          <li>
            <div className="restaurant-elements">
              {/* <img src={restaurant.image} alt={restaurant.name} /> */}
              <img
                src="https://pavilion.cxcms.ascentis.com.sg/mallsmobile/media/mediafields/Outlet/4d2t30x9j0wrxva7v5w26mmecs/1067c0f23a03d0ac2294b9e397a2492c.jpg"
                alt="kfc"
              />
            </div>
            <div className="restaurant-data">
              <div>{/* <h2>{restaurant.name}</h2> */}</div>
            </div>
          </li>

          {/* </Link> */}
          {/* ))} */}
        </ul>
      </div>

      <section className="order-section">
        <div className="foods-list">
          <ul className="listof-foods">
            <li className="food-details">
              <div>
                <h2>Food Name</h2>
                <p>Food price</p>
                <div className="counter">
                  <button onClick={() => setCount(count - 1)}>-</button>
                  <h2>{count}</h2>
                  <button onClick={() => setCount(count + 1)}>+</button>
                </div>
              </div>
              <div>
                <img
                  src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="order-form">order</div>
      </section>
    </div>
  );
}

export default App;

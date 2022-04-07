import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Restaurants.css";
export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/restaurants")
      .then((resp) => resp.json())
      .then((restaurantfromserver) => {
        setAllRestaurants(restaurantfromserver);
        setRestaurants(restaurantfromserver);
      });
  }, []);

  return (
    <div className="restaurants-list">
      <h1 className="restaurant-list">List of Restaurants</h1>
      <ul className="listof-restaurants">
        {restaurants?.map((restaurant) => (
          <Link key={restaurant.id} to={`/restaurants/${restaurant.id}`}>
            <li className="restaurant-li">
              <div className="restaurant-elements">
                {/* <img src={restaurant.image} alt={restaurant.name} /> */}
                <img src={restaurant.image} alt="kfc" />
              </div>

              <div>
                <h2>{restaurant.name}</h2>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

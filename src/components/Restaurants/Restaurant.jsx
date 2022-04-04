import { Link } from "react-router-dom";
import "./Restaurants.css";
export default function Restaurants(props) {
  return (
    <div className="restaurants-list">
      <h1 className="restaurant-list">List of Properties</h1>
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
        {/* </Link> */}
        {/* ))} */}
      </ul>
    </div>
  );
}

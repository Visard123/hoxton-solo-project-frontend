import { useEffect, useState } from "react";
import "./OrderSection.css";
export default function OrderSection() {
  const [count, setCount] = useState(0);

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4001/foods`)
      .then((resp) => resp.json())
      .then((foodsFromServer) => setFoods(foodsFromServer));
  }, []);

  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <section className="order-section">
      <div className="foods-list">
        <ul className="listof-foods">
          {foods.map((food) => (
            <li className="food-details">
              <div>
                <h2>{food.title}</h2>
                <p>{food.price}L</p>
                <div className="counter">
                  <button onClick={decrementCount}>-</button>
                  <h2>{count}</h2>
                  <button onClick={incrementCount}>+</button>
                </div>
              </div>
              <div>
                <img src={food.image} alt={food.title} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="order-form">
        <h2>Order at Restaurant.name</h2>
        <div>
          <h3>Total.num</h3>
        </div>
        <div className="delivery">
          <p>Delivery</p>
          <p> 100 L</p>
        </div>
        <div>
          <h3>Total to pay</h3>
        </div>
        <div>
          <button type="submit">Order here!</button>
        </div>
      </div>
    </section>
  );
}

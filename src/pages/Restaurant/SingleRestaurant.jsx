// @ts-nocheck
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import "../OrderSection/OrderSection.css";
import "../Restaurant/SingleRestaurant.css";

export default function SingleRestaurant() {
  const [restaurant, setRestaurant] = useState(null);
  const [order, setOrder] = useState(null);
  const [total, setTotal] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4001/getCurrentOrder`, {
      headers: {
        Authorization: localStorage.token,
      },
    })
      .then((resp) => resp.json())
      //   .catch((err) => console.log(err))
      .then((orderFromServer) => setOrder(orderFromServer));
  }, []);

  function incrementCount(itemId) {
    fetch(`http://localhost:4001/increaseQuantity`, {
      method: "PATCH",
      headers: {
        Authorization: localStorage.token,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        itemId,
      }),
    })
      .then((resp) => resp.json())
      .then((orderFromServer) => setOrder(orderFromServer));
  }

  function decrementCount(itemId) {
    fetch(`http://localhost:4001/decreaseQuantity`, {
      method: "PATCH",
      headers: {
        Authorization: localStorage.token,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        itemId,
      }),
    })
      .then((resp) => resp.json())
      .then((orderFromServer) => setOrder(orderFromServer));
  }
  useEffect(() => {
    fetch(`http://localhost:4001/restaurants/${id}`)
      .then((resp) => resp.json())
      .then((usersFromServer) => setRestaurant(usersFromServer));
  }, []);

  function addToList(orderId, foodId) {
    fetch(`http://localhost:4001/addToOrder`, {
      method: "POST",
      headers: {
        Authorization: localStorage.token,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        orderId,
        foodId,
      }),
    })
      .then((resp) => resp.json())
      .then((orderFromServer) => setOrder(orderFromServer));
  }

  function totalPrice() {
    let newTotal = total;

    newTotal += restaurant?.food?.price * order?.orderItem?.quantity;
    setTotal(newTotal.toFixed(2));

    console.log(newTotal, restaurant?.food?.price, order?.orderItem?.quantity);

    return total.toFixed(2);
  }
  useEffect(() => {
    totalPrice();
  }, []);

  if (restaurant === null) return <p>Loading...</p>;

  return (
    <section className="order-section">
      <div className="foods-list">
        <h2>{restaurant.name} Menu</h2>
        <ul className="listof-foods">
          {restaurant.food.map((food) => (
            <li className="food-details" key={food.id}>
              <div>
                <h2>{food.title}</h2>
                <p>{food.price}L</p>
                <div className="counter">
                  <button
                    id="add-to__list"
                    onClick={() => addToList(order.id, food.id)}
                  >
                    Add to List
                  </button>
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
        <ul className="order-list">
          {order?.orderItems.map((item) => (
            <li key={item.id}>
              <div className="order-details">
                <div className="increase-decrease">
                  <button onClick={() => incrementCount(item.id)}>+</button>
                  <h2>{item.quantity}</h2>
                  {item.quantity > 0 ? (
                    <button onClick={() => decrementCount(item.id)}>-</button>
                  ) : null}
                </div>
                <div>
                  <img src={item.food.image} alt={item.food.title} />

                  <h5>{item.food.title}</h5>
                </div>
                <div>
                  <h3>{item.quantity * item.food.price}L</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="delivery">
          <p>Delivery</p>
          <p> 100 L</p>
        </div>
        <div>
          <h3>{total} hhh</h3>
        </div>
        <div>
          <button type="submit" id="order-button">
            Order here!
          </button>
        </div>
      </div>
    </section>
  );
}

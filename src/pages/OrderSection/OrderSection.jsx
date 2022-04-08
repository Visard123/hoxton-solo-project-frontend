import { useEffect, useState } from "react";
import Restaurants from "../../components/Restaurants/Restaurant";
import "./OrderSection.css";
export default function OrderSection() {
  const [foods, setFoods] = useState([]);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4001/foods`)
      .then((resp) => resp.json())
      .then((foodsFromServer) => setFoods(foodsFromServer));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:4001/getCurrentOrder`, {
      headers: {
        Authorization: localStorage.token,
      },
    })
      .then((resp) => resp.json())
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

  function decrementCount(itemId, item) {
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

  if (order === null) {
    return <h1>Loading...</h1>;
  }
}

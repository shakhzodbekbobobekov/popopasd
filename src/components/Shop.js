import React from "react";
import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "./config";
import Loader from "./Loader";
import GoodList from "./GoodList";
import Cart from "./Cart";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <div className="content container">
      <Cart quantity={order.length} />
      {loading ? <Loader /> : <GoodList goods={goods} />}
    </div>
  );
}

export default Shop;

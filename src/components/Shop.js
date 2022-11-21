import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "./config";
import React from "react";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured) && setGoods(data.featured);
        setLoading(false);
      });
  }, [goods]);

  return (
    <div className="content">
      <h1>Shops</h1>
    </div>
  );
}

export default Shop;

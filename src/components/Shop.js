import React from "react";
import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "./config";
import Loader from "./Loader";
import GoodList from "./GoodList";
import Cart from "./Cart";
import BasketList from "./BasketList";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        console.log(itemIndex);
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const removeFromBasket = (itemID) => {
    const newOrder = order.filter((item) => item.id !== itemID);
    setOrder(newOrder);
  };

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
      <Cart
        quantity={order.length}
        isBasketShow={isBasketShow}
        handleBasketShow={handleBasketShow}
      />
      {loading ? (
        <Loader />
      ) : (
        <GoodList goods={goods} addToBasket={addToBasket} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
        />
      )}
    </div>
  );
}

export default Shop;

import React from "react";
import BasketItem from "./BasketItem";

function BasketList(props) {
  const { order, handleBasketShow } = props;
  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Basket</li>
      {order.length ? (
        order.map((item) => {
          return <BasketItem key={item.id} {...item} />;
        })
      ) : (
        <li className="collection-item">Basket is empty</li>
      )}
      <li className="collection-item active">Total cost: </li>

      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export default BasketList;

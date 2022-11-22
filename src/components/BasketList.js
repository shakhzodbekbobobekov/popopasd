import React from "react";
import BasketItem from "./BasketItem";

function BasketList(props) {
  const { order, handleBasketShow, removeFromBasket } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Basket</li>
      {order.length ? (
        order.map((item) => {
          return (
            <BasketItem
              key={item.id}
              {...item}
              removeFromBasket={removeFromBasket}
            />
          );
        })
      ) : (
        <li className="collection-item">Basket is empty</li>
      )}
      <li className="collection-item active">
        Total cost: {totalPrice} <b>$</b>
      </li>

      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export default BasketList;

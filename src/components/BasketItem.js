import React from "react";

function BasketItem(props) {
  const { id, name, price, quantity, removeFromBasket } = props;
  return (
    <li className="collection-item">
      {name} x {quantity} = {price} <b>$</b>
      <span className="secondary-content">
        <i
          className="material-icons basket-delete"
          onClick={() => removeFromBasket(id)}
        >
          delete_forever
        </i>
      </span>
    </li>
  );
}

export default BasketItem;

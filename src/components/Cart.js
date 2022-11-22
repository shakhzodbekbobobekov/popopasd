import React from "react";

function Cart(props) {
  const { quantity = 0, handleBasketShow = Function.prototype } = props;
  return (
    <div className="cart">
      <i
        className=" material-icons add_shopping_cart"
        onClick={handleBasketShow}
      >
        add_shopping_cart
      </i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export default Cart;

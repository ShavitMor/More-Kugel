import React from "react";

const Order = ({ product }) => {
  return (
    <li className="check">
      <div className="product-row">
        <span className="product-number">{product?.quantity}</span>
        <span className="product-name">{product?.name}</span>
        <span className="product-cost">
          ₪{product?.cost * product?.quantity}
        </span>
      </div>
    </li>
  );
};
export default Order;

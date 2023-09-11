import React from "react";
import { useCounter } from "../counterHook";

const Kugel = (props) => {
  const [count, increase, decrease] = useCounter(0, props.name, props.handle);

  return (
    <div className="Kugel-Baktana">
      <img className="pic-grid" src={props.img} alt="Kugel Image" />
      <div className="cost-prev">₪{props.cost}</div>
      <div className="detailsAadd">
        <div className="plus-minus">
          <button onClick={increase} className="plus-button">
            +
          </button>
          <div className="quantity js-cart-quantity-12">{count}</div>
          <button
            onClick={decrease}
            className="minus-button"
            data-product-id="קוגל בקטנה"
          >
            -
          </button>
        </div>
        <div className="details">
          <div className="name">{props.name}</div>
          <div className="description">{props.details}</div>
        </div>
      </div>
    </div>
  );
};

export default Kugel;

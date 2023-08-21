import React from "react";
import "../styles/header.css";
import timeLogo from "../images/icon-time.png";
import Order from "./order";

const Cart = ({ products }) => {
  return (
    <div className="cash">
      <div className="cart-head">
        <h2
          style={{
            color: "black",
            textAlign: "center",
            fontWeight: "normal",
            fontSize: "24px",
            padding: "0 0 10px",
            borderBottom: "1px solid #606161",
          }}
        >
          פרטי הזמנה
        </h2>
      </div>
      <div className="list">
        <div className="wraperCart">
          <ul className="items">
            {products.map((product, index) => {
              console.log(product);

              return product.quantity > 0 ? (
                <Order
                  key={index}
                  product={{
                    name: product.name,
                    cost: product.cost,
                    quantity: product.quantity,
                  }}
                />
              ) : null;
            })}
          </ul>
        </div>
        <div
          className="results"
          style={{
            textAlign: "center",
          }}
        >
          <span className="subtotal">
            סה"כ:{" "}
            <span className="js-sum-go">
              ₪
              {products.reduce((sum, product) =>
                products
                  .filter((product) => product.quantity > 0)
                  .reduce(
                    (sum, product) =>
                      sum +
                      parseFloat(product.cost) * parseFloat(product.quantity),
                    0
                  )
              )}
            </span>
          </span>
        </div>
        <div
          className="timing"
          style={{
            textAlign: "center",
          }}
        >
          <img className="time-logo" src={timeLogo} alt="Time Logo" />
        </div>
        <div
          className="notify"
          style={{
            textAlign: "center",
            marginTop: "8px",
          }}
        >
          איסוף מבאר שבע, אוסבלדו ארניה 18
        </div>

        <p style={{ fontSize: "14px", marginTop: "8px", textAlign: "center" }}>
          ימי שישי : 08:00-14:00
        </p>
      </div>
    </div>
  );
};

export default Cart;

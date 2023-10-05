import React, {  useContext } from "react";
import "../styles/header.css";
import timeLogo from "../images/icon-time.png";
import Order from "./order";
import { AppContext } from "../App";
import axios from "axios";

const Cart = () => {
  const {products,name,phone}=useContext(AppContext);

  const handleButtonClick =async (event) => {
    const cost= products.reduce((sum, product) =>
      products
        .filter((product) => product.quantity > 0)
        .reduce(
          (sum, product) =>
            sum +
            parseFloat(product.cost) * parseFloat(product.quantity),
          0
        )
    )
    const websiteURL = `https://wa.me/972534224108?text=היי%20שמי%20${name}%0Aמספר%20טלפון:%20${phone}%0A%0Aאשמח%20להזמין:%0A${products[0].quantity ? products[0].quantity : 0}%20קיגל%20בקטנה%0A${products[1].quantity  ? products[1].quantity : 0}%20קיגל%20משפחתי%0A${products[2].quantity ? products[2].quantity : 0}%20קוגלדת%0A%0Aסך%20לתשלום%20:%20${cost}%20ש%22ח%0A%0A`;
    window.open(websiteURL, '_blank');
          
      event.preventDefault();
      
      try{
        await axios.post("https://kugel-macher.onrender.com/order/reserve",{
          phone,
          name,
          baktana: products[0].quantity ? products[0].quantity : 0,
          family:products[1].quantity ? products[1].quantity : 0,
          kugeledet:products[2].quantity ? products[2].quantity : 0,
        });
        alert("נא לוודא שליחת הזמנה בווצאפ!")
      }catch(err){
        console.error(err);
      }

  };

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

        <p style={{ fontSize: "14px", margin: "0px", textAlign: "center" }}>
          ימי שישי : 08:00-14:00
        </p>
        <div className="yalla" style={{textAlign:"center"}}> 
        <button className="nowOrder" onClick={handleButtonClick} style={{direction:"rtl"}}>הזמן עכשיו !</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

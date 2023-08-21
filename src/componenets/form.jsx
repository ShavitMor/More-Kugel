import React from "react";
import header from "../styles/header.css";

const Form = () => {
  return (
    <div className="form">
      <h2>מי מזמין ?</h2>
      <div className="input-wrapper">
        <input type="text" id="name" className="cool-input" placeholder="שם" />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          id="phone"
          className="cool-input"
          placeholder="פלאפון"
        />
      </div>
      <button className="pay-buttonA">הזמן עכשיו !</button>
    </div>
  );
};
export default Form;

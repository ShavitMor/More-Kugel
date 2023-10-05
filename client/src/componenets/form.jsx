import React, { useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";

const Form = () => {

  const {setPhone,products,setName,name,phone,handleToggle}=useContext(AppContext);

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
        //await axios.post("https://kuge  l-macher.onrender.com/auth/register"
        await axios.post("https://kugel-macher.onrender.com/visit/addGuest",{//only for guests
          phone,
          name
        });
      }catch(err){
        console.error(err);
      }

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
    <div className="form">
      <h2>מי מזמין ?</h2>
      <div className="input-wrapper">
        <input type="text" 
         id="name"
         className="cool-input"
         placeholder="שם"
         value={name}
         onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          id="phone"
          className="cool-input"
          placeholder="פלאפון"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button className="pay-buttonA" onClick={handleButtonClick}>הזמן עכשיו !</button>
      <button className="pay-buttonB" onClick={handleToggle}>לעגלה</button>
      <p style={{ direction:"rtl",fontSize: "16px",marginBottom:"0px", marginTop: "-12px", textAlign: "center", color:"black",fontWeight:"700"}}>

ההזמנה תתקבל רק לאחר אישור שלנו בווצאפ ! 0534224108
</p>


    </div>
  );
};
export default Form;

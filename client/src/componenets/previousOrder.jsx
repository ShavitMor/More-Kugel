import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../App";
import axios from "axios";
import { useCookies } from "react-cookie";


const PreviousOrder = () => {
  const { name, phone, setName, setPhone,handleToggle } = useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const [cookies, setCookies] = useCookies(["access_token"]);
  const Id = window.localStorage.getItem("userID");

  // Use useEffect for side effects like fetching data
  useEffect(() => {
    // Define fetch functions inside useEffect
    async function fetchFromID() {
      try {
        const response = await fetch(`https://kugel-macher.onrender.com/auth/getUser?Id=${Id}`);
        const ans = await response.json();
        setName(ans.name);
        setPhone(ans.phone);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    async function fetchOrdersByPhone() {
      try {
        console.log("ze ", {phone});
        const response = await fetch(`https://kugel-macher.onrender.com/order/reserve?phone=${phone}`);
        if (response.status === 200) {
          const data = await response.json();
          setOrders(data.orders);
        } else {
          console.error('Failed to fetch orders');
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    }

    // Check if name and phone are empty before fetching data
    if (!name || !phone) {
      fetchFromID();
    } else {
      fetchOrdersByPhone();
    }
  }, [name, phone]); // Include dependencies for useEffect

  const handleCopyOrder = async (order) => {
    const cost = order.baktana * 16 + order.family * 45 + order.kugeledet * 100;

    const websiteURL = `https://wa.me/972534224108?text=היי%20שמי%20${order.name}%0Aמספר%20טלפון:%20${order.phone}%0A%0Aאשמח%20להזמין:%0A${order.baktana}%20קיגל%20בקטנה%0A${order.family}%20קיגל%20משפחתי%0A${order.kugeledet}%20קוגלדת%0A%0Aסך%20לתשלום%20:%20${cost}%20ש%22ח%0A%0A`;
    window.open(websiteURL, '_blank');

    try {
      await axios.post("https://kugel-macher.onrender.com/order/reserve", {
        phone,
        name,
        baktana: order.baktana ? order.baktana : 0,
        family: order.family ? order.family : 0,
        kugeledet: order.kugeledet ? order.kugeledet : 0,
      });
      alert("נא לוודא שליחת הזמנה בווצאפ!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="previous">
      <h2>אהלן {name}, הזמנות קודמות:</h2>
      
      <div className="scrollable-list">
        <ul style={{ direction: "rtl" }}>
          {orders.reverse().map((order) => (
            <li key={order._id} style={{ display: "flex", alignItems: "center" }}>
              <div style={{ flex: 1, margin: "0px", padding: "0px" }}>
                {order.date} : קוגל בקטנה: {order.baktana}, קוגל משפחתי: {order.family}, עוגת קוגלדת: {order.kugeledet}
              </div>
              <div>
                <button className="copy-button" onClick={() => handleCopyOrder(order)}>הזמן</button>
              </div>
            </li>
          ))}
        </ul>

      </div>
      <button className="pay-buttonB" onClick={handleToggle}>לעגלה</button>

    </div>
  );
}

export default PreviousOrder;

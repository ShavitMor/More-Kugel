import React, { useState } from 'react';
import '../styles/modal.css';

const Modal = ({ isOpen, onClose}) => {
  const [phone, setPhone] = useState('');
  const [orders, setOrders] = useState([]);

  const handleSubmit = async () => {
    try {
      if (phone) {
        const response = await fetchOrdersByPhone(phone);

        if (response.status === 200) {
          const data = await response.json();
          setOrders(data.orders);
        } else {
          console.error('Failed to fetch orders');
        }
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

 
  async function fetchOrdersByPhone(phone) {
    try {
      const response = await fetch(`https://kugel-macher.onrender.com/order/reserve?phone=${phone}`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  const handleCopyOrder = (order) => {
    const cost= order.baktana*16+order.family*45+order.kugeledet*100;
    
    const websiteURL = `https://wa.me/972534224108?text=היי%20שמי%20${order.name}%0Aמספר%20טלפון:%20${order.phone}%0A%0Aאשמח%20להזמין:%0A${order.baktana}%20קיגל%20בקטנה%0A${order.family}%20קיגל%20משפחתי%0A${order.kugeledet}%20קוגלדת%0A%0Aסך%20לתשלום%20:%20${cost}%20ש%22ח%0A%0A`;
    window.open(websiteURL, '_blank');
    }


  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button2" onClick={onClose}>
          X
        </button>
        <h2 style={{ direction: "rtl" }}>הזמנות קודמות:</h2>
        <button className='submit-button' onClick={handleSubmit}>שלח</button>
        <input style={{ direction: "rtl" }} className='modal-phone'
          type="text"
          placeholder="הזן מספר טלפון..."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <h3 style={{direction:"rtl"}}>הזמנות שלך:</h3>
        <ul style={{ direction: "rtl" }}>
          {orders.map((order) => (
            <li key={order._id} style={{ display: "flex", alignItems: "center" }}>
              <div style={{ flex: 1 }}>
                קוגל בקטנה: {order.baktana}, קוגל משפחתי: {order.family}, עוגת קוגלדת: {order.kugeledet}
              </div>
              <div>
                <button className="copy-button" onClick={() => handleCopyOrder(order)}>הזמן!</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;

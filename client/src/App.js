import React, { useState,useEffect } from "react";

import Headline from "./componenets/headline";
import Cart from "./componenets/cart";
import Client from "./componenets/client";
import Modal from "./componenets/modal";
import initialProducts from "./db/productsData";

const App = () => {
  const [products, setProducts] = useState(initialProducts);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');


  const [bool, setBool] = useState(false);
  const handleToggle = () => {
    setBool(!bool);
  };


  const handleQuantityChange = (productName, newQuantity) => {
    const updatedProducts = products.map((product) => {
      return product.name === productName
        ? { ...product, quantity: newQuantity }
        : product;
    });
    setProducts(updatedProducts);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //we using it only to wake up the server, we use rended so it wakes up only after we make call to the server.
  async function wakeTheServer() {
    try {
      const response = await fetch(`https://kugel-macher.onrender.com/order/reserve?phone=${1}`);
      console.log("hi");
      return response;
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    wakeTheServer();
  }, []);

  return (
    <div className="App">
      <Headline modal={openModal}/>
      <div className="tahles">
        
        <Cart products={products}  />
        <Client onQuantityChange={handleQuantityChange} products={products} bool={bool} toggle={handleToggle} name={name} phone={phone} setName={setName} setPhone={setPhone}/>
      
      </div>
      
      { isModalOpen? 
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        products={products}
        setProducts={setProducts}
        handleQuantityChange={handleQuantityChange}
      /> : null
      }

    </div>
  );
};

export default App;

import React, { useState,useEffect, createContext } from "react";

import Headline from "./componenets/headline";
import Cart from "./componenets/cart";
import Client from "./componenets/client";
import Modal from "./componenets/modal";
import initialProducts from "./db/productsData";

export const AppContext =createContext();


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
      console.log("Server aWake");
      return response;
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    wakeTheServer();
  }, []);


  return (
    <AppContext.Provider value={{openModal,products,handleQuantityChange,bool,name,phone,setName,setPhone,handleToggle}}>
    <div className="App">
      <Headline modal/>
      <div className="tahles"> 
        <Cart />
        <Client />
      </div>
      
      { isModalOpen? 
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
      /> : null
      }

    </div>
    </AppContext.Provider>
  );
};

export default App;

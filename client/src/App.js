import React, { useState,useEffect, createContext } from "react";
import { BrowserRouter as Router, Route, Routes,useNavigate } from "react-router-dom"; // Import Routes instead of Route
import Headline from "./componenets/headline";
import Cart from "./componenets/cart";
import Client from "./componenets/client";
import Modal from "./componenets/modal";
import Open from "./componenets/open";

import initialProducts from "./db/productsData";

export const AppContext =createContext();


const App = () => {
  const [products, setProducts] = useState(initialProducts);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(true);


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

  //because we use free render we need to use this function...:)
  async function wakeTheServer() {
    try {
      const response = await fetch(`https://kugel-macher.onrender.com/order/reserve?phone=${1}`);
      console.log("Server aWake");
      setLoading(false);
      return response;
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    wakeTheServer();
  }, []);
 
 
  return (
    <AppContext.Provider
      value={{
        openModal,
        products,
        handleQuantityChange,
        bool,
        name,
        phone,
        setName,
        setPhone,
        handleToggle,
        loading,
      }}
    >
      <Router>
          <Routes> {/* Wrap your Route components in a Routes */}
            <Route path="/" element={<Open />} />

            <Route path="/main" element={
            <>
            <div className="App">
            <Headline modal />
            <div className="tahles">
              <Cart />
              <Client />
            </div>
            {isModalOpen ? (
            <Modal isOpen={isModalOpen} onClose={closeModal} />
          ) : null}
            </div>

            </>
            } />
          </Routes>
        
      </Router>
    </AppContext.Provider>
  );
};

export default App;
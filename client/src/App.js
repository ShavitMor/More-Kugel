import React, { useState } from "react";

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

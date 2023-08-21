import React, { useState } from "react";

import Headline from "./componenets/headline";
import Cart from "./componenets/cart";
import Client from "./componenets/client";
import initialProducts from "./db/productsData";

const App = () => {
  const [products, setProducts] = useState(initialProducts);

  const handleQuantityChange = (productName, newQuantity) => {
    const updatedProducts = products.map((product) => {
      return product.name === productName
        ? { ...product, quantity: newQuantity }
        : product;
    });
    setProducts(updatedProducts);
  };

  return (
    <div className="App">
      <Headline />
      <div className="tahles">
        <Cart products={products} />
        <Client onQuantityChange={handleQuantityChange} />
      </div>
    </div>
  );
};

export default App;

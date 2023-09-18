import React, { useContext } from "react";
import Kugel from "./kugel";
import Form from "./form";
import Cart2 from './cart2'
import initialProducts from "../db/productsData";
import { AppContext } from "../App";

const Client = (props) => {
 
const {handleQuantityChange,products,bool}=useContext(AppContext);
  return (
    <div className="client">
      <section className="options">
        {initialProducts.map((product, index) => (
          <Kugel
            img={product.img}
            cost={product.cost}
            name={product.name}
            details={product.details}
            handle={handleQuantityChange}
            quantity={product.quantity}
            products={products}
          />
        ))}
      </section>
      <Form />

      {bool ? (
        <div className="sami">
          <Cart2 />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Client;

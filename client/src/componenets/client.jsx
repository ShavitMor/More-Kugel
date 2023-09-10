import React, { useState } from "react";
import Kugel from "./kugel";
import Form from "./form";
import Cart2 from './cart2'
import initialProducts from "../db/productsData";

const Client = (props) => {
 

  return (
    <div className="client">
      <section className="options">
        {initialProducts.map((product, index) => (
          <Kugel
            img={product.img}
            cost={product.cost}
            name={product.name}
            details={product.details}
            handle={props.onQuantityChange}
            quantity={product.quantity}
            products={props.products}
          />
        ))}
      </section>
      <Form handleToggle={props.toggle} products={props.products} name={props.name} phone={props.phone} setName={props.setName} setPhone={props.setPhone}/>

      {props.bool ? (
        <div className="sami">
          <Cart2 products={props.products} handle={props.toggle} name={props.name} phone={props.phone}/>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Client;

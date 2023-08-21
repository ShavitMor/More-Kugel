import React from "react";
import Kugel from "./kugel";
import Form from "./form";
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
          />
        ))}
      </section>
      <Form />
    </div>
  );
};

export default Client;

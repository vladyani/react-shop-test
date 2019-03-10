import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { withContext } from "../context";

const ProductsList = ({ products, handleDetail, addToCart, toggleModal }) => (
  <React.Fragment>
    <div className="py-5">
      <div className="container">
        <Title name={"our"} title={"products"} />
        <div className="row">
          {products.map(product => (
            <Product key={product.id}
              product={product}
              handleDetail={handleDetail}
              addToCart={addToCart}
              toggleModal={toggleModal}
            />
          ))
          }
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default withContext(ProductsList);

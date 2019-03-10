import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductWrapper } from "./styles/productStyles";
// import PropTypes from 'prop-types';

const Product = ({ product: { id, title, img, price, inCart }, handleDetail, addToCart, toggleModal }) => (
  <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
    <div className="card">
      <div
        className="img-container p-5"
        onClick={() => handleDetail(id)}>
        <Link to="/details">
          <img src={img} alt="product" className="card-img-top" />
        </Link>
        <button
          className="cart-btn"
          disabled={inCart ? true : false}
          onClick={() => {
            addToCart(id);
            toggleModal(id);
          }}>
          {inCart ?
            <p className="text-capitalize mb-0" disabled>
              in cart
            </p>
            : <span className="fa fa-cart-plus" />}
        </button>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <p className="align-self-center mb-0">{title}</p>
        <h5 className="text-blue font-italic mb-0">
          <span className="mr-1">$</span>
          {price}
        </h5>
      </div>
    </div>
  </ProductWrapper>
);

// Product.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.number,
//     img: PropTypes.string,
//     title: PropTypes.string,
//     price: PropTypes.number,
//     inCart: PropTypes.boolean
//   }).isRequired
// };

export default Product;

import React, { Component } from 'react';
import { withContext } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './styles/button';
import Product from './Product';

const Details = ({ addToCart, detailProduct: { id, company, img, info, price, title, inCart } }) => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={img} className="img-fluid" alt="product" />
        </div>
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h1>model: {title}</h1>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            made by: <span className="text-uppercase">{company}</span>
          </h4>
          <h4 className="text-blue">
            <strong>
              price: <span>$</span> {price}
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            some info about product:
          </p>
          <p className="text-muted lead">{info}</p>
          <div>
            <Link to="/">
              <ButtonContainer>
                back to products
              </ButtonContainer>
            </Link>
            {/*TODO work with disabled logic, negation? */}
            <ButtonContainer
              cart
              disabled={inCart ? true : false}
              onClick={() => addToCart(id)}>
              {inCart ? 'inCart' : 'add to cart'}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withContext(Details);
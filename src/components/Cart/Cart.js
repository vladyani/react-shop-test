import React, { Component } from "react";
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
import { withContext } from '../../context';

const Cart = (props) => {
  return (
    <section>
      {props.cart.length > 0 ?
        <React.Fragment>
          <Title name='your' title='cart'></Title>
          <CartColumns />
          <CartList {...props} />
          <CartTotals {...props} />
        </React.Fragment>
        : <EmptyCart />}
    </section>
  );
}

export default withContext(Cart);

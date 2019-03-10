import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';

const CartList = (props) => {
    const { cart } = props;
    return (
        <div className='container-fluid'>
            {cart.map(item => <CartItem key={item.id} item={item} {...props} />)}
        </div>
    );
}
export default CartList;
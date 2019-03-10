import React from 'react';

const CartItem = ({ item: { id, title, img, price, total, count }, incrementOrDicrement, removeItem }) => (
    <div className='row my-1 text-capitalize text-center'>
        <div className='col-10 mx-auto col-lg-2'>
            <img src={img}
                style={{ width: '5rem', height: '5rem' }}
                alt={title}
                className='img-fluid' />
        </div>
        <div className='col-10 mx-auto col-lg-2'>
            <span className='d-lg-none'>product: </span>
            {title}
        </div>
        <div className='col-10 mx-auto col-lg-2'>
            <span className='d-lg-none'>product: </span>
            {price}
        </div>
        <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
            <div className='d-flex justify-content-center'>
                <div>
                    <span className="btn btn-black mx-1"
                        onClick={() => incrementOrDicrement('dicrement', id)}>
                        -
                    </span>
                    <span className="btn btn-black mx-1">{count}</span>
                    <span className="btn btn-black mx-1"
                        onClick={() => incrementOrDicrement('increment', id)}>
                        +
                    </span>
                </div>
            </div>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
            <div className='cart-icon' onClick={() => removeItem(id)}>
                <i className='fa fa-trash' />
            </div>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
            <strong>item total: $ {total}</strong>
        </div>
    </div>
);

export default CartItem;
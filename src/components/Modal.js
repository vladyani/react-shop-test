import React from 'react'
import { withContext } from '../context';
import { ButtonContainer } from './styles/button';
import { ModalContainer } from './styles/modalStyles';
import { Link } from 'react-router-dom';
import Title from './Title';
const Modal = ({ modalProduct: { img, title, price }, modalOpen, toggleModal }) => {
    return (
        <React.Fragment>
            {modalOpen ?
                <ModalContainer>
                    <div className='container'>
                        <div id='modal' className='col-8 mx-auto py-4 px-2 col-md-6 col-lg-4 text-center text-capitalize'>
                            <h5>item added to cart</h5>
                            <img src={img} className='img-fluid' alt='product' />
                            <h5>{title}</h5>
                            <h5 className='text-muted'>price : $ {price}</h5>
                            <Link to='/'>
                                <ButtonContainer
                                    onClick={() => toggleModal()}>
                                    store
                                </ButtonContainer>
                            </Link>
                            <Link to='/cart'>
                                <ButtonContainer
                                    cart
                                    onClick={() => {
                                        toggleModal();
                                    }}>
                                    go to cart
                                </ButtonContainer>
                            </Link>
                        </div>
                    </div>
                </ModalContainer>
                : null}
        </React.Fragment>
    )
}

export default withContext(Modal);

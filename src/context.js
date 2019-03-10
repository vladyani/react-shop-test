import React, { Component, createContext } from "react";
import { storeProducts } from "./data";

const ProductContext = createContext();
//Provider - provide all information through all our application, we need to put Provider at the top of component to be able acces context
//Consumer - to consume/use data we use consumer
const ProductConsumer = ProductContext.Consumer;

export class ProductProvider extends Component {
  state = {
    products: [],
    cart: [],
    detailProduct: {},
    modalOpen: false,
    modalProduct: {},
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    //prevent reference to the init object, we are copying values, we do this instead of normal spread or Object.assign, beacuse objects are nested in array
    const tempProducts = storeProducts.reduce((products, product) => {
      return products = [...products, { ...product }];
    }, []);

    this.setState({ products: tempProducts });
  }

  getItem = id => {
    const product = this.state.products.find(product => product.id === id);
    return product;
  }

  handleDetail = productId => {
    const product = this.getItem(productId);
    this.setState(() => ({
      detailProduct: product
    }));
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    product.total = product.price;

    const cartSubTotal = tempProducts.reduce((total, product) => {
      return total += product.total
    }, 0);

    this.setState(() => ({
      products: tempProducts,
      cart: [...this.state.cart, product],
      cartSubTotal: cartSubTotal
    }), () => this.addTotals());
  };

  toggleModal = id => {
    const product = this.getItem(id);

    id ? this.setState(() => ({
      modalProduct: product,
      modalOpen: !this.state.modalOpen
    }))
      : this.setState(() => ({
        modalOpen: !this.state.modalOpen
      }))
  }

  incrementOrDicrement = (mode, id) => {
    const cartProducts = [...this.state.cart];
    const product = cartProducts.find(product => product.id === id);

    if (mode === 'increment') {
      product.count++;
      product.total = product.count * product.price;
    } else {
      if (product.count === 0) return;
      product.count--;
      product.total = product.count * product.price;
    }


    this.setState(() => ({
      cart: [...cartProducts],
    }), () => this.addTotals());
  }

  removeItem = id => {
    console.log('siemka')
    const cartProducts = [...this.state.cart].filter(product => product.id !== id);
    const tempProducts = [...this.state.products];
    const removedProductIndex = tempProducts.indexOf(this.getItem(id));
    tempProducts[removedProductIndex].inCart = false;
    tempProducts[removedProductIndex].count = 0;
    tempProducts[removedProductIndex].total = 0;

    this.setState(() => ({
      products: [...tempProducts],
      cart: [...cartProducts]
    }), () => this.addTotals());
  }

  clearCart = () => {
    this.setState(() => ({
      cart: []
    }), () => {
      this.getProducts();
      this.addTotals();
    })
  }

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => subTotal += item.total);
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => ({
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total
    }));

  }

  // tester = () => {
  //   console.log('State products', this.state.products[0].inCart);
  //   console.log('Data products', storeProducts[0].inCart);

  //   const tempProducts = [...this.state.products];
  //   tempProducts[0].inCart = true;

  //   this.setState(() => ({
  //     products: tempProducts
  //   }));

  // };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          toggleModal: this.toggleModal,
          incrementOrDicrement: this.incrementOrDicrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export const withContext = Component => props => (
  <ProductConsumer>
    {value => <Component {...value} {...props} />}
  </ProductConsumer>
);
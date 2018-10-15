import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { removeFromCart } from '../actions/CartActions';
import '../styles/ShoppingCart.css';

const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <section>
      <div className="cart">
        <h2 className="title"><FontAwesomeIcon icon="shopping-cart" />&nbsp; Shopping Cart</h2>
        {cart.map(product =>
          <div key={product.id} className="product-details">
            <h2>{product.name}</h2>
            <h3>${product.price}</h3>
            <button onClick={() => removeFromCart(product)}><FontAwesomeIcon icon="trash-alt" /></button>
          </div>
        )}
        <div className="total">
          Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart(product) {
      dispatch(removeFromCart(product));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
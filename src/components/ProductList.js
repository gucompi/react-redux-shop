import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addToCart } from '../actions/CartActions';
import { connect } from 'react-redux';
import '../styles/ProductList.css';

export const ProductList = ({ products, addToCart }) => {
  return (
    <div className="products">
      {products.map(product =>
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-details">
            <h2>{product.name}</h2>
            <h3>${product.price}</h3>
            <button onClick={() => addToCart(product)} disabled={product.inventory <= 0}><FontAwesomeIcon icon="shopping-bag" />&nbsp; Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state.products);
  return {
    products: state.products
  }
};

const mapDispatchToProps =  dispatch => {
  return {
    addToCart(product) {
      dispatch(addToCart(product));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
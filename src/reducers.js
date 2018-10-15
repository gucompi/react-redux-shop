import { REPLACE_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART } from './actions/types';

const products = (state = [], action) => {
  switch(action.type) {
    case REPLACE_PRODUCTS:
      return action.products;
    default: 
    return state;
  }  
};

const cart = (state = [], action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return state.concat(action.product);
    case REMOVE_FROM_CART:
      return state.filter(product => product.id !== action.product.id);
    default: 
    return state;
  }  
};

export { products, cart };
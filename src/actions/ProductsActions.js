import axios from 'axios';
import { REPLACE_PRODUCTS } from './types';

const loadProducts = () => {
  return dispatch => {
    return axios.get('http://localhost:3001/products')
      .then(response => {
        dispatch({
          type: REPLACE_PRODUCTS,
          products: response.data
        })
      });
  };
};

export { loadProducts };
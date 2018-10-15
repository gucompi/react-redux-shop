import { products, cart } from '../reducers';
import { REPLACE_PRODUCTS, ADD_TO_CART } from '../actions/types';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, render } from 'enzyme';

configure({ adapter: new Adapter() });

describe('products', () => {
  it('returns the initial state', () => {
    expect(products(undefined, {})).toEqual([]);
  });

  it('receives products', () => {
    const producList = [
      { id: 1, name: "Product 1", price: 99, image: ""}
    ];
    expect(
      products([], { type: REPLACE_PRODUCTS, products: producList })
      ).toEqual(producList);
  });
});

describe('cart', () => {
  it('returns the initial state', () => {
    expect(cart(undefined, {})).toEqual([]);
  });

  it('add product to cart', () => {
    const product = [
      { id: 1, name: "Product 1", price: 99, image: ""}
    ];
    expect(
      cart([], { type: ADD_TO_CART, product })
      ).toEqual(product);
  });
});
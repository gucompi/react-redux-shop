import React from 'react';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import ConnectedProductList from '../../components/ProductList';
import { ADD_TO_CART } from '../../actions/types';
import { configure, render, mount } from 'enzyme';

configure({ adapter: new Adapter() });  

const mockStore = configureStore();

it('renders no products when store is empty', () => {
  const store = mockStore({ products: [] });
  const wrapper = render(<ConnectedProductList store={store} />);
  expect(wrapper.find('.product').length).toBe(0);
});

it('renders products', () => {
  const store = mockStore({
    products: [{id: 1, name: "Product 1", price: 99, image: "" }]
  });
  const wrapper = render(<ConnectedProductList store={store} />);
  expect(wrapper.find('.product').length).toBe(1);
});

it('adds a product to the shopping cart', () => {
  const store = mockStore({
    products: [{id: 1, name: "Product 1", price: 99, image: "" }]
  });
  const wrapper = mount(<ConnectedProductList store={store} />);
  wrapper.find('.product-details button').simulate('click');
  const actions = store.getActions();
  expect(actions.length).toBe(1);
  expect(actions[0].type).toBe(ADD_TO_CART);
  expect(actions[0].product).not.toBeNull();
});
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { addToCart, removeFromCart } from '../../actions/CartActions';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../actions/types';

configure({ adapter: new Adapter() });

const mockStore = configureStore();

it('adds to cart', () => {
  const store = mockStore({ cart: [] });
  const product = { id: 1, name: "Product 1", price: 99, image: "" };
  store.dispatch(addToCart(product));
  const actions = store.getActions();
  expect(actions.length).toBe(1);
  expect(actions[0].type).toBe(ADD_TO_CART);
  expect(actions[0].product).not.toBeNull();
  expect(actions[0].product.id).toBe(1);
});

it('removes from cart', () => {
  const store = mockStore({ cart: [] });
  const product = { id: 1, name: "Product 1", price: 99, image: "" };
  store.dispatch(removeFromCart(product.id));
  const actions = store.getActions();
  expect(actions.length).toBe(1);
  expect(actions[0].type).toBe(REMOVE_FROM_CART);
  expect(actions[0].product).not.toBeNull();
});
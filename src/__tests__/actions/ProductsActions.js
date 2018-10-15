import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import Adapter from 'enzyme-adapter-react-16';
import { loadProducts } from '../../actions/ProductsActions';
import { REPLACE_PRODUCTS } from '../../actions/types';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

beforeEach(() => moxios.install());
afterEach(() => moxios.uninstall());

it('loads products', () => {
  const store = mockStore({ products: [] });
  moxios.stubRequest('http://localhost:3001/products', {
    status: 200,
    response: [
      { id: 1, name: "Product 1", price: 99, image: "" },
      { id: 2, name: "Product 2", price: 199, image: "" },
      { id: 3, name: "Product 3", price: 299, image: "" }
    ]
  });
  return store.dispatch(loadProducts())
    .then(() => {
      const actions = store.getActions();
      expect(actions.length).toBe(1);
      expect(actions[0].type).toBe(REPLACE_PRODUCTS);
      expect(actions[0].products).not.toBeNull();
      expect(actions[0].products.length).toBe(3);
    });
});
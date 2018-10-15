import React from 'react';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import store from './store';
import { Provider } from 'react-redux';
import { configure, shallow, render } from 'enzyme';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

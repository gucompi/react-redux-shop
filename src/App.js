import React, { Component } from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingBag, faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.svg';
import './styles/App.css';

library.add(faShoppingBag, faShoppingCart, faTrashAlt);

class App extends Component {
  render() {
    return (
      <div>
        <header className="app-header">
            <img src={ logo } className="app-logo" alt="logo" />
            <h1>React & Redux Shop</h1>
          </header>
          <main>
            <section>
              <ProductList />
            </section>
            <aside>
              <ShoppingCart />
            </aside>
          </main>
      </div>
    );
  }
}

export default App;

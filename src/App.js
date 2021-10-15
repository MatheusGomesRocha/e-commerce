import React from 'react';

import './globals.scss';

import Product from './screens/Product';
import Header from './components/Header';
import Home from './screens/Home';
import ProductList from './screens/ProductList';
import Cart from './screens/Cart';

export default function App () {
  return(
    <div>
      <Header />

      {/* <Home /> */}

      {/* <Product /> */}

      {/* <ProductList /> */}

      <Cart />
    </div>
  )
}
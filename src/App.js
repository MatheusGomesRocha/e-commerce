import React from 'react';

import './globals.scss';

import Product from './screens/Product';
import Header from './components/Header';
import ProductList from './screens/ProductList';

export default function App () {
  return(
    <div>
      <Header />

      {/* <Product /> */}

      <ProductList />
    </div>
  )
}
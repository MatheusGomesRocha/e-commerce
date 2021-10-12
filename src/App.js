import React from 'react';

import './globals.scss';

import Product from './screens/Product';
import Header from './components/Header';

export default function App () {
  return(
    <div>
      <Header />

      <Product />
    </div>
  )
}
// src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';


import Home from '../../e-commerceClone/Redux_Assignment/src/Home';
import { Header } from './components/header';
import Cart from '../../e-commerceClone/Redux_Assignment/src/Cart';

import ProductDetail from '../../e-commerceClone/Redux_Assignment/src/ProductDetail';
import Ratting from '../../e-commerceClone/Redux_Assignment/src/Ratting';
import Reviews from '../../e-commerceClone/Redux_Assignment/src/review';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            
            <Route path="/product_detail/:id" element={<ProductDetail />}>
              <Route path="reviews" element={<Reviews />} />
              <Route path="ratting" element={<Ratting />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;

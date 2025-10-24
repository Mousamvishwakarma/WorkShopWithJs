import './App.css';
import Home from './home';
import { Header } from './components/header'
import Cart from './cart';
import Orders from './orders';
import { ProductDetail } from './productDetials';
import React, { useState, useEffect } from 'react';


// Importing components from React Router to handle navigation between pages
// BrowserRouter: enables routing feature in the app
// Routes: container that holds all individual Route definitions
// Route: defines which component to show for a specific URL path
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const getProducts = async () => {
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json()
    setProducts(data?.products);
  }

  return (
    <div className="App">
       

      {/* BrowserRouter wraps the entire app and enables routing functionality.
          It keeps track of the current URL and updates the page content without reloading.
      */}
      <BrowserRouter>

        {/* Header component will be shown on every page (because it's outside <Routes>) */}
        <Header />

        {/* Routes is a container for all the Route components.
            It tells React Router which component to display based on the current URL.
        */}
        <Routes>

          {/* Each Route defines a specific path and the component that should render when
              the browser's URL matches that path. */}

          {/* When the URL path is "/", show the Home component */}
          <Route path='/' element={<Home products={products} cart={cart} setCart={setCart} getProducts={getProducts} />} />

          {/* When the URL path is "/cart", show the Cart component */}
          <Route path='/cart' element={<Cart cart={cart} />} />

          {/* When the URL path is "/orders", show the Orders component */}
          <Route path='/orders' element={<Orders />} />

          {/* When the URL path is "/product_detail/:id", show the ProductDetail component.
              ":id" means this part is dynamic — for example, "/product_detail/101" or "/product_detail/abc".
              The "id" value can be used inside the ProductDetail component to fetch and display
              information for that specific product.
          */}
          <Route path='/product_detail/:id' element={<ProductDetail products={products} getProducts={getProducts}/>} />

        </Routes>
      </BrowserRouter>
      {/* <Header/>
          <Home/> */}
    </div>
  );
}

export default App;

import './App.css';
import Home from './home';
import { Header } from './components/header'
import Cart from './cart';
import Orders from './orders';
import ProductDetail from './productDetials';
import Ratting from './Ratting';
import Reviews from './review';
import Login from './login';
import { CartReducer } from './cart.reducer';
// Importing components from React Router to handle navigation between pages
// BrowserRouter: enables routing feature in the app
// Routes: container that holds all individual Route definitions
// Route: defines which component to show for a specific URL path
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoutes } from './protectedRoutes';
import { createContext, useState, useReducer } from 'react';
const initialCart = {
    cart:[],
    cartTotal:0,
    cartItems:0
}


export const CartContext = createContext();

function App() {
  const [state, dispatch] = useReducer(CartReducer, initialCart)
  /* const addToCart = ( product) => {
        setCart((previous) => [...previous, product])
    } */
  return (
    <div className="App">
      {/* BrowserRouter wraps the entire app and enables routing functionality.
          It keeps track of the current URL and updates the page content without reloading.
      */}
      <CartContext.Provider value={{state, dispatch}}>
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
          <Route path='/' element={<Home />} />

          {/* When the URL path is "/cart", show the Cart component */}
          <Route element={<ProtectedRoutes />}>
            <Route path='/cart' element={<Cart />} />
            <Route path='/orders' element={<Orders />} />
          </Route>  
          {/* When the URL path is "/orders", show the Orders component */}
         

          {/* When the URL path is "/product_detail/:id", show the ProductDetail component.
              ":id" means this part is dynamic — for example, "/product_detail/101" or "/product_detail/abc".
              The "id" value can be used inside the ProductDetail component to fetch and display
              information for that specific product.
          */}
          <Route path='/product_detail/:id' element={<ProductDetail />}>
            <Route path='reviews' element={<Reviews/>} />
            <Route path='ratting' element={<Ratting/>} />
          </Route>
          <Route path='/login' element={<Login />} />  
        </Routes>
      </BrowserRouter>
      </CartContext.Provider>
      {/* <Header/>
          <Home/> */}
    </div>
  );
}

export default App;

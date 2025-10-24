import React, { useState, useEffect } from 'react'
// Importing the Product component that will display each product card
import { Product } from './components/product';
import { ProductDetail } from './productDetials';
import './App.css';

// Importing useNavigate hook from React Router
// useNavigate allows you to move between pages (routes) programmatically
import { useNavigate } from 'react-router-dom';

const Home = ({ products, cart, setCart, getProducts }) => {

    // const [products, setProducts] = useState([]);
    // const [cart, setCart] = useState([]);
    // Hook from React Router for navigation (used to open product detail page)
    // Here we create the instance of the useNavigate hook that will helps us to navigate to another component.
    const navigate = useNavigate()

    // Function to get product data from the API

    // useEffect runs automatically when the component first loads
    // Here, we call getProducts() once when the page is loaded
    useEffect(() => {
        getProducts()
    }, [])  // empty [] means it runs only once after the first render

    // Another useEffect that runs whenever the cart changes
    // It logs the updated cart to the console
    useEffect(() => {
        console.log(products)
        console.log("Cart updated:")
        console.log(cart)
    }, [cart]) // runs every time 'cart' state changes

    // Function to add a product to the cart
    const addToCart = (product) => {
        console.log(cart);
        // Updating the cart by keeping old items and adding the new one
        setCart((previous) => [...previous, product])
    }

    // Function to handle when user clicks on a product
    // It navigates to the product detail page using the product ID
    const productDetail = (id) => {
        console.log("Opening product detail for ID:", id)
        // Here its navigate to the product_detail page and we pass the product id as a search params 
        // that will help us to render the specific product details
        navigate(`/product_detail/${id}`)
    }

    return (
        <div>
            <h2>Products</h2>

            {/* Container for all product cards */}
            <div className='products'>
                {
                    // Checking if products exist, then mapping over them to render Product components
                    products.length && products.map((product) => (
                        <Product
                            product={product}                  // passing product data
                            key={product.id}                   // unique key for React list
                            addToCart={(product) => addToCart(product)}   // function to add product to cart
                            productDetail={(id) => productDetail(id)}     // function to open detail page
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default Home;

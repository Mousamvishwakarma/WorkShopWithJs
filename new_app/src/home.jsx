import React,{useState, useEffect} from 'react'
import { Product } from './components/product';
import './App.css';

const Home = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])


    const getProducts = async() => {
        const res = await fetch("https://dummyjson.com/products")
        const data = await res.json()
        setProducts(data?.products)
        
    }

    useEffect(()=> {
        getProducts()
    },[])
    
    useEffect(()=>{
        console.log("update cart")
        console.log(cart)
    },[cart])

     const addToCart = (product) => {
        setCart((previous) => [...previous, product])
    }

    return (
        <div>
            <h2>Products</h2> 
            <div className='products'>
            {
                products.length && products.map((product) => ( <Product product={product} key={product.id} addToCart={(product) => addToCart(product)}/>) )
            }  
           </div> 
        </div>
    )
}

export default Home
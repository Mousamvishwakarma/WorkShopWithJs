// Importing useParams hook from React Router
// useParams is used to access the dynamic values from the URL (like product ID)
import { useParams } from "react-router-dom"
import React,{ useEffect, useState, useContext } from "react"
import { NavLink , Outlet } from "react-router-dom"
import { CartContext } from "./App"
import { useFetch } from "./fetcher"
// ProductDetail component — shows details of a single product
const ProductDetail = () => {

    // useParams() gives you an object containing all route parameters
    // Example: if the URL is "/product_detail/5", then params = { id: "5" }
    const {cart, setCart} = useContext(CartContext)
    //const [product, setProduct ] = useState({})
    const params = useParams()
    const [product] = useFetch(`https://dummyjson.com/products/${params.id}`)

    /* const getProduct = async () => {
        const res = await fetch(`https://dummyjson.com/products/${params.id}`)
        const item = await res.json()
        setProduct(item)
    }   */ 

    const addToCart=()=>{
        setCart(product)
    }

    useEffect(() => {
       console.log(product)
    },[]) 
    
    const check = false
    return (
        <>
        {product ? (<div>
             
            {/* Displaying the product ID taken from the URL */}
            <h2>{product?.title}</h2>
            <img src={product?.images[0]} alt={product?.title}  height={500} width={300}/> 
            <p>{product?.price}</p>
            <p>{product?.description}</p>
             <button onClick={(e) => addToCart(e, product)}>Add to cart</button>
            
           

            <NavLink to="ratting">Rating</NavLink>

            <NavLink to="reviews">Reviews</NavLink>
             {
             check && <Outlet/>
             }
            
        
        </div>): <p>...Loading</p>}
        </>
    )
}

export default ProductDetail
// SAGA
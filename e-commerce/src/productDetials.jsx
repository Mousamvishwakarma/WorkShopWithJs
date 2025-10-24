// Importing useParams hook from React Router
// useParams is used to access the dynamic values from the URL (like product ID)
import { useParams } from "react-router-dom"
import React, { useEffect, useState } from 'react';
 

// import { Product } from "./components/product"

// ProductDetail component — shows details of a single product
export const ProductDetail = ({ products,getProducts }) => {


    // useParams() gives you an object containing all route parameters
    // Example: if the URL is "/product_detail/5", then params = { id: "5" }
    const params = useParams()
    let id = params.id;
    const [review, setReview] = useState([]);


    useEffect(() => {
        console.log(products)
        getProducts()
         setReview(products[id - 1]?.reviews)
    }, [])

    return (
        <div className="product_detail_container">
            {/* Displaying the product ID taken from the URL */}
            
            <div className='product'>

                <img
                    src={products[id - 1]?.images[0]}
                    alt={products[id - 1]?.title}
                    height={200}
                    width={150}
                />
                <h3>{products[id - 1]?.title}</h3>
                <p>Price:-<b>{products[id - 1]?.price}</b></p>
                <p>Description:- <i>{products[id - 1]?.description}</i></p>
                <p>Gross Rating:- {products[id - 1]?.rating}</p>
                {/* <p>Description:- {products[id - 1]?.description}</p> */}
                {/* "Add to cart" button.
                When clicked, it calls addToCart() and passes the entire product object
                so it can be added to the user's shopping cart.
            */}

            </div>
            <div  className="review_contain">

                {review.map((view) => {
                    return (
                        <div className="review_container" key={view.id}>
                            <h6> {view.reviewerEmail}</h6>
                            <p>Comment:- {view.comment}</p>
                            <p>Rating:- {view.rating}</p>
                        </div>
                    )
                })}

            </div>







            {/* <div className='products'>
                {
                    // Checking if products exist, then mapping over them to render Product components
                    products.length && products.map((product) => product.id)
                        // <Product
                        //     product={product}                  // passing product data
                        //     key={product.id}                   // unique key for React list
                        //     addToCart={(product) => addToCart(product)}   // function to add product to cart
                        // // productDetail={(id) => productDetail(id)}     // function to open detail page
                        // />

                }
            </div> */}
        </div>
    )
}



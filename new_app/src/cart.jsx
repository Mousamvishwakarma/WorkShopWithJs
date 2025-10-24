import "./App.css"
// import React, { useState, useEffect } from 'react';

const Cart = ({ cart }) => {
   
    let addition = 0;
    console.log(cart);
 



    return (
        <div className="products">
            <h2>Cart</h2>
            {cart.map((carting) => {
                 
              
                { addition += carting?.price }
                {}
                return (
                    <div>
                        <div className='product'>
                            <img
                                src={carting?.images[0]}
                                alt={carting?.title}
                                height={200}
                                width={150}
                            />
                            <p><b>{carting?.title}</b></p>
                                <p>Price:- {carting?.price}</p>
                        </div>

                    </div>

                )
            })}
            <div>
                {addition !== 0 &&
                    <b> <p>Total Price: {addition.toFixed(2)}</p></b>
                }
            </div>

        </div>
    )
}

export default Cart
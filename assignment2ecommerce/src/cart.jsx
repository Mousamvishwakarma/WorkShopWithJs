import Ratting from "./Ratting"
import { useState , useMemo, useCallback, useContext } from "react"
import { CartContext } from "./App"
import { Product } from "./components/product"
import { useNavigate } from "react-router-dom"
const Cart = () => {
    const {state, dispatch} = useContext(CartContext)
    const navigate = useNavigate()

     const productDetail = (id) => {
        //console.log("Opening product detail for ID:", id)
        // Here its navigate to the product_detail page and we pass the product id as a search params 
        // that will help us to render the specific product details
        navigate(`/product_detail/${id}`)
    }
    // const [ratting, setRatting] = useState(0);
   /* const [counter, setCounter] = useState(0);
    const [isTopRatting, setTopRatting] = useState(false);
    
    const count = useMemo(()=>{
        console.log("counter")
       let value = 0
        for(let i =0; i<100000;i++){
            value ++
        }
        return value
    },[])

   const review = useCallback(()=>{
        console.log('review')
        return "review"
   },[isTopRatting])
     */

    /* const incRatting = () => {
        setRatting(ratting+1)
    } */
    return (
    <div>
        <h3>Cart</h3>
        {
            state.cart.length && state.cart.map((el) => <Product key={el.id} product={el} productDetail={(id)=> productDetail(id)} remove={(e,item)=> {
                e.stopPropagation()
                dispatch({type:"REMOVE", item})}}/>)
        }
      </div>
    )
}

export default Cart




export const CartReducer = (state  ,action) => {

    switch(action.type){
        case "ADD": {
            return {
                ...state,    
                cart: [...state.cart, action.item],
                cartItems: state.cartItems+1
            }  
        }
        case "REMOVE":{
            const newCart = state.cart?.filter(el => el.id !== action.item.id)
            return {
                ...state,
                cart: newCart,
                cartItems: newCart.length
            }
        }
        default : return {...state}
    }
}
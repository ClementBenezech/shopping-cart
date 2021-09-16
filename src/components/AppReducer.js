const initialState = {cartProducts: []}
// Use the initialState as a default value
export default function rootReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens  
  switch (action.type) {  
    case 'product/addToCart': {
      /*Handling the addProduct case: 
        If the product already exists in the state, then increment its quantity by specified quantity
        Else, the product is added to the state with the specified quantity*/
      if (state.cartProducts.findIndex(currentProduct => currentProduct.id === action.payload.id) != -1) {
        return {
          ...state,      
          cartProducts : state.cartProducts.map(cartProduct => cartProduct.id === action.payload.id ? {
              ...cartProduct, quantity: cartProduct.quantity + action.payload.quantity
          } : cartProduct
          ) 
        }
      }
      else {
        return {
          ...state,
          cartProducts: [...state.cartProducts, action.payload]
        }
      }
      
  }
      
    case 'product/removeFromCart' : {
      //In case of deletion, we look for a martching ID with filter to return a list without the removed item
      const newCartProducts = state.cartProducts.filter (cartProduct => cartProduct.id !== action.payload.id);
      return {
        ...state,
              cartProducts : newCartProducts
      }
    }

    case 'product/decrement' : {
        
      if (state.cartProducts.find(currentProduct => currentProduct.id === action.payload.id).quantity === 1) {
        const newCartProducts = state.cartProducts.filter(cartProduct => cartProduct.id !== action.payload.id);
          return {
              ...state,
                    cartProducts : newCartProducts
            } 
          }
        else {
        return {
          ...state,      
          cartProducts : state.cartProducts.map(cartProduct => cartProduct.id === action.payload.id ? {
              ...cartProduct, quantity: cartProduct.quantity - 1
          } : cartProduct
          ) 
        }
      }
    }
  

      case 'product/increment' : {
        return {
          ...state,      
          cartProducts : state.cartProducts.map(cartProduct => cartProduct.id === action.payload.id ? {
              ...cartProduct, quantity: cartProduct.quantity + 1
          } : cartProduct
          ) 
        }
      }

    default:      
    // If this reducer doesn't recognize the action type, or doesn't      
    // care about this specific action, return the existing state unchanged 
    return state 
}}
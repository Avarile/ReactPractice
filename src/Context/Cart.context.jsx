import React, { createContext, useReducer } from "react"
import cartReducer from "./CartReducer"

export const CartContext = createContext()
const initState = { cartItems: [], itemCount: 0, totalAmount: 0 }

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initState)
  // the state and dispatch will be returned from useReducer(after the initState
  //been processed by the type.action)

  const addProduct = (product) => {
    dispatch({ type: "add_to-cart", payload: product })
    // dispatch got 2 props.  the first one is a type:'add_product' which will tell the reducer how to process the data,  the 2nd is the data needs to be processed
  }
  const contextValues = {
    ...state,
    addProduct,
  }
  return <CartContext.Provider value={contextValues}>{children}</CartContext.Provider>
}

export default CartContextProvider

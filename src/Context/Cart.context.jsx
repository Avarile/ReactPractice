import React, { createContext } from "react"
import cartReducer from "./CartReducer"

export const CartContext = createContext()
const initState = { cartItems: [], itemCount: 0, totalAmount: 0 }

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initState)
    // the state and dispatch will be returned rom useReducer(after the initState
    //been processed by the type.action)

    const contextValues = {
        ...state,
    }
    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

export const sumItems = (cartItems) => {
    return {
        itemCount: cartItems.reduce(
            (totalNum, product) => totalNum + product.quantity,
            0
        ),
        totalAmount: cartItems.reduce(
            (totalAmount, product) =>
                totalAmount + product.price * product.quantity,
            0
        ),
    }
}
const cartReducer = (state, action) => {
    switch (action.type) {
        case "add_to-cart":
            //check if the item is already in the cart, if it is, we dont want to duplicate it.
            if (
                !state.cartItems.find((item) => item.id === action.payload.id)
            ) {
                //state.cartItems is an Array of products
                // action.payload is the product passed from the cartContext --- which is also a product as well.
                state.cartItems.push({
                    ...action.payload, // payload is actually an product
                    quantity: 1,
                })
            }
            return {
                ...state,
                //spread the current state in case if anyother props already in there
                cartItems: [{ ...state.cartItems }],
                //undate the new cartItems state cuz a new product has been added
                ...sumItems(state.cartItems),
            }
        default:
            return state
    }
}

export default cartReducer

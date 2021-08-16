import React, { useContext } from "react"
import ShoppingBagIcon from "../img/shopping-bag.png"
import { CartContext } from "../../Context/Cart.context"

export default function CartIcon() {
    const itemCount = useContext(CartContext)
    return (
        <>
            <div
                style={{
                    marginLeft: "auto",
                    cursor: "pointer",
                }}>
                <img
                    src={ShoppingBagIcon}
                    alt="shopping-cart-Icon"
                    style={{
                        width: "30px",
                    }}
                />
                {itemCount > 0 ? (
                    <span
                        style={{
                            marginLeft: "-16px",
                            backgroundColor: "black",
                            color: "white",
                            paddingRight: "4px",
                            borderRadius: "8px",
                        }}>
                        {itemCount}
                    </span>
                ) : null}
            </div>
        </>
    )
}

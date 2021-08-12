import React from "react";
import ShoppingBagIcon from "../img/shopping-bag.png";

export default function CartIcon() {
  return (
    <>
      <div
        style={{
          marginLeft: "auto",
          cursor: "pointer",
        }}
      >
        <img
          src={ShoppingBagIcon}
          alt="shopping-cart-Icon"
          style={{
            width: "30px",
          }}
        />
        <span
          style={{
            marginLeft: "-16px",
            backgroundColor: "black",
            color: "white",
            paddingRight: "4px",
            borderRadius: "8px",
          }}
        >
          {" "}
          5{" "}
        </span>
      </div>
    </>
  );
}

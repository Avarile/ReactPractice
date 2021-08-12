import React from "react";
import "./Featured-products.styles.scss";

export default function FeaturedProducts(product) {
  const { title, imageUrl, price } = product; // destruct the product it received
  return (
    <div className="featured-product">
      <div className="featured-image">
        <img src={imageUrl} alt="productImg" />
      </div>
      <div className="name-price">
        <h3>{title}</h3>
        <p>$ {[price]}</p>
        <button className="button is-black nomad-btn">ADD TO CART</button>
      </div>
    </div>
  );
}

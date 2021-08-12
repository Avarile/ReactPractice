import React, { useContext } from "react";
import { ProductsContext } from "../../Context/Products-context";
import FeaturedProduct from "../Shared/Featured-products";

export default function FeaturedConnection() {
  const { products } = useContext(ProductsContext);
  const productItems = products
    .filter((product, i) => i < 4) // only need 4 items
    .map((product) => (
      <FeaturedProduct {...product} key={product.id}></FeaturedProduct>
    ));
  return (
    <>
      <div className="featured-collection container">
        <h2 className="featured-setion-title">Featured Collection</h2>
        <div className="products">{productItems}</div>
      </div>
    </>
  );
}

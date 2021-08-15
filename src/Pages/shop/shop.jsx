import React, { useContext } from "react"
import FeaturedProduct from "../../Components/Shared/Featured-products"
import { ProductsContext } from "../../Context/Products-context"
import "./shop.styles.scss"

const Shop = () => {
  const { products } = useContext(ProductsContext)
  const allProducts = products.map((product) => (
    <FeaturedProduct {...product} key={product.id}></FeaturedProduct>
  ))
  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Shop</h2>
      <div className="product-list">{allProducts}</div>
    </div>
  )
}
export default Shop

import React, { useContext, useState, useEffect } from "react"
import { ProductsContext } from "../../Context/Products-context"
import "./single-product.styles.scss"
import { withRouter } from "react-router-dom"

function SingleProduct({ match, history: { push } }) {
  const { products } = useContext(ProductsContext)
  const { id } = match.params
  const [product, setProduct] = useState(null)
  useEffect(() => {
    const product = products.find(
      (product) => Number(product.id) === Number(id)
    )

    // if product not exist, redirect to shop page
    if (!product) {
      return push("/shop")
    }
    setProduct(product)
  }, [id, product, push, product, products])

  if (!product) {
    return null
  }
  // while check for product
  const { imageUrl, title, price, description } = product

  return (
    <>
      <div className="single-product-container">
        <div className="product-image">
          <img src={imageUrl} alt="product-img" />
        </div>
        <div className="product-details">
          <div className="name-price">
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className="btn-control">
            <button
              className="button is-white nomad-btn"
              id="btn-white-outline">
              Add Cart
            </button>
            <button
              className="button is-black nomad-btn"
              id="btn-white-outline">
              Proceed to CheckOut
            </button>
          </div>
          <div className="product-description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(SingleProduct)

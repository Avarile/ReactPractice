import React, { useContext } from "react"
import { withRouter } from "react-router-dom"
import "./Featured-products.styles.scss"
// import { isInCart } from "../../Help"
// import { CartContext } from "../../Context/Cart.context"

function FeaturedProducts(props) {
  const { title, imageUrl, price, history, id, decription } = props // destruct the props it received
  //   const { addProduct, cartItems } = useContext(CartContext)
  const product = { title, imageUrl, price, id, decription }
  return (
    <div className="featured-product">
      <div
        className="featured-image"
        onClick={() => {
          history.push(`/product/${id}`)
        }}>
        <img src={imageUrl} alt="productImg" />
      </div>
      <div className="name-price">
        <h3>{title}</h3>
        <p>$ {price}</p>
        <button className="button is-black nomad-btn" id="btn-white-outline">
          ADD TO CART
        </button>
      </div>
    </div>
  )
}

export default withRouter(FeaturedProducts)

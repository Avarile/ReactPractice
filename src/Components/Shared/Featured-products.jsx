import React from "react"
import { withRouter } from "react-router-dom"
import "./Featured-products.styles.scss"

function FeaturedProducts(props) {
    const { title, imageUrl, price, history, id } = props // destruct the props it received
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
                <p>$ {[price]}</p>
                <button className="button is-black nomad-btn">
                    ADD TO CART
                </button>
            </div>
        </div>
    )
}

export default withRouter(FeaturedProducts)

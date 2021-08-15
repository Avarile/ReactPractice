import React from "react"
// import { withRouter } from "react-router-dom";
import StudioBag from "../../Assets/img/studio-bag.png"
import "./main.styles.scss"

export default function MainSection({ history }) {
  return (
    <div className="main-section-container font">
      <div className="main-section-middle">
        <div className="ms-m-image">
          <img src={StudioBag} alt="studio bag" />
        </div>
        <div className="ms-m-description">
          <h2>Designed for fashion. Crafted for Sport</h2>
          <p>
            We make products that effortlessly transition from day to night.
            From the board room to the fitness studio, and everywhere in
            between, each Nomads piece is thoughtfully created to be the perfect
            balance of form and function.
          </p>
          <button
            className="button is-black"
            id="shop-now"
            onClick={() => history.push("/product/1")}>
            STUDIO BAG
          </button>
        </div>
      </div>
    </div>
  )
}

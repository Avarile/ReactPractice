import React from "react";
import { Link } from "react-router-dom";
import "./hero.styles.scss";

export default function Hero() {
  return (
    <section className="hero is-info is-large hero-image">
      <div className="hero-body">
        <div className="container">
          <h1 className="hero-title">Bags reimagined for modern life</h1>
          <div className="shop-now-btn">
            <Link to="shop">
              <button className="button is-black id" id="show-now">
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

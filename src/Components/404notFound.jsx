import React from "react"
import Layout from "./Layout"
// import Hero from "./Hero/Hero";
import { Link } from "react-router-dom"

const NotFound = () => {
  const style = {
    fontWeight: "bold",
    textAlign: "center",
  }
  return (
    <Layout>
      <section className="hero is-large is-info hero-image">
        <div className="hero-body">
          <p style={style}> Unfortunately we can't find the page :)</p>
          <Link to="/">
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                cursor: "pointer",
              }}>
              Back to Home
            </p>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
export default NotFound

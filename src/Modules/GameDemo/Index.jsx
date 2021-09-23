import React from "react"
import LandingPage from "./Components/LandingPage"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./Components/Main.Styles.css"

export default function Index() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={LandingPage} />
      </Router>
    </div>
  )
}

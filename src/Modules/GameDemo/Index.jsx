import React from "react"
import LandingPage from "./Components/LandingPage"
// import GroupSelection from "./Components/GroupSelection"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./Components/Main.Styles.css"
import GroupSelection from "./Components/GroupSelection"

export default function Index() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/GroupSelection" component={GroupSelection} />
        </Switch>
      </Router>
    </div>
  )
}

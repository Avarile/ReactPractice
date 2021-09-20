import React, { Children } from "react"
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom"

export default function ParamsExample() {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>

        <ul>
          <li>
            <Link to={"/netflix"}>NetFlix</Link>
          </li>
          <li>
            <Link to={"/zillow-group"}>Zillow Group</Link>
          </li>
          <li>
            <Link to={"/yahoo"}>Yahoo</Link>
          </li>
          <li>
            <Link to={"/modus-create"}>Modus Create</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/:slug" children={<ChildComponent />} />
        </Switch>
      </div>
    </Router>
  )
}

const ChildComponent = () => {
  // we use useParams hook here to access the dynamic piece of the URL/slug
  let { slug } = useParams()
  return (
    <>
      <h3>ID: {slug}</h3>
    </>
  )
}

import React from "react"
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom"

const NestingExample = () => {
  return (
    <>
      <Router>
        <div>
          {/* the Links */}
          <ul>
            <li>
              <Link to="/">HomePage</Link>
            </li>
            <li>
              <Link to="/family">FAMILY MEMBERS</Link>
            </li>
          </ul>
          {/* the Switches */}
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/family">
              <FamilyMembers />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

const HomePage = () => {
  return (
    <>
      <h2>Our Family</h2>
    </>
  )
}

const FamilyMembers = () => {
  let { path, url } = useRouteMatch()

  return (
    <>
      <h2>Family Members are listed here: </h2>

      <ul>
        <li>
          <Link to={`${url}/Avarile`}>Avarile</Link>
        </li>

        <li>
          <Link to={`${url}/Emily`}>Emily</Link>
        </li>

        <li>
          <Link to={`${url}/Anastasia`}>Anastasia</Link>
        </li>

        <li>
          <Link to={`${url}/Aurelia`}>Aurelia</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a family member to inspect the details</h3>
        </Route>

        <Route path={`${path}/familymemberId`}>
          <FamilyMember />
        </Route>
      </Switch>
    </>
  )
}

const FamilyMember = () => {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to={"/Avarile"}>NetFlix</Link>
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
          <Route path="/:familymemberId" children={<FamilyMemberDetails />} />
        </Switch>
      </Router>
    </>
  )
}

const FamilyMemberDetails = () => {
  let { familymemberId } = useParams()
  return (
    <>
      <p>My name is {familymemberId}, I am the father of this family, now I am a worker in the factory</p>
    </>
  )
}

export default NestingExample

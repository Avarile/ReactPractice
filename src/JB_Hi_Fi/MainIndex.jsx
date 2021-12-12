import React from "react"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import { MainDataProvider } from "./Data/MainDataEntrance"

function MainIndex() {
  return (
    <MainDataProvider>
      <Router>
        <Switch>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </Router>
    </MainDataProvider>
  )
}

export default MainIndex

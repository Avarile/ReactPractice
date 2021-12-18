import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { GetRoutes } from "../../React-Router-Dom/RoutesLibs"
import CustomRoutes from "./Routes"

export const Index = () => {
  return (
    <>
      <Router>
        <Switch>{GetRoutes(CustomRoutes)}</Switch>
      </Router>
    </>
  )
}

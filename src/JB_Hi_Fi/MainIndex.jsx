import React from "react"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import { NavBar } from "./Components/NavBar"
import { SideBar } from "./Components/SideBar"
import MainContent from "./Components/MainContent"
import { MainDataProviders } from "./Data/MainDataEntrance"
import Footer from "./Components/Footer"

import "./Styles/Main.css"

function MainIndex() {
  return (
    <MainDataProviders>
      <Router>
        <div className="mainlayout">
          <SideBar className="sidebar" />
          <NavBar className="navbar" />
          <MainContent className="main-content" />
          <Footer className="footer" />
        </div>
        <Switch></Switch>
      </Router>
    </MainDataProviders>
  )
}

export default MainIndex

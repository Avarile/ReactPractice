import React, { useState } from "react"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import { NavBar } from "./Components/NavBar"
import { SideBar } from "./Components/SideBar"
import MainContent from "./Components/MainContent"
import { MainDataProviders } from "./Data/MainDataEntrance"
import Footer from "./Components/Footer"

import "./Styles/Main.css"

function MainIndex() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <MainDataProviders>
      <Router>
        <NavBar className="navbar" sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <MainContent className="main-content" />
        <Footer className="footer" />
        <Switch></Switch>
      </Router>
    </MainDataProviders>
  )
}

export default MainIndex

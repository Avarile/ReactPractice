import React, { useState } from "react"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import { NavBar } from "./Components/NavBar"
import { SideBar } from "./Components/SideBar"
import MainContent from "./Components/MainContent"
import { MainDataProviders } from "./Data/MainDataEntrance"
import Footer from "./Components/Footer"
import { NotLoginScreen } from "./Views/NotLoginScreen"
// import { VideoPlayer } from "./Utls/VideoPlayer"
import LoadingWhiletravel from "./Components/SubComponents.jsx/Loadings/LoadingWhiletravel"

import "./Styles/Main.css"

function MainIndex() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <MainDataProviders>
      <Router>
        {/* <VideoPlayer selector={"Jump"} /> */}
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <NavBar className="navbar" sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <NotLoginScreen />
        <Route path="/admin" render={(props) => <MainContent {...props} className="main-content" />} />
        <Redirect from="/" to="/admin/maincontent" />
        <Footer className="footer" />
      </Router>
    </MainDataProviders>
  )
}

export default MainIndex

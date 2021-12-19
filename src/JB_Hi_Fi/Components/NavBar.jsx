import React from "react"
import { useLocation } from "react-router-dom"
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap"

// import routes from "../Utls/Router"

export const NavBar = () => {
  // const location = useLocation()
  // const getBrandText = () => {
  //   for (let i = 0; i < routes.length; i++) {
  //     if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
  //       // if the return value of indexOf() is -1, then it cannot find the match item.
  //       return routes[i].name
  //       // if routes[i].layout + routes[i].path is current location, then return the component name
  //     }
  //   }
  //   // else return "Brand"
  //   return "Brand"
  // }

  return (
    <>
      <p>This is NavBar</p>
    </>
  )
}

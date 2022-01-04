import React, { useState, useRef } from "react"
import { useLocation } from "react-router-dom"
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap"
import { useAuth } from "../Data/AuthProvider"
// import routes from "../Utls/Router"

export const NavBar = ({ setSidebarOpen, sidebarOpen }) => {
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
  const { logStatus, setLogStatus } = useAuth()
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar-main">
        <Container>
          <Navbar.Brand href="#home" style={{ width: "120px" }}>
            <h4
              onClick={() => {
                setSidebarOpen(!sidebarOpen)
              }}>
              {sidebarOpen ? "𝖎𝖓𝖛𝖊𝖗𝖙" : "𝕸𝖊𝖓𝖚​​​​​"}
            </h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#fleetOrders">Orders</Nav.Link>
              <Nav.Link href="#equipmentsManagement">Equipments Management</Nav.Link>
              <NavDropdown title="Fleet Operation" id="collasible-nav-dropdown">
                <NavDropdown.Item></NavDropdown.Item>
                <NavDropdown.Item>Action2</NavDropdown.Item>
                <NavDropdown.Item>Action3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown title={logStatus ? "Avarile" : "Login"} id="collasible-nav-dropdown">
                {logStatus ? (
                  <NavDropdown.Item
                    href="#action/3.1"
                    onClick={() => {
                      setLogStatus(!logStatus)
                    }}
                    className="navbar-login-dropdown">
                    Logout
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item
                    href="#action/3.1"
                    onClick={() => {
                      setLogStatus(!logStatus)
                    }}>
                    Login
                  </NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

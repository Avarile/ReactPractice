import React, { useState, useRef } from "react"
import { useLocation } from "react-router-dom"
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap"

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

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <h4
              onClick={() => {
                setSidebarOpen(!sidebarOpen)
              }}>
              {sidebarOpen ? "Hide SideBar" : "Show SideBar"}
            </h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

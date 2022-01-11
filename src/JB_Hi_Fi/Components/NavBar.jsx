import React, { useState, useRef, useEffect } from "react"
import { useLocation, NavLink } from "react-router-dom"
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap"
import { useAuth } from "../Data/AuthProvider"
import { routesMap } from "../Utls/Router"
import { useApiData } from "../Data/ApiProvider"
import useAudio from "../Utls/MusicPlayer"
import BGM from "../Assets/bgm.mp3"
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
  const { FakeSignin, FakeLogout, logState, setLogState } = useAuth()

  const { setOperationSelector } = useApiData()

  const [playing, setPlaying, toggle] = useAudio(BGM)

  useEffect(() => {
    if (logState) {
      setPlaying(true)
    } else {
      setPlaying(false)
    }
  }, [logState])

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
              {/* <Nav.Link href="#fleetOrders">Orders</Nav.Link>
              <Nav.Link href="/admin/equipmentsManagement">Equipments Management</Nav.Link>
              <NavDropdown title="Fleet Operation" id="collasible-nav-dropdown">
                <NavDropdown.Item></NavDropdown.Item>
                <NavDropdown.Item>Action2</NavDropdown.Item>
                <NavDropdown.Item>Action3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Separated link</NavDropdown.Item>
              </NavDropdown> */}
              {routesMap.map((route) => {
                return (
                  <Nav.Link key={route.key}>
                    <NavLink to={route.layout + route.path} style={{ textDecoration: "none", fontSize: "20px", color: "white", textShadow: "2px, 2px, 2px, black" }}>
                      {route.name}
                    </NavLink>
                  </Nav.Link>
                )
              })}
              {/* <NavDropdown title="Fleet Operation" id="collasible-nav-dropdown" style={{ fontSize: "20px", marginLeft: "40px" }}>
                <NavDropdown.Item onClick={() => setOperationSelector("MOVING")}>Move</NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    setOperationSelector("COMBAT")
                  }}>
                  Combat
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    setOperationSelector("DOCKING")
                  }}>
                  Dock
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    setOperationSelector("IDLE")
                  }}>
                  Stop
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <NavDropdown title={logState ? "Avarile" : "Login"} id="collasible-nav-dropdown">
                {logState ? (
                  <NavDropdown.Item
                    // href="#login"
                    onClick={() => {
                      FakeLogout()
                      setLogState(false)
                    }}
                    className="navbar-login-dropdown">
                    Logout
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item
                    // href="#logout"
                    onClick={() => {
                      FakeSignin()
                      setLogState(true)
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

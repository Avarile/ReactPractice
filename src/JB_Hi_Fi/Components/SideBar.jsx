import styled from "styled-components"
import React from "react"
import { Link } from "react-router-dom"
import { Nav, Offcanvas } from "react-bootstrap"
import "./SideBar.css"

export function SideBar({ routes, image, color, sidebarOpen, setSidebarOpen }) {
  return (
    <>
      <Offcanvas
        show={sidebarOpen}
        onHide={() => {
          setSidebarOpen()
        }}
        scroll
        backdrop>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ fontFamily: "Times New Roman", fontSize: "bold", color: "rgb(38, 165, 21)" }}>Route Selection</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home" className="sidebar-link">
              <h4>Link</h4>
            </Nav.Link>
            <Nav.Link href="/home" className="sidebar-link">
              <h4 className="">Link</h4>
            </Nav.Link>
            <Nav.Link href="/home" className="sidebar-link">
              <h4 className="">Link</h4>
            </Nav.Link>

            <Nav.Link eventKey="disabled" disabled className="sidebar-link">
              Disabled
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

const SideBarWrapper = styled.div`
  position: relative;
  max-height: calc(100vh - 75px);
  min-height: 100%;
  overflow: auto;
  width: 260px;
  z-index: 4;
  padding-bottom: 100px;
`
const SideBarBackgroundWrapper = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  display: block;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props.bgImage || ""});
`

import styled from "styled-components"
import React from "react"
import { Link } from "react-router-dom"
import { Nav, Offcanvas, Card } from "react-bootstrap"

export function SideBar({ routes, image, color, sidebarOpen, setSidebarOpen }) {
  return (
    <>
      <Offcanvas
        show={sidebarOpen}
        onHide={() => {
          setSidebarOpen()
        }}
        scroll
        backdrop
        className="sidebar-main-container">
        <SideBarContentWrapper>
          <Offcanvas.Header
            closeButton
            style={{
              backgroundColor: "grey",
              margin: "5px",
              borderRadius: "20px  0px 20px 0px",
              opacity: "0.8",
            }}>
            <Offcanvas.Title style={{ fontFamily: "Times New Roman", fontSize: "bold", color: "rgb(17, 6, 1)" }}>Route Selection</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Card className="bg-dark text-white" className="sidebar-link">
                <Card.Img src="holder.js/100px270" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
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
        </SideBarContentWrapper>
      </Offcanvas>
    </>
  )
}

const SideBarContentWrapper = styled.div`
  padding: 2px;
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

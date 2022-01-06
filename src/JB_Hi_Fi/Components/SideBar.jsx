import styled from "styled-components"
import React from "react"
import { Link } from "react-router-dom"
import { Nav, Offcanvas, Card } from "react-bootstrap"

export function SideBar({ sidebarOpen, setSidebarOpen }) {
  const DisplaySelector = (currentOperation) => {
    switch (currentOperation) {
      case "IDLE":
        setSidebarOpen(true)

        break

      default:
        break
    }
  }
  return (
    <>
      <Offcanvas
        show={sidebarOpen}
        onHide={() => {
          setSidebarOpen()
        }}
        placement="end"
        scroll
        backdrop
        className="sidebar-main-container">
        <SideBarContentWrapper></SideBarContentWrapper>
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

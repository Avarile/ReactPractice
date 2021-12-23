import React, { useState, useRef } from "react"
import { useAuth } from "../Data/AuthProvider"
import styled from "styled-components"
import Offcanvas from "react-bootstrap/Offcanvas"
import backGround from "../Assets/bgs/bg2.jpg"

export const NotLoginScreen = () => {
  const { logStatus, setLogStatus } = useAuth()

  return <NoPilotLogin show={!logStatus} backdrop={false}></NoPilotLogin>
}

const NoPilotLogin = styled(Offcanvas)`
  margin-top: 80px;
  height: calc(100vh - 80px);
  width: 100%;
  background: url(${backGround}) no-repeat center;
  background-color: rgb(34, 33, 32);
  z-index: 1;
`

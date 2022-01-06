import React from "react"
import styled, { keyframes } from "styled-components"
import { useApiData } from "../Data/ApiProvider"

const BreathingColor = keyframes`
  from
    {
        background-color: ${(props) => props.statusFooterColor};
    }
    to
    {
        background-color: #ffffff3e;
    }
`
const FooterMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50px;
  background-color: ${(props) => props.statusFooterColor || `black`};
  animation-name: ${BreathingColor};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  margin-top: 10px;
`

const FooterStatusTextDisplay = styled.h4`
  position: relative;
  top: 5px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: ${(props) => props.textColor || "white"};
  font-stretch: extra-expanded;
  font-size: 2rem;
`

function Footer(currentStatus) {
  const { operationSelector } = useApiData()
  const StatusBarSwitch = (currentStatus) => {
    switch (currentStatus) {
      case "COMBAT":
        return {
          statusFooterColor: "red",
          FooterText: "COMBAT",
        }
      case "MOVING":
        return {
          statusFooterColor: "blue",
          FooterText: "TRAVERSING",
        }
      case "DOCKING":
        return {
          statusFooterColor: "grey",
          FooterText: "DOCKING",
        }
      default:
        return {
          statusFooterColor: "orange",
          FooterText: "IDLE",
        }
    }
  }

  return (
    <>
      <FooterMainContainer {...StatusBarSwitch(operationSelector)}>
        <FooterStatusTextDisplay>{StatusBarSwitch(operationSelector).FooterText}</FooterStatusTextDisplay>
      </FooterMainContainer>
    </>
  )
}

export default Footer

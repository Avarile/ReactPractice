import React from "react"
import styled from "styled-components"

const FooterMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50px;
  background-color: ${(props) => props.statusFooterColor || `black`};
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
      case "IDLE":
        return {
          statusFooterColor: "orange",
          FooterText: "IDLE",
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
      <FooterMainContainer {...StatusBarSwitch(currentStatus)}>
        <FooterStatusTextDisplay>{StatusBarSwitch(currentStatus).FooterText}</FooterStatusTextDisplay>
      </FooterMainContainer>
    </>
  )
}

export default Footer

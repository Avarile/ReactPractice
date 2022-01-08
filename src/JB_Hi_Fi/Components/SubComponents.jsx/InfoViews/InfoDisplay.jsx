import React from "react"
import Nav from "react-bootstrap/Nav"
import styled from "styled-components"

// a solid text window or table display the transfer and battle log

export const InfoDisplay = (log, LogDisplayer) => {
  // const [logInstance, setLogInstance] = React.useState([])

  // LogDisplayer(log, setLogInstance)

  return (
    <>
      <LogDisplayWindow>
        {/* {logInstance.map((logItem, index) => {
          return (
            <p key={index} style={{ fontFamily: "monospace" }}>
              {logItem}
            </p>
          )
        })} */}
        <p style={{ color: "white" }}>
          <strong>Player </strong> Avarile's
          <em>Torletor Class Heave Crusier</em> dealt <strong>48 damage </strong> to <strong>Player </strong>
          闲的啊强's
          <em>Vanguard Class BattleCrusier</em>
        </p>
      </LogDisplayWindow>
    </>
  )
}
//  this is acturally a Dependency Injection, we can easily change LogDisplayer or log (as long as the API is the same)
// Usage:
//  <LogDisplayWindow log={logRequired}  LogDisplayer={logDisplayerRequired} />

const LogDisplayWindow = styled.div`
  height: 100%;
  border: 2px solid rgba(0, 0, 0, 0.1);
  margin: 3px;
  padding: 5px;
  overflow-y: scroll;
`
const SingleLogItem = styled.p``

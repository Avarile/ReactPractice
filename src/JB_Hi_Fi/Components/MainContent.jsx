import React from "react"
import styled from "styled-components"
import { MainSelectionTable } from "./SubComponents.jsx/MainSelectionTable"

// 100% - 80px(Navbar) -60px(footer)
const MainContentContainer = styled.div`
  display: grid;
  grid-template-columns: 8fr 4fr;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 0px;
  height: calc(100vh - 80px - 60px);
  overflow: auto;
`

const MainContentDisplay = styled.div`
  height: 100%;
  display: block;
  background-color: coral;
  box-shadow: 4px 5px 4px 1px grey;
`
const MainContentInfo = styled.div`
  height: 100%;
  display: block;
  background-color: #3f5a0c;
  box-shadow: 4px 5px 4px 1px grey;
  overflow: auto;
`

function MainContent() {
  return (
    <>
      <MainContentContainer>
        <MainContentDisplay>
          <MainSelectionTable />
        </MainContentDisplay>
        <MainContentInfo />
      </MainContentContainer>
    </>
  )
}

export default MainContent

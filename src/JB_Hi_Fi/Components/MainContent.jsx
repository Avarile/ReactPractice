import React from "react"
import styled from "styled-components"
import { MainSelectionTable } from "./SubComponents.jsx/MainSelectionTable"
import { InfoDisplay } from "./SubComponents.jsx/InfoDisplay"
import { ApiHttpCall } from "../Utls/Utility"
import { useComponentDidMount } from "../../hooksLib/useMount"
import MainContentBG from "../Assets/bgs/MainContentBG2.jpg"

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
  background-color: #e9e7e7;
  /* background-image: url(${MainContentBG}) cover; */
  box-shadow: 4px 5px 4px 1px grey;
`
const MainContentInfo = styled.div`
  height: 100%;
  display: block;
  background-color: #324908;
  box-shadow: 4px 5px 4px 1px grey;
  overflow: hidden;
`

function MainContent() {
  // Well this is a FUCKING DEMO so forgive me I DID a "Avarile" here
  return (
    <>
      <MainContentContainer>
        <MainContentDisplay>
          <MainSelectionTable />
        </MainContentDisplay>
        <MainContentInfo>
          <InfoDisplay />
        </MainContentInfo>
      </MainContentContainer>
    </>
  )
}

export default MainContent

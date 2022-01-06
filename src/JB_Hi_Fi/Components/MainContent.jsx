import React from "react"
import styled from "styled-components"
import MainContentBG from "../Assets/bgs/MainContentBG2.jpg"
import { routesMap } from "../Utls/Router"
import { Switch, Route } from "react-router-dom"

import { DestinationSelection } from "./SubComponents.jsx/InfoViews/DestinationSelection"
import { DockedView } from "./SubComponents.jsx/InfoViews/DockedView"
import { IdleView } from "./SubComponents.jsx/InfoViews/IdleView"
import { InfoDisplay } from "./SubComponents.jsx/InfoDisplay"

import { ApiDataProvider, useApiData } from "../Data/ApiProvider"

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

  const { operationSelector } = useApiData()

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return <Route path={prop.layout + prop.path} render={(props) => <prop.component {...props} />} key={key} />
      } else {
        return null
      }
    })
  }

  const InfoViewSelector = (status) => {
    switch (status) {
      case "IDLE":
        return <IdleView />

      case "COMBAT":
        return <InfoDisplay />

      case "DOCKING":
        return <DockedView />

      case "MOVING":
        return <DestinationSelection />
      default:
        return <IdleView />
        break
    }
  }

  return (
    <>
      <MainContentContainer>
        <MainContentDisplay>
          <Switch>{getRoutes(routesMap)}</Switch>
        </MainContentDisplay>
        <MainContentInfo>
          {InfoViewSelector(operationSelector)}
        </MainContentInfo>
      </MainContentContainer>
    </>
  )
}

export default MainContent

// this Table should receive multiple data source and render as we need

import React from "react"
import Table from "react-bootstrap/Table"

import { useApiData } from "../../Data/ApiProvider"

export const MainSelectionTable = (dataSource) => {
  const { shipData } = useApiData()

  console.log(shipData[0])

  return (
    <>
      <Table striped bordered hover responsive="lg" style={{ color: "white" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Model</th>
            <th>Endurence</th>
            <th>MainWeapon</th>
            <th>SecondaryWeapon</th>
            <th>AssistantWeapon</th>
            <th>Speed</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>  </tr>
        </tbody>
      </Table>
    </>
  )
}

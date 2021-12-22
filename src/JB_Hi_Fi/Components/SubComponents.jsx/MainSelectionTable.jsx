// this Table should receive multiple data source and render as we need

import React from "react"
import Table from "react-bootstrap/Table"

export const MainSelectionTable = (dataSource) => {
  return (
    <>
      <Table striped bordered hover responsive="lg">
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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

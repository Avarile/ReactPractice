// this Table should receive multiple data source and render as we need

import React from "react"
import Table from "react-bootstrap/Table"

import { useApiData } from "../../Data/ApiProvider"

export const MainSelectionTable = (dataSource) => {
  const { playerData, shipData } = useApiData()

  const player1 = { ...playerData[0] } // for the json-server is not entirely functional as a backend server --- it's not designed to anyway.
  const { ship_1, ship_1_class, ship_1_endurance, ship_1_status, ship_2, ship_2_class, ship_2_endurance, ship_2_status } = player1

  const getPlayerShip = (shipNum) => {
    const playerShipData1 = { ...shipData.find((ship) => ship.class === ship_1_class), name: ship_1, ship_1_endurance: ship_1_endurance, status: ship_1_status }
    const playerShipData2 = { ...shipData.find((ship) => ship.class === ship_2_class), name: ship_2, ship_2_endurance: ship_2_endurance, status: ship_2_status }
    // const player3ShipData = { ...shipData.find((ship) => ship.class === ship_3_class), name: ship_3, ship_2_endurance: ship_3_endurance }

    switch (shipNum) {
      case "ship1":
        return playerShipData1
      case "ship2":
        return playerShipData2
      default:
        return [playerShipData1, playerShipData2]
    }
  }

  return (
    <>
      <Table striped bordered hover responsive="lg">
        <thead>
          <tr>
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
          {getPlayerShip().map((ship) => {
            return (
              <tr key={ship.name}>
                <td>{ship.name}</td>
                <td>{ship.class}</td>
                <td>{ship.model}</td>
                <td>
                  HP:{ship.endurance}/Armor:{ship.armor}
                </td>
                <td>{ship.mainweapon}</td>
                <td>{ship.secondaryweapon}</td>
                <td>{ship.assitantweapon}</td>
                <td>
                  Max:{ship.speed}/Acce{ship.acceleration}
                </td>
                <td>{ship.status}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

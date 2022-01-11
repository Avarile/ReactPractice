import React from "react"
import { useApiData } from "../../../Data/ApiProvider"
import Table from "react-bootstrap/Table"

export const Weaponary = () => {
  const { weaponData, getPlayerShip } = useApiData()

  return (
    <Table striped hover bordered>
      <thead>
        <tr>
          <th>Name</th>
          <th>FirePower</th>
          <th>Max-Range</th>
          <th>Optimal-Range</th>
          <th>Armor-Piercing</th>
          <th>Fire-Interval</th>
          <th>Reload</th>
          <th>BaseHitRate</th>
          <th>Max-Shell</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {weaponData.map((weapon) => {
          return (
            <tr key={weapon.name}>
              <td>{weapon.name}</td>
              <td>{weapon.firepower}</td>
              <td>{weapon["max-range"]}</td>
              <td>{weapon["optimal-range"]}</td>
              <td>{weapon["armor-piercing"]}</td>
              <td>{weapon["fireinterval"]}</td>
              <td>{weapon["reload"]}</td>
              <td>{weapon["basehitrate"]}</td>
              <td>{weapon["max-shell"]}</td>
              <td>{weapon["desc"]}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

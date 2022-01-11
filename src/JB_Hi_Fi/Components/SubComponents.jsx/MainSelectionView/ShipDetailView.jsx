import React from "react"
import { useParams } from "react-router-dom"
import { useApiData } from "../../../Data/ApiProvider"
import { shipPics } from "../../../Data/Pics"

import Image from "react-bootstrap/Image"
import Table from "react-bootstrap/Table"

import styled from "styled-components"

export const ShipDetailView = ({ props }) => {
  let { shipName } = useParams()
  const { getPlayerShip } = useApiData()

  const Data = {
    ...getPlayerShip().find((ship) => {
      return ship.name === shipName
    }),
    pic: shipPics[
      getPlayerShip().find((ship) => {
        return ship.name === shipName
      }).class
    ],
  }

  return (
    <>
      <MainContainer>
        <h4>
          {Data.name}, a {Data.class} class Assualt Cruiser{" "}
        </h4>
        <Image src={Data.pic} width={200} />

        <h5 styVle={{ marginTop: "2rem" }}>Basic Stats</h5>
        <Table>
          <thead>
            <tr>
              <th>Endurance</th>
              <th>Status</th>
              <th>Armor</th>
              <th>Description</th>
              <th>Speed</th>
              <th>Accelaration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{Data.endurance}</td>
              <td>{Data.status}</td>
              <td>{Data.armor}</td>
              <td>{Data.desc}</td>
              <td>{Data.speed}</td>
              <td>{Data.acceleration}</td>
            </tr>
          </tbody>
        </Table>
        <h5 styVle={{ marginTop: "2rem" }}>Weapon States</h5>
        <Table>
          <thead>
            <tr>
              <th>MainWeapon</th>
              <th>MainWeapon-Quantity</th>
              <th>SecondaryWeapon</th>
              <th>SecondaryWeapon-Quantity</th>
              <th>AssitantWeapon</th>
              <th>AssitantWeapon-Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{Data.mainweapon}</td>
              <td>{Data.mainweaponinstallment}</td>
              <td>{Data.secondaryweapon}</td>
              <td>{Data.secondaryweaponinstallment}</td>
              <td>{Data.assitantweapon}</td>
              <td>{Data.assitantweaponinstallment}</td>
            </tr>
          </tbody>
        </Table>
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 5px;
`

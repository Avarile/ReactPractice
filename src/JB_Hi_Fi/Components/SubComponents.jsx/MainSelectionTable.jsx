// this Table should receive multiple data source and render as we need

import React, { useState } from "react"
import styled from "styled-components"
import Table from "react-bootstrap/Table"

import Image from "react-bootstrap/Image"

import { useApiData } from "../../Data/ApiProvider"

import { shipPics } from "../../Data/Pics"

export const MainSelectionTable = () => {
  const { playerData, shipData, weaponData, spaceCraftData, getPlayerShip, getEnemyShip } = useApiData()

  return (
    <>
      <Table striped bordered hover responsive="lg">
        <thead>
          <tr>
            <th style={{ width: "120px" }}>Name</th>
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
              <>
                <tr key={ship.name}>
                  <td>
                    {ship.name}
                    <div>
                      <Image thumbnail src={shipPics[`${ship.class}`]} style={{ width: "50px" }} />
                    </div>
                  </td>
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
              </>
            )
          })}
        </tbody>
      </Table>

      {getPlayerShip().map((ship) => {
        return (
          <>
            <ShipWeaponIndex key={ship.name}>
              <p>{ship.name}</p>
              <WeaponList>
                {weaponData.map((weapon) => {
                  if (weapon.name === ship.mainweapon) {
                    return (
                      <SingleWeaponContainer key={weapon.name}>
                        <WeaponStatesName>{weapon.name}</WeaponStatesName>
                        <WeaponStatesFP>
                          {weapon.firepower}x{ship.mainweaponinstallment}
                        </WeaponStatesFP>
                      </SingleWeaponContainer>
                    )
                  }
                })}
                {weaponData.map((weapon) => {
                  if (weapon.name === ship.secondaryweapon) {
                    return (
                      <SingleWeaponContainer key={weapon.name}>
                        <WeaponStatesName>{weapon.name}</WeaponStatesName>
                        <WeaponStatesFP>
                          {weapon.firepower}x{ship.secondaryweaponinstallment}
                        </WeaponStatesFP>
                      </SingleWeaponContainer>
                    )
                  }
                })}
                {weaponData.map((weapon) => {
                  if (weapon.name === ship.assitantweapon) {
                    return (
                      <SingleWeaponContainer key={weapon.name}>
                        <WeaponStatesName>{weapon.name}</WeaponStatesName>

                        {weapon.firepower ? (
                          <WeaponStatesFP>
                            {weapon.firepower}X{ship.assitantweaponinstallment}
                          </WeaponStatesFP>
                        ) : (
                          <WeaponStatesFP>
                            <p>AirCrafts</p>
                          </WeaponStatesFP>
                        )}
                      </SingleWeaponContainer>
                    )
                  }
                })}
              </WeaponList>
            </ShipWeaponIndex>
          </>
        )
      })}
    </>
  )
}

const ShipWeaponIndex = styled.div`
  display: grid;
  grid-template-columns: 1fr 11fr;
  grid-column-gap: 10px;
  overflow: auto;
  padding: 4px;

  height: 200px;
  padding: 5px;

  margin-top: 40px;
`
const WeaponList = styled.div`
  display: flex;
  flex-direction: column;
`
const SingleWeaponContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const WeaponStatesFP = styled.div`
  margin-left: 5px;
  color: #c50808;
`

const WeaponStatesName = styled.div`
  width: 500px;
  color: rgb(141, 64, 12);
`
const WeaponProgress = styled.h4`
  font-size: 20px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`

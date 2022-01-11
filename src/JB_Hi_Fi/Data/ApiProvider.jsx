import React, { useState, useEffect } from "react"
import axios from "axios"
import { useAxios, refineObject, useDebounce } from "../Utls/TroopersRelated"
import qs from "query-string"

const ApiDataContext = React.createContext(undefined)

ApiDataContext.displayName = "ApiDataContext"

export const ApiDataProvider = ({ children }) => {
  const [playerData, setPlayerData] = useState({})
  const [targetPlayerData, setTargetPlayerData] = useState({})
  const [shipData, setShipData] = useState([])
  const [weaponData, setWeaponData] = useState([])
  const [spaceCraftData, setSpaceCraftData] = useState([])
  const [operationSelector, setOperationSelector] = React.useState("IDLE")
  const [destinationData, setDestinationData] = useState([])
  const TestData = {
    Mock: "I am Fucking Mock Data",
  }

  // Troopers related Data
  const [searchParams, setSearchParams] = useState({
    name: "",
    function: "",
  })
  const apiUrl = "http://localhost:4000"

  const debouncedSearchParams = useDebounce(searchParams, 1500)

  const { response: TroopsResponse } = useAxios(
    {
      method: "GET",
      url: `${apiUrl}/TROOPERS?${qs.stringify(refineObject(debouncedSearchParams))}`,
      header: {},
      data: {},
    },
    debouncedSearchParams
  )

  console.log(TroopsResponse)

  // End of Troopers related data

  const usePlayerData = (playerName) => {
    useEffect(() => {
      axios
        .request({
          method: "get",
          url: `http://localhost:4000/PLAYERS?name=${playerName}`,
        })
        .then((response) => {
          setPlayerData(response.data)
        })
        .catch((error) => {
          throw new Error(error)
        })
    }, [])
  }

  useEffect(() => {
    axios
      .request({
        method: "get",
        url: "http://localhost:4000/PLAYERS?name=Avarile",
      })
      .then((response) => {
        setPlayerData(response.data)
      })
      .catch((error) => {
        throw new Error(error)
      })

    axios
      .request({
        method: "get",
        url: "http://localhost:4000/SHIPS",
      })
      .then((response) => {
        setShipData(response.data)
      })
      .catch((error) => {
        throw new Error(error)
      })

    axios
      .request({
        method: "get",
        url: "http://localhost:4000/WEAPONS",
      })
      .then((response) => {
        setWeaponData(response.data)
      })
      .catch((error) => {
        throw new Error(error)
      })

    axios
      .request({
        method: "get",
        url: "http://localhost:4000/SPACECRAFTS",
      })
      .then((response) => {
        setSpaceCraftData(response.data)
      })
      .catch((error) => {
        throw new Error(error)
      })

    axios
      .request({
        method: "get",
        url: "http://localhost:4000/DESTINATIONS",
      })
      .then((response) => {
        setDestinationData(response.data)
      })
      .catch((error) => {
        throw new Error(error)
      })
  }, [])

  // export const FleetOperation = (operation) => {
  //   switch (operation) {
  //     case "move":
  //       setOperationSelector({
  //         ...operationSelector,
  //         status: "MOVE",
  //       })
  //       localStorage.setItem("operationStatus", "MOVE")

  //     case "idle":
  //       setOperationSelector({
  //         ...operationSelector,
  //         status: "IDLE",
  //       })

  //     case "combat":
  //       setOperationSelector({
  //         ...operationSelector,
  //         status: "COMBAT",
  //       })

  //     case "dock":
  //       setOperationSelector({
  //         ...operationSelector,
  //         status: "DOCK",
  //       })
  //     default:
  //       break
  //   }
  // }

  // define the playerDatas
  const player1 = { ...playerData[0] } // for the json-server is not entirely functional as a backend server --- it's not designed to anyway.
  const enemy = { ...playerData[1] }

  // get the data ready for detailed playShipDatas
  const { ship_1, ship_1_class, ship_1_endurance, ship_1_status, ship_2, ship_2_class, ship_2_endurance, ship_2_status } = player1
  const {
    enemy_ship_1,
    enemy_ship_1_class,
    enemy_ship_1_endurance,
    enemy_ship_1_status,
    enemy_ship_2,
    enemy_ship_2_class,
    enemy_ship_2_endurance,
    enemy_ship_2_status,
    enemy_ship_3,
    enemy_ship_3_class,
    enemy_ship_3_endurance,
    enemy_ship_3_status,
  } = enemy

  // compose playerShipdata
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

  // compose enemyShipData
  const getEnemyShip = (shipNum) => {
    const enemyShipData1 = { ...shipData.find((ship) => ship.class === enemy_ship_1_class), name: enemy_ship_1, ship_1_endurance: enemy_ship_1_endurance, status: enemy_ship_1_status }

    const enemyShipData2 = { ...shipData.find((ship) => ship.class === enemy_ship_2_class), name: enemy_ship_2, ship_2_endurance: enemy_ship_2_endurance, status: enemy_ship_2_status }

    const enemyShipData3 = { ...shipData.find((ship) => ship.class === enemy_ship_3_class), name: enemy_ship_3, ship_2_endurance: enemy_ship_3_endurance, status: enemy_ship_3_status }

    switch (shipNum) {
      case "ship1":
        return enemyShipData1
      case "ship2":
        return enemyShipData2
      case "ship3":
        return enemyShipData3
      default:
        return [enemyShipData1, enemyShipData2, enemyShipData3]
    }
  }
  return (
    <ApiDataContext.Provider
      children={children}
      value={{
        playerData,
        setPlayerData,
        shipData,
        setShipData,
        weaponData,
        setWeaponData,
        spaceCraftData,
        setSpaceCraftData,
        targetPlayerData,
        setTargetPlayerData,
        operationSelector,
        setOperationSelector,
        getPlayerShip,
        getEnemyShip,
        searchParams,
        setSearchParams,
        TroopsResponse,
        destinationData,
        setDestinationData,
      }}
    />
  )
}

export const useApiData = () => {
  const context = React.useContext(ApiDataContext)
  // if the context is not available throw error
  if (!context) {
    throw new Error("useApiData must be used in the ApiProvider")
  }
  return context
}

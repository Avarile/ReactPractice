import React, { useState, useEffect } from "react"
import { ApiHttpCall, ApiCallController } from "../Utls/Utility"
import axios from "axios"

const ApiDataContext = React.createContext(undefined)

ApiDataContext.displayName = "ApiDataContext"

export const ApiDataProvider = ({ children }) => {
  const [playerData, setPlayerData] = useState({})
  const [targetPlayerData, setTargetPlayerData] = useState({})
  const [shipData, setShipData] = useState([])
  const [weaponData, setWeaponData] = useState([])
  const [spaceCraftData, setSpaceCraftData] = useState([])
  const [operationSelector, setOperationSelector] = React.useState("IDLE")
  const TestData = {
    Mock: "I am Fucking Mock Data",
  }

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

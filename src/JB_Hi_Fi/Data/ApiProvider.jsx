import React, { useState, useEffect } from "react"
import { ApiHttpCall, ApiCallController } from "../Utls/Utility"
import axios from "axios"

const ApiDataContext = React.createContext(undefined)

ApiDataContext.displayName = "ApiDataContext"

export const ApiDataProvider = ({ children }) => {
  const [shipData, setShipData] = useState({})
  const TestData = {
    Mock: "I am Fucking Mock Data",
  }

  useEffect(() => {
    axios
      .request({
        method: "get",
        url: "http://localhost:4000/players?name=Avarile",
      })
      .then((response) => {
        setShipData(response.data)
      })
      .catch((error) => {
        throw new Error(error)
      })
  }, [])

  return <ApiDataContext.Provider children={children} value={{ TestData, shipData, setShipData }} />
}

export const useApiData = () => {
  const context = React.useContext(ApiDataContext)
  // if the context is not available throw error
  if (!context) {
    throw new Error("useApiData must be used in the authProvider")
  }
  return context
}

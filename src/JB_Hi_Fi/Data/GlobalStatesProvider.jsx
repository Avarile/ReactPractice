import React, { useState } from "react"
import { useLocalStorageState } from "../../hooksLib/useLocalStorageState"

const GlobalStatesContext = React.createContext(undefined)
GlobalStatesContext.displayName = "GlobalStatesContext"

export const GlobalStatesProvider = ({ children }) => {
  const [fleetStatus, setFleetStatus] = useState("DOCKING") // ["DOCKING", "COMBAT", "MOVING", "IDLE"]
  return <GlobalStatesContext.Provider children={children} value={{ fleetStatus, setFleetStatus }} />
}

export const useGlobalStates = () => {
  const context = React.useContext(GlobalStatesContext)
  // if the context is not available throw error
  if (!context) {
    throw new Error("useGlobalStates must be used in the authProvider")
  }
  return context
}

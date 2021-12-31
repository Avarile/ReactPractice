import React from "react"
import { useComponentDidMount, ApiHttpCall, ApiCallController } from "../Utls/Utility"

const ApiContext = React.createContext(undefined)
ApiContext.displayName = "ApiContext"

export const ApiProvider = ({ children }) => {
  const testResponse = ApiHttpCall({
    endPoint: "players?name=Avarile",
  })

  const AuthToken = { Token: "Bear" }

  return <ApiContext.Provider children={children} value={(AuthToken, testResponse)} />
}



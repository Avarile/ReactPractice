import React from "react"

const ApiContext = React.createContext(undefined)
ApiContext.displayName = "ApiContext"

export const ApiProvider = ({ children }) => {
  const AuthToken = { Token: "Bear" }

  return <ApiContext.Provider children={children} value={AuthToken} />
}

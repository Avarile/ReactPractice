import React from 'react'

const ApiContext = React.createContext(undefined)
ApiContext.displayName = "ApiContext"

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider
      children={children}
      value={ }
    />
)
}

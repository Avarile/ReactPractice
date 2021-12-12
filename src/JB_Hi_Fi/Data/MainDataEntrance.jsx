import React from "react"
import { AuthProvider } from "./AuthProvider"
import { ApiProvider } from "./ApiProvider"

//  AppProviders is the Root ContextProvider.  As the App scale varialbe Provider
export const MainDataProviders = ({ children }) => {
  return (
    <AuthProvider>
      <ApiProvider>{children}</ApiProvider>
    </AuthProvider>
  )
}

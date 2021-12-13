import React from "react"
import { AuthProvider } from "./AuthProvider"
import { ApiProvider } from "./ApiProvider"
import { QueryClient, QueryClientProvider } from "react-query"

// init a new instance of QueryClient
const queryClient = new QueryClient()

//  AppProviders is the Root ContextProvider.  As the App scale varialbe Provider
export const MainDataProviders = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ApiProvider>{children}</ApiProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}

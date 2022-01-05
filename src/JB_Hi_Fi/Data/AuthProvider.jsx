import React, { useState, useEffect } from "react"
import { useLocalStorageState } from "../../hooksLib/useLocalStorageState"
import axios from "axios"
import { apiUrlLogin } from "./AppScaleData"

const AuthContext = React.createContext(undefined)
AuthContext.displayName = "AuthContext"

export const AuthProvider = ({ children }) => {
  // auth functions
  // const [user, setUser] = useState(null)
  // const [token, setToken] = useLocalStorageState("authenticationToken", null)

  // const handleUserResponse = (user) => {
  //   setToken(user.token || "")
  //   setUser(user)
  //   return user?.username
  // }

  // const Login = (params) => {
  //   return axios
  //     .request({
  //       method: "POST",
  //       url: `${apiUrlLogin}/USERS`,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       data: JSON.stringify(params),
  //     })
  //     .then(async (response) => {
  //       if (response.data !== undefined) {
  //         return handleUserResponse(await response.data)
  //       } else {
  //         return new Error("Connection failed")
  //       }
  //     })
  // }

  // const Register = async (params) => {
  //   axios
  //     .request({
  //       method: "POST",
  //       url: `${apiUrlLogin}/USERS`,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       data: JSON.stringify(params),
  //     })
  //     .then(async (response) => {
  //       if (response.data) {
  //         handleUserResponse(await response.data)
  //         console.log("Register success!!! Please login.")
  //       } else {
  //         return Promise.request(new Error("Registration failed!"))
  //       }
  //     })
  // }

  // const Logout = async () => {
  //   window.localStorage.removeItem("authenticationToken")
  //   setUser(null)
  // }

  // end of AuthFunctions

  // As we are Mocking everything, that will include auth, so this is start of Mock-authFcuntionsons

  const [logState, setLogState] = useState(false)
  const [persistState, setPersistState] = useLocalStorageState("PersistState", null)

  const FakeSignin = () => {
    setPersistState(true)
  }

  const FakeLogout = () => {
    setPersistState(false)
  }

  // useEffect(() => {
  //   setLogState(persistState)
  // }, [persistState, setPersistState])

  return <AuthContext.Provider children={children} value={{ logState, setLogState, persistState, setPersistState, FakeSignin, FakeLogout }} />
}

export const useAuth = () => {
  const context = React.useContext(AuthContext)
  // if the context is not available throw error
  if (!context) {
    throw new Error("useAuth must be used in the authProvider")
  }
  return context
}

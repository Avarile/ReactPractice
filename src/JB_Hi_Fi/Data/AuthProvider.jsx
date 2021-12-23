import React, { useState } from "react"
import { useLocalStorageState } from "../../hooksLib/useLocalStorageState"
import axios from "axios"
import { apiUrlLogin } from "./AppScaleData"

const AuthContext = React.createContext(undefined)
AuthContext.displayName = "AuthContext"

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useLocalStorageState("authenticationToken", null)

  const handleUserResponse = (user) => {
    setToken(user.token || "")
    setUser(user)
    return user?.username
  }

  // logStatus is a mock login status cuz the Login function is not exist right now
  const [logStatus, setLogStatus] = useState(false)

  const Login = (params) => {
    return axios
      .request({
        method: "POST",
        url: `${apiUrlLogin}/USERS`,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(params),
      })
      .then(async (response) => {
        if (response.data !== undefined) {
          return handleUserResponse(await response.data)
        } else {
          return new Error("Connection failed")
        }
      })
  }

  const Register = async (params) => {
    axios
      .request({
        method: "POST",
        url: `${apiUrlLogin}/USERS`,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(params),
      })
      .then(async (response) => {
        if (response.data) {
          handleUserResponse(await response.data)
          console.log("Register success!!! Please login.")
        } else {
          return Promise.request(new Error("Registration failed!"))
        }
      })
  }

  const Logout = async () => {
    window.localStorage.removeItem("authenticationToken")
    setUser(null)
  }
  return <AuthContext.Provider children={children} value={{ Register, Login, Logout, token, user, setUser, logStatus, setLogStatus }} />
}

export const useAuth = () => {
  const context = React.useContext(AuthContext)
  // if the context is not available throw error
  if (!context) {
    throw new Error("useAuth must be used in the authProvider")
  }
  return context
}

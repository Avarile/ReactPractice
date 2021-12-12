import React, { useState } from "react"
import { useLocalStorageState } from "../../hooksLib/useLocalStorageState"

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
  return <AuthContext.Provider children={children} value={{ Register, Login, Logout, token, user, setUser }} />
}

import React from "react"
import { NavLink } from "react-router-dom"

const SelectNavBar = (routes) => {
  const activeRoute = (routeName) => {
    // this is the function to test if the active route is active
    // the return value is either "active" or ""
    // for the className, this is more than enough to determain if a
    // css class will be shown or not
    return location.pathname.indexOf(routeName) > -1 ? "active" : ""
  }
  
  return (
    <>
      
    </>
  )
}

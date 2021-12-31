import React from "react"

// useComponentWillMount is used for load the data before the first render
export const useComponentWillMount = (callback) => {
  const willMount = React.useRef(true)
  if (willMount.current) {
    callback()
    willMount.current = false
  } else return null
}

// useComponentDidMount is used for load the data after the first render --- at which time the component is already rendered
export const useComponentDidMount = (callback) => {
  React.useEffect(() => {
    callback()
  })
}

import axios from "axios"
import React, { useState, useEffect } from "react"
import qs from "query-string"

export const useAxios = ({ method, apiUrl, endPoint, headers, data, token, ...customConfig }, Dependency) => {
  const [response, setResponse] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  const config = {
    method: "GET",
    url: `${apiUrl}/${endPoint}`,
    headers: {
      Autherization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application /json" : "",
    },
    data: {},
    ...customConfig,
  }

  const apiRequest = (config) => {
    axios
      .request(config)
      .then((response) => setResponse(response.data))
      .catch((error) => setError(error))
      .finally(setIsLoading(false))
  }
  useEffect(() => {
    apiRequest(config)
  }, [Dependency])
  return { response, isLoading, error }
}

// refine the empty Api Param
export const refineObject = (object) => {
  const response = { ...object }

  // equals to const result = Object.assign({}, object)
  Object.keys(response).forEach((key) => {
    const value = response[key]
    // when value === null/undefined/false  but there is a problem that when value is 0, it will still return false,  so we need to deal with this, cuz 0 is still a valid value, and a valid value should not return false.
    if (isVoid(value)) {
      delete response[key]
    }
  })
  return response
}

export const isVoid = (value) => {
  if (value === undefined || value === null || value === "") {
    return true
  } else return false
}
export const isFalsy = (value) => (value === 0 ? false : !value)
// !!value means turn a varialbe into a boolean type

// init a state
export const useMount = (callback) => {
  useEffect(() => {
    callback()
  })
}

export function useDebounce(state, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(state)

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(state)
      }, delay)

      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler)
      }
    },
    [state, delay] // Only re-call effect if value or delay changes
  )

  return debouncedValue
}

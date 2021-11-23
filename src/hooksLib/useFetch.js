import React, { useState, useEffect } from "react"
import axios from "axios"

export default function useAxios(url) {
  const [state, setState] = useState({ data: null, isLoading: true })

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setState({ data: response.data, isLoading: false })
      })
      .then((error) => {
        throw new Error(error)
      })
  }, [url])

  return state
}

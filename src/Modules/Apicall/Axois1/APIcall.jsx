import axios from "axios"
import React, { useState, useEffect } from "react"

export default function APIcall() {
  const [counter, setCounter] = useState(() => JSON.parse(localStorage.getItem("counter")))
  const url = `http://localhost:3001/HEROES_DATA/${counter}`

  // axios.get(url).then((response) => console.log(response.data)).

  const limitNumber = (number) => {
    if (number < 1 || number > 11) {
      number = 1
    } else {
      number = number
    }

    return number
  }

  const { response, error, isLoading } = useAxios({
    url: url,
    method: "get",
  })

  const [data, setData] = useState({})
  useEffect(() => {
    if (response !== null) {
      setData(response)
    } else {
      console.log(error)
    }
  }, [counter])

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(counter))
  }, [counter])

  console.log(data)

  return (
    <>
      {isLoading ? (
        <p>Page is loading</p>
      ) : (
        <>
          <p>{data.id}</p>
        </>
      )}

      <br />
      <button
        onClick={() => {
          setCounter((counter) => limitNumber(counter + 1))
        }}>
        Next Joke
      </button>
      <button
        onClick={() => {
          setCounter((counter) => limitNumber(counter - 1))
        }}>
        Previous Joke
      </button>
    </>
  )
}

export const useAxios = ({ url, method, body = null, headers = null }) => {
  axios.defaults.baseURL = ""

  const [response, setResponse] = useState(null)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = () => {
    axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then((res) => {
        setResponse(res.data)
      })
      .catch((err) => {
        setError(err)
      })

      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [method, url, body, headers])

  return { response, error, isLoading }
}

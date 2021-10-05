import React, { useEffect, useState } from "react"
import axios from "axios"

const client = axios.create({
  baseURL: "",
})

export const Axios2 = () => {
  const [data, setData] = useState({})
  const [selector, setSelector] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const url = `http://localhost:3001/HEROES_DATA/${selector}`

  useEffect(() => {
    async function getData() {
      const response = await client.get(url)
      setData(response.data)
    }
    getData()
  }, [selector, url])

  if (!data) {
    return null
  }

  console.log(data)
  const { name, skill, HP, ATT, DEF, RES } = data

  return (
    <>
      <div className="player-selection-1">
        <p>Hero Name: {name}</p>
        <p>Skill: {skill}</p>
        <p>Stats: </p>
        <p>HP: {HP}</p>
        <p>ATT: {ATT}</p>
        <p>DEF: {DEF}</p>
        <p>RES: {RES}</p>
      </div>

      <button
        onClick={() => {
          setSelector(selector + 1)
        }}>
        Next Hero
      </button>
      <button
        onClick={() => {
          setSelector(selector - 1)
        }}>
        Previous Hero
      </button>
      {selector}
    </>
  )
}

import React, { useEffect, useState } from "react"
import axios from "axios"

const client = axios.create({
  baseURL: "",
})

export default function GroupSelection() {
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
        <p>Please selecte your player</p>
        <p>Hero Name: {name}</p>
        <p>Skill: {skill}</p>
        <p>Stats: </p>
        <p>HP: {HP}</p>
        <p>ATT: {ATT}</p>
        <p>DEF: {DEF}</p>
        <p>RES: {RES}</p>
      </div>

      <div className="enemy-selection-1">
        <p>Please select your enemy</p>
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
      <br />
      <a href="/">Back to Home</a>
    </>
  )
}

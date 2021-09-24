import React, { useEffect, useState } from "react"
import { useAxios } from "../../../useHooks/useAxios"

export default function GroupSelection() {
  const [selector, setSelector] = useState({ heroSelector: 2 })

  const heroUrl = `http://localhost:3001/HEROES_DATA/${selector.heroSelector}`

  const {
    response: hero1Response,
    error: hero1error,
    isLoading: hero1IsLoading,
  } = useAxios({
    method: "get",
    url: heroUrl,
    headers: {
      accept: "*/*",
    },
    data: {},
  })

  // console.log(hero1Response)
  const [player1, setPlayer1] = useState({})

  useEffect(() => {
    if (hero1Response) {
      setPlayer1(hero1Response)
      console.log(player1)
    } else {
      throw new Error("Cannot reach server")
    }
  }, [])

  return (
    <>
      <div>
        <p></p>
      </div>
    </>
  )
}

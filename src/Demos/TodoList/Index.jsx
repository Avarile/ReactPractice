import React, { useEffect, useState } from "react"
import axios from "axios"
import GoodsInfo from "./GoodsInfo"

const client = axios.create({
  baseURL: "",
})

export default function Demo() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const url = `http://localhost:3001/GoodsInfo/`

  useEffect(() => {
    async function getData() {
      const response = await client.get(url)
      setData(response.data)
    }
    getData()
  }, [])

  if (!data) {
    return null
  }
  // console.log(data)

  return (
    <>
      <GoodsInfo tag={data} />
    </>
  )
}

import axios from "axios"
import { useAxios } from "../../../useHooks/useAxios"
import React, { useState } from "react"

export default function Message() {
  const [postText, setPostText] = useState("")
  const postUrl = "http://localhost:3000/messages"
  // const [sendPost, setSendPost] = useState(false)

  const HandlePost = () => {
    axios({
      method: "post",
      url: postUrl,
      headers: { accept: "*/*" },
      data: {
        content: postText,
      },
    })
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
  }

  return (
    <>
      <input
        type="text"
        value={postText}
        onChange={(e) => {
          setPostText(e.target.value)
        }}
      />
      <button
        onClick={() => {
          HandlePost()
        }}>
        Post Message
      </button>
    </>
  )
}

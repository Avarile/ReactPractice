import React from "react"
import { video } from "../Data/Videos"
import styled from "styled-components"
import Modal from "react-bootstrap/Modal"

export const VideoPlayer = ({ selector }) => {
  let currentPlay = video[selector]
  const videoRef = useRef(null)
  

  return (
    <>
      <Modal show fullscreen>
        <video
          src={currentPlay}
          // onEnded={ }
        ></video>
      </Modal>
    </>
  )
}

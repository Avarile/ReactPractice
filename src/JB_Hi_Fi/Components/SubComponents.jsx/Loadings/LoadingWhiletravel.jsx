import React, { useEffect, useState } from "react"
import LoadingAnim from "../../../Assets/pics/Loading.gif"
import styled from "styled-components"

export default function LoadingWhiletravel({ setIsTravelling }) {
  const [visiable, setVisiable] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setVisiable(false)
      setIsTravelling(false)
    }, 3000)
  }, [])

  return (
    visiable && (
      <>
        <LoadingIcon>
          <BlinkingText style={{ marginTop: "40rem" }}>Travelling Animation is underConstruction, this is a PlaceHolder</BlinkingText>
        </LoadingIcon>
      </>
    )
  )
}

const LoadingIcon = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 12;
  text-align: center;
  background: url(${LoadingAnim}) 50% 50% no-repeat rgba(249, 249, 249);
`
const BlinkingText = styled.h2`

  animation: blinker 3s step-start infinite;


  @keyframes blinker {
    50% {
      opacity: 0;
    }
`

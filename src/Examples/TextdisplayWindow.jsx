import React, { useState } from "react"
import styled from "styled-components"
// before the Data passed into the TextDisplayWindow, it should already been processed(the battle data), so I should pipe it.

export const PrintLogControl = (dataSource, logSetter, log) => {
  for (let i = 0; i <= dataSource.length; i++) {
    setTimeout(() => {
      logSetter([...log, dataSource[i]])
    }, 3000)
  }
}

export const TextDisplayWindow = ({ dataSource, logPrintFunc }) => {
  const [logArray, setLogArray] = useState([])

  React.useEffect(() => {
    logPrintFunc(dataSource, setLogArray, logArray)
  }, [logArray])

  return (
    <>
      <TextWindow>
        {logArray.map((logItem, index) => {
          return <p key={index}>{logItem}</p>
        })}
      </TextWindow>
    </>
  )
}

const TextWindow = styled.div`
  height: calc(100vh - 0px);
  margin: 10px, 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
const SingleLog = styled.p``

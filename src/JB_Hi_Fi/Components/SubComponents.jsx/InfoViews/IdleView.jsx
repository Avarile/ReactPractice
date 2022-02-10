import React, { useState } from "react"
import styled from "styled-components"
import DestinationBG from "../../../Assets/bgs/DestinationBG.jpg"
import { useApiData } from "../../../Data/ApiProvider"
import { endPointPics } from "../../../Data/Pics"
import LoadingWhiletravel from "../Loadings/LoadingWhiletravel"
import Image from "react-bootstrap/Image"

export function IdleView() {
  const { destinationData, setDestinationData } = useApiData()
  const [selectedEndpoint, setSelectedEndpoint] = useState({ name: "Earth" })
  const [currentLocation, setCurrentLocation] = useState({ name: "Earth" })
  const [IsTravelling, setIsTravelling] = useState(false)
  // const TravelAnimation =

  // const TravelAction = async (location) => {
  //   const [arrived, setArrived] = useState(false)
  // }

  return (
    <>
      {IsTravelling && <LoadingWhiletravel setIsTravelling={setIsTravelling} />}
      <MainContainer>
        <DestinationContainer>
          <div>
            <p>Destines</p>

            {destinationData.map((endPoint) => {
              if (endPoint.name === currentLocation.name) {
                return null
              } else
                return (
                  <>
                    <DestinationSingle
                      onClick={() => {
                        setSelectedEndpoint({
                          ...endPoint,
                        })
                        console.log(selectedEndpoint)
                      }}>
                      {endPoint.name}
                    </DestinationSingle>
                  </>
                )
            })}
          </div>
          <Image src={endPointPics[selectedEndpoint?.name]} width="400px" style={{ marginTop: "30px", borderRadius: "2rem" }} />
          <div>
            <button
              onClick={() => {
                setIsTravelling(true)
                setCurrentLocation(selectedEndpoint.name)
              }}>
              Travel
            </button>
            <p>
              You are Currently in <strong>{currentLocation.name}</strong>
            </p>
          </div>
        </DestinationContainer>

        <TargetSelectionContainer>
          <p>Targets</p>
        </TargetSelectionContainer>
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  height: 800px;
  padding: 3px;
  margin: 2px;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px 20px;

  border-radius: 2rem;
`
const DestinationContainer = styled.div`
  font-family: "BroadwayRegular";
  font-size: 1rem;
  padding: 5px;
  margin: 5px;
  color: #b1b0b0;
  background-color: white;

  -webkit-transition: all 1s 0s ease;
  -moz-transition: all 1s 0s ease;
  -o-transition: all 1s 0s ease;
  transition: all 1s 0s ease;

  z-index: 0;

  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 2fr 4fr;
  gap: 0px 0px;

  &:hover,
  &:focus {
    color: #a9b2ff;
    background-color: #424242;
    /* background: url(${DestinationBG}) no-repeat center center; */
  }
`
const TargetSelectionContainer = styled.div`
  font-family: "Times New Roman", Times, serif;
  font-size: 1rem;
  padding: 5px;
  margin: 5px;
  color: #b1b0b0;
  background-color: white;

  -webkit-transition: all 1s 0s ease;
  -moz-transition: all 1s 0s ease;
  -o-transition: all 1s 0s ease;
  transition: all 1s 0s ease;

  z-index: 0;

  &:hover,
  &:focus {
    color: #a9b2ff;
    background-color: #424242;
  }
`
const DestinationSingle = styled.p`
  margin-left: 40px;

  -webkit-transition: all 1s 0s ease;
  -moz-transition: all 1s 0s ease;
  -o-transition: all 1s 0s ease;
  transition: all 1s 0s ease;

  &:hover,
  &:focus {
    text-shadow: rgb(2px 2px #5a5a5a);
    cursor: pointer;
    color: darkred;
  }
`
const SelectionContainer = styled.div``

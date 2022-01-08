import React, { useState, useEffect } from "react"
import Form from "react-bootstrap/Form"
import Table from "react-bootstrap/Table"
import Image from "react-bootstrap/Image"
import styled from "styled-components"
import { useApiData } from "../../Data/ApiProvider"
import { trooperPics } from "../../Data/Pics"
import { isVoid } from "../../Utls/TroopersRelated"

export const AssualtTroops = () => {
  const { searchParams, setSearchParams, TroopsResponse } = useApiData()

  const RemoveDuplicates = (array) => {
    return Array.from(new Set(array))
  }

  const functions = RemoveDuplicates(
    TroopsResponse.map((troop) => {
      return troop.function
    })
  )

  return (
    <>
      <Form style={{ padding: "2px" }}>
        <Form.Group style={{ display: "flex" }}>
          <Form.Control
            type="text"
            placeholder="Please input your search"
            value={searchParams.name}
            onChange={(event) => {
              setSearchParams({
                ...searchParams,
                name: event.target.value,
              })
            }}
            style={{ width: "20rem" }}
          />
          <Form.Select
            value={searchParams.function}
            onChange={(event) => {
              setSearchParams({
                ...searchParams,
                function: event.target.value,
              })
            }}
            style={{ width: "15rem" }}>
            <option value="">Functions</option>
            {functions.map((f) => {
              return (
                <option value={f} key={f}>
                  {f}
                </option>
              )
            })}
          </Form.Select>
        </Form.Group>
      </Form>
      <Table bordered hover>
        <thead>
          <tr>
            <th style={{ color: "gray" }}>ID</th>
            <th style={{ color: "gray" }}>Name</th>
            <th style={{ color: "gray" }}>Function</th>
            <th style={{ color: "gray" }}>Attack</th>
            <th style={{ color: "gray" }}>Defence</th>
            <th style={{ color: "gray" }}>Life</th>
          </tr>
        </thead>
        <tbody>
          {TroopsResponse.map((troop) => {
            return (
              <>
                <tr key={troop.id} style={{ color: `${troop.rowcolor}` }}>
                  <td>{troop.id}</td>
                  <td>{troop.name}</td>
                  <td>{troop.function}</td>
                  <td>{troop.attack}</td>
                  <td>{troop.defence}</td>
                  <td>{troop.life}</td>
                </tr>
                <Image src={trooperPics[troop.id]} style={{ height: "10rem" }} />
              </>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

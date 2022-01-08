import React, { useState, useEffect } from "react"
import Form from "react-bootstrap/Form"
import Table from "react-bootstrap/Table"
import { useApiData } from "../../Data/ApiProvider"

export const AssualtTroops = () => {
  const { searchParams, setSearchParams, TroopsResponse } = useApiData()
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
            {TroopsResponse.map((troop) => {
              return (
                <option value={troop.id} key={troop.id}>
                  {troop.function}
                </option>
              )
            })}
          </Form.Select>
        </Form.Group>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ color: "gray" }}>ID</th>
            <th style={{ color: "gray" }}>Name</th>
            <th style={{ color: "gray" }}>Function</th>
            <th style={{ color: "gray" }}>Attack</th>
            <th style={{ color: "gray" }}>Defence</th>
            <th style={{ color: "gray" }}>Due Date</th>
            <th style={{ color: "gray" }}>Profile</th>
          </tr>
        </thead>
      </Table>
    </>
  )
}

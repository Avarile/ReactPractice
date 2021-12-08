import useAxios from "axios-hooks";
import React from "react";
import Table from "react-bootstrap/Table";
import { TableData } from "./DataGenerator";
import Container from "react-bootstrap/Container";

export const CustomTable = () => {

  const [searchParams, setSeachParams] = 

  return (
    <>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              {TableData.thead.map((th) => (
                <th style={{ color: "grey" }} key={th}>
                  {th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TableData.data.map((person) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td style={{ color: "blue" }}>{person.name}</td>
                <td style={{ color: "black" }}>{person.age}</td>
                <td style={{ color: "orange" }}>{person.profession}</td>
                <td style={{ color: "orange" }}>{person.years}</td>
                <td style={{ color: "cyan" }}>{person.experience}</td>
                <td style={{ color: "navy" }}>
                  {person.availability ? "Availabe" : "Not available"}
                </td>
                <td style={{ color: "brown" }}>{person.status}</td>
                <td style={{ color: "orchid" }}>{person.coverage}</td>
                <td style={{ color: "pink" }}>{person.desc}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};







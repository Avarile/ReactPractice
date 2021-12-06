import { useTable } from "react-table";
import React from "react";
import Table from 'react-bootstrap/Table'

export const DemoTable = () => {
  const data = React.useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },

      {
        col1: "react-table",
        col2: "rocks",
      },

      {
        col1: "whatever",
        col2: "you want",
      },
    ],

    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "col1", // accessor is the "key" in the data
      },

      {
        Header: "Column 2",
        accessor: "col2",
      },
    ],

    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });


  return (
    <Table striped bordered hover
      {...getTableProps()} >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);

          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};




// useTable is the PRIMARY hook used to build a react table. it serves as gateway to every options and plugins 
// Example 
//const instance = useTable (
  //{
    //data: [...data],
    //columns: [...column]
  //},
  //useGroupBy,
  //useFilters,
  //useSortBy,
  //useExpanded,
  //usePagination
//)
//
//
// 

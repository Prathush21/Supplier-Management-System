import React from "react";
import { useTable } from "react-table";
import { Table } from "reactstrap";

const COLUMNS = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Contact Number",
    accessor: "contactno",
  },
  {
    Header: "Joined Date",
    accessor: "joineddate",
  },
];

const supplymanagers = [
  {
    id: 100,
    name: "Kamal",
    email: "kamal@gmail.com",
    contactno: "0759862565",
    joineddate: "2015-10-18",
  },
  {
    id: 100,
    name: "Nimal",
    email: "nimal@gmail.com",
    contactno: "0759862565",
    joineddate: "2015-10-18",
  },
];

export default function DataTable() {
  const tableInstance = useTable({
    columns: COLUMNS,
    data: supplymanagers,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div>
      <Table
        responsive
        striped
        bordered
        hover
        className="Mytable"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

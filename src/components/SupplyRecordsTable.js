import React, { useState } from "react";
import { useRowSelect, useTable } from "react-table";
import { Button, Table, Modal, ModalHeader, ModalBody } from "reactstrap";
import axios from "axios";
import { Checkbox } from "./checkbox";

const COLUMNS = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Supplier ID",
    accessor: "supplierID",
  },
  {
    Header: "Unit Price",
    accessor: "unitprice",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Type",
    accessor: "type",
  },
  {
    Header: "Availability",
    accessor: "availability",
  },
  {
    Header: "Received Date",
    accessor: "receiveddate",
  },
];

const supplyrecords = [
  {
    id: 100,
    supplierID: "175",
    unitprice: 75,
    amount: 10000,
    type: "1",
    availability: "yes",
    receiveddate: "2015-10-18",
  },
  {
    id: 100,
    supplierID: "175",
    unitprice: 75,
    amount: 10000,
    type: "1",
    availability: "yes",
    receiveddate: "2015-10-18",
  },
];

export default function SupplyRecordsTable() {

  // axios.get("").then((getData) => {
  //   supplyrecords.push(getData.data);
  // });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalId, setModalId] = useState(1);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  function viewModal(Id) {
    console.log(Id);
    setModalIsOpenToTrue();
    if (modalIsOpen === false) {
      setModalId(Id);
    }
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable(
    {
      columns: COLUMNS,
      data: supplyrecords,
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
          {
            id: "edit",
            Cell: ({ row }) => (
              <Button outline color="dark" onClick={() => viewModal(row.id)}>Edit</Button>
            ),
          }, 
        ];
      });
    }
  );

  const selectedrows = selectedFlatRows.map((row) => row.original);

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
      <Modal isOpen={modalIsOpen}>
        <ModalHeader close={<Button close onClick={setModalIsOpenToFalse}></Button>}>
          <h3>Edit Supply Manager</h3>
        </ModalHeader>
        <ModalBody>{modalId}</ModalBody>
      </Modal>
    </div>
  );
}

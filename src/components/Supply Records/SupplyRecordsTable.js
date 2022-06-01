import React, { useState, useEffect } from "react";
import { useRowSelect, useTable } from "react-table";
import { Button, Table, Modal, ModalHeader, ModalBody } from "reactstrap";
import axios from "axios";
import { Checkbox } from "../Utils/checkbox";
import EditSupplyRecords from "./EditSupplyRecord";

const COLUMNS = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Supplier ID",
    accessor: "supplier_id",
  },
  {
    Header: "Unit Price",
    accessor: "unit_prize",
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
    accessor: "received_date",
  },
];


export default function SupplyRecordsTable() {

  const [supplyrecords, setSupplyRecords] = useState([
    {
      id: 100,
      sup_ID: "175",
      unit_Prize: 75,
      amount: 10000,
      type: "1",
      availability: "yes",
      date: "2015-10-18",
    },
    {
      id: 100,
      sup_ID: "175",
      unit_Prize: 75,
      amount: 10000,
      type: "1",
      availability: "yes",
      date: "2015-10-18",
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:8087/supplyRecord/all")
      .then(getRecords => {
        setSupplyRecords(getRecords.data.data);
        console.log(getRecords.data.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])


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
          <h3>Edit Supply Record</h3>
        </ModalHeader>
        <ModalBody><EditSupplyRecords row={modalId} supplyrecords={supplyrecords}/></ModalBody>
      </Modal>
    </div>
  );
}

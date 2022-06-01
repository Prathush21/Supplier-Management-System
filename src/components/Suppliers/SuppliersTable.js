import React, { useEffect, useState } from "react";
import { useRowSelect, useTable } from "react-table";
import { Button, Table, Modal, ModalHeader, ModalBody } from "reactstrap";
import axios from "axios";
import { Checkbox } from "../Utils/checkbox";
import EditSupplier from "./EditSupplier";

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
    accessor: "Contact_Number",
  },
  {
    Header: "Address",
    accessor: "address",
  },
  {
    Header: "Joined Date",
    accessor: "joined_date",
  },
];



// const suppliers = [
//   {
//     id: 100,
//     name: "Kamal",
//     email: "kamal@gmail.com",
//     contactno: "0759862565",
//     address: "Kandy Road, Kurunegala",
//     joineddate: "2015-10-18",
//   },
//   {
//     id: 100,
//     name: "Nimal",
//     email: "nimal@gmail.com",
//     contactno: "0759862565",
//     address: "Kandy Road, Kurunegala",
//     joineddate: "2015-10-18",
//   },
// ];

export default function SupplersTable() {

  const [suppliers, setSuppliers] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8087/supplier/all")
      .then(getSuppliers => {
        const data_arr = [];
        getSuppliers.data.data.forEach(element => {
          const data = element;
          data.address = data.lane1 + ',' + 
          data.lane2 + ',' + 
          data.city + ',' + 
          data.district
          // data.joined_date = joined_date.

          data_arr.push(data);
        });
        setSuppliers(data_arr);
        console.log(data_arr)
      }).catch(err => {
        console.log('err')
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
      data: suppliers,
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
              <Button outline color="dark" onClick={() => viewModal(row.id)}>
                Edit
              </Button>
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
        <ModalHeader
          close={<Button close onClick={setModalIsOpenToFalse}></Button>}
        >
          <h3>Edit Supplier</h3>
        </ModalHeader>
        <ModalBody><EditSupplier row={modalId} /></ModalBody>
      </Modal>
    </div>
  );
}

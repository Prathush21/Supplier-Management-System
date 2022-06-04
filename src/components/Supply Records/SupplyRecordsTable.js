import React, { useState, useEffect } from "react";
import { useTable, useGlobalFilter } from "react-table";
import { Button, Table, Modal, ModalHeader, ModalBody } from "reactstrap";
import axios from "axios";
import EditSupplyRecords from "./EditSupplyRecord";
import { GlobalFilter } from "../Utils/GlobalFilter";

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

  const [supplyrecords, setSupplyRecords] = useState([]);

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
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns: COLUMNS,
      data: supplyrecords,
    },
     useGlobalFilter,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
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

  const { globalFilter } = state;

  return (
    <React.Fragment>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
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
    </React.Fragment>
  );
}

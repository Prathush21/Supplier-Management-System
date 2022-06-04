import React, { useEffect, useState } from "react";
import { useGlobalFilter, useRowSelect, useTable } from "react-table";
import { Button, Table, Modal, ModalHeader, ModalBody } from "reactstrap";
import axios from "axios";
import { Checkbox } from "../Utils/checkbox";
import EditSupplier from "./EditSupplier";
import { GlobalFilter } from "../Utils/GlobalFilter";

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
    accessor: "contact",
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

export default function SupplersTable() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8087/supplier/all")
      .then((getSuppliers) => {
        setSuppliers(getSuppliers.data.data);
        const joined = suppliers.joined_date
        suppliers.joined_date = joined.slice(0,10)
        console.log(getSuppliers.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  


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
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns: COLUMNS,
      data: suppliers,
    },
    useRowSelect, useGlobalFilter,
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
  const { globalFilter } = state;

  const deleteRecords = () => {
    console.log(selectedrows)
    const url = 'http://localhost:8087/supplier/remove'
    axios.post(url, selectedrows).then((res) => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  };

  return (
    <React.Fragment>
      <Button color="dark"
      onClick={deleteRecords}>Delete Supplier</Button>
      {/* {data = SupplyRecordsTable.selectedrows} */}
      <br></br>
      <br></br>
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
                  <th {...column.getHeaderProps()}>
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
          <ModalBody>
            <EditSupplier row={modalId} suppliers={suppliers} />
          </ModalBody>
        </Modal>
      </div>
    </React.Fragment>
  );
}

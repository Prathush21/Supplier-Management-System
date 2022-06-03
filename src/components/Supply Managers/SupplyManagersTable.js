import React, { useState, useEffect } from "react";
import { useGlobalFilter, useRowSelect, useTable } from "react-table";
import { Button, Table, Modal, ModalHeader, ModalBody } from "reactstrap";
import axios from "axios";
import { Checkbox } from "../Utils/checkbox";
import EditSupplyManager from "./EditSupplyManager";
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
    Header: "Joined Date",
    accessor: "join_date",
  },
];

export default function SupplyManagersTable() {
  const [supplymanagers, setSupplyManagers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8087/user/managers")
      .then((getManagers) => {
        console.log(getManagers.data.data);
        setSupplyManagers(getManagers.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  const deleteRecords = () => {
    const url = 'http://localhost:8087/user/manager-delete'
    console.log(selectedrows)
    axios.post(url, selectedrows).then((res) => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalId, setModalId] = useState(1);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  const getDeletingRecords = () => {
    return selectedrows;
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
      data: supplymanagers,
    },
    useRowSelect,
    useGlobalFilter,
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



  return (
    <React.Fragment>
      <Button color="dark"
      onClick={deleteRecords}
      >Delete Supply Manager</Button>
      
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
            <h3>Edit Supply Manager</h3>
          </ModalHeader>
          <ModalBody>
            <EditSupplyManager row={modalId} supplymanagers={supplymanagers} />
          </ModalBody>
        </Modal>
      </div>
    </React.Fragment>
  );
}

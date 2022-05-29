import { Button, Modal, ModalHeader, ModalBody, Table } from "reactstrap";
import "../styles/table.css";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";
import React, { Component } from "react";
import AddSupplier from "./addsupplier";
import EditSupplier from "./editsupplier"
import { Link } from "react-router-dom";

import axios from "axios";
import { getValue } from "@testing-library/user-event/dist/utils";

class Suppliers extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.toggleModal1 = this.toggleModal1.bind(this);

    this.toggleSelectAll = this.toggleSelectAll.bind(this);
    this.state = {
      isModalOpen: false,
      isEditModalOpen: false,
      check: false,
      selectAll: false,
    };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  toggleModal1() {
    this.setState({
      isEditModalOpen: !this.state.isEditModalOpen,
    });
  }

  toggleSelectAll() {
    this.setState({
      selectAll: !this.state.selectAll,
    });
  }

  getValue(suppliers, id) {}

  render() {
    const suppliers = [
      {
        id: 100,
        name: "Kamal",
        email: "kamal@gmail.com",
        contactno: "0759862565",
        joineddate: "2015-10-18",
      },
    ];

    axios.get("").then((getData) => {
      suppliers.push(getData.data);
    });

    return (
      <React.Fragment>
        <div className="Container-fluid">
          <h2>Supplier</h2>
          <br></br>
          <Button color="primary" onClick={this.toggleModal}>
            {" "}
            Add New Supplier{" "}
          </Button>{" "}
          <Button color="primary" style={{ marginLeft: ".5rem" }}>
            {" "}
            Delete Supplier{" "}
          </Button>
        
          <br></br>
          <br></br>
          <div className="search-box">
            <MDBRow>
              <MDBCol md="9" style={{ display: "inline-grid" }}>
                <MDBInput hint="Search" type="text" id="search" />
              </MDBCol>
              <MDBCol md="3" style={{ display: "inline-grid" }}>
                <Button
                  color="secondary"
                  style={{ width: "8vw", marginBottom: "1.5rem" }}
                >
                  Search
                </Button>
              </MDBCol>
            </MDBRow>
          </div>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>
                  {" "}
                  <input type="checkbox" onChange={this.toggleSelectAll} />
                </th>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th> Contact Number</th>
                <th> Joined Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map((supplier, index) => (
                <tr data-index={index}>
                  <td>
                    <input type="checkbox" onChange={!this.check} />
                  </td>

                  <td>
                    <a onclick={this.toggleModal1} style={{ color: "blue" }}>
                      {supplier.id}
                    </a>{" "}
                  </td>
                  <td>{supplier.name}</td>
                  <td>{supplier.email}</td>
                  <td>{supplier.contactno}</td>
                  <td>{supplier.joineddate}</td>
                
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            <h3>New Supplier</h3>
          </ModalHeader>
          <ModalBody>
            <AddSupplier />
          </ModalBody>
        </Modal>

        <Modal isOpen={this.state.isEditModalOpen} toggle={this.toggleModal1}>
          <ModalHeader toggle={this.toggleModal1}>
            <h3>Edit Supplier</h3>
          </ModalHeader>
          <ModalBody>
            <EditSupplier />
          </ModalBody>
        </Modal>
    
      </React.Fragment>
    );
  }
}

export default Suppliers;

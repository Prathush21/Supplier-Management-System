import React, { Component } from "react";
import "../styles/table.css";
import { MDBCol, MDBInput, MDBRow } from "mdbreact";
import AddSupplyManager from "./addsupplymanager";
import { Button, Modal, ModalHeader, ModalBody, Table } from "reactstrap";
import axios from "axios";

class SupplyManagers extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      isModalOpen: false,
    };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
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
      }
    ];

    axios.get('').then((getData) => {
      supplymanagers.push(getData.data);
    });

    return (
      <React.Fragment>
        <div className="Container-fluid shadow-2-strong">
          <h2>Supply Managers </h2>
          <br></br>
          <Button color="light" onClick={this.toggleModal}>
            Add New Supply Manager
          </Button>
          <Button color="dark" style={{ marginLeft: ".5rem" }}>
            Delete Record
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
                outline rounded
                  color="primary"
                  style={{ width: "8vw", marginBottom: "1.5rem" }}
                >
                  Search
                </Button>
              </MDBCol>
            </MDBRow>
          </div>
          <Table responsive striped bordered hover className="Mytable">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>ID</th>
                <th>Name</th>

                <th>Email</th>
                <th> Contact Number</th>

                <th> Joined Date</th>
              </tr>
            </thead>
            <tbody>
              {supplymanagers.map((suppman, index) => (
                <tr data-index={index}>
                  <td>
                    <input type="checkbox" />
                  </td>

                  <td>{suppman.id}</td>
                  <td>{suppman.name}</td>
                  <td>{suppman.email}</td>
                  <td>{suppman.contactno}</td>
                  <td>{suppman.joineddate}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            <h3>New Supply Manager </h3>{" "}
          </ModalHeader>
          <ModalBody>
            <AddSupplyManager />
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default SupplyManagers;

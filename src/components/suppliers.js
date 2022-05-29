import { Button, Modal, ModalHeader, ModalBody, Table } from "reactstrap";
import "../styles/table.css";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";
import React, { Component } from "react";
import AddSupplier from "./addsupplier";
import EditSupplier from "./editsupplier"
import { Link } from "react-router-dom";

import axios from "axios";
import { getValue } from "@testing-library/user-event/dist/utils";
import SupplersTable from "./SupplersTable";

class Suppliers extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);

    this.toggleSelectAll = this.toggleSelectAll.bind(this);
    this.state = {
      isModalOpen: false,
      check: false,
      selectAll: false,
    };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  toggleSelectAll() {
    this.setState({
      selectAll: !this.state.selectAll,
    });
  }

  getValue(suppliers, id) {}

  render() {

    return (
      <React.Fragment>
        <div className="Container-fluid shadow-2-strong">
          <h2>Supplier</h2>
          <br></br>
          <Button color="light" onClick={this.toggleModal}>
            Add New Supplier
          </Button>
          <Button color="dark" style={{ marginLeft: ".5rem" }}>
            Delete Supplier
          </Button>
          <br></br>
          <br></br>
          <div className="search-box">
            <div className="row">
              <div className="col-9">
                <MDBInput hint="Search" type="text" id="search" />
              </div>
              <div className="col-3">
                <Button outline color="primary">Search</Button>
              </div>
            </div>
          </div>
          <SupplersTable/>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            <h3>New Supplier</h3>
          </ModalHeader>
          <ModalBody>
            <AddSupplier />
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Suppliers;

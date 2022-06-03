import React, { Component } from "react";
import { MDBInput, } from "mdbreact";
import { useRowSelect, useTable } from "react-table";
import { Button, Modal, ModalHeader, ModalBody, Table } from "reactstrap";
import "../../styles/styles_2.css";
import AddSupplyManager from "./AddSupplyManager";
import SupplyManagersTable from "./SupplyManagersTable";
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

  // deleteRecords(records) {
  //   const url = "http://localhost:8087/user/manager-delete/:id"
  //   axios.post(url,records).then((res) => {
  //     console.log(records)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // };

  render() {
    
    return (
      <React.Fragment>
        <div className="Container-fluid shadow-2-strong">
          <h2>Supply Managers </h2>
          <br></br>
          <Button color="light" onClick={this.toggleModal}>
            Add New Supply Manager
          </Button>
          <Button color="dark" style={{ marginLeft: ".5rem" }}
          // onClick={deleteRecords(SupplyManagersTable.getDeletingRecords)}
          >  //TOCLARIFY!!!!
            Delete Record
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
          <SupplyManagersTable/>
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

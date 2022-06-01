import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Table } from "reactstrap";
import "../../styles/styles_2.css";
import AddSupplRecord from "./AddSupplyRecord";
import axios from "axios";
import SupplyRecordsTable from "./SupplyRecordsTable";

const data = [];
class SupplyRecords extends Component {
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

  sendData = () => {
    const url = '/supplyRecord/remove/';
    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {

    return (
      <React.Fragment>
        <div className="Container-fluid shadow-2-strong">
          <h2>Supply Records </h2>
          <br></br>
          <Button color="light" onClick={this.toggleModal}>
            Add New Record
          </Button>
          <Button color="dark" style={{ marginLeft: ".5rem" }}
           onClick={this.toggleModal}>
            Delete Record
          </Button>
          <br></br> <br></br> <br></br>
          <SupplyRecordsTable />
          {/* {data = SupplyRecordsTable.selectedrows} */}
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            <h3>New Supply Record </h3>
          </ModalHeader>
          <ModalBody>
            <AddSupplRecord />
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default SupplyRecords;

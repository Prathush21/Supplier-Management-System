import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
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
          <br></br>
          <br></br>
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

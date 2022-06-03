import { Button, Modal, ModalHeader, ModalBody} from "reactstrap";
import "../../styles/styles_2.css";
import React, { Component } from "react";
import AddSupplier from "./AddSupplier";
import SupplersTable from "./SuppliersTable";

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
          <br></br>
          <br></br>
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

import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Table } from "reactstrap";
import "../styles/supplyrecords.css";
import EditUsername from "./editusername";
import EditPassword from "./editpassword";
import EditDetails from "./editdetails";
import axios from "axios";

class EditAccountDetails extends Component {
  constructor(props) {
    super(props);

    this.toggleModalEditDetails = this.toggleModalEditDetails.bind(this);
    this.toggleModalEditUsername = this.toggleModalEditUsername.bind(this);
    this.toggleModalEditPassword = this.toggleModalEditPassword.bind(this);
    this.state = {
      editDetails: false,
      editPassword: false,
      editUsername: false,
    };
  }

  toggleModalEditUsername() {
    this.setState({
      editUsername: !this.state.editUsername,
    });
  }

  toggleModalEditPassword() {
    this.setState({
      editPassword: !this.state.editPassword,
    });
  }

  toggleModalEditDetails() {
    this.setState({
      editDetails: !this.state.editDetails,
    });
  }

  render() {
    const userDetails = [
      {
        id: 1,
        name: "Lokesh Kanagaraj",
        username: "lokesh24",
        email: "example@gmail.com",
        contactNumber: "0768582163",
      },
    ];

    axios.get('').then((getData) => {
      userDetails.push(getData.data);
    });

    return (
      <React.Fragment>
        <div className="Container-fluid">
          <h2>Edit Account Information</h2>
          <br></br>
          <Button color="primary" onClick={this.toggleModalEditDetails}> Edit Account Details</Button>{" "}
          <Button color="primary" onClick={this.toggleModalEditUsername} style={{ marginLeft: ".5rem" }}>
            {" "}
            Change Username{" "}
          </Button>
          <Button color="primary" onClick={this.toggleModalEditPassword} style={{ marginLeft: ".6rem" }}>
            {" "}
            Change Password{" "}
          </Button>
          <br></br>
          <Table responsive>
            <br></br>
            <thead></thead>
            <tbody>
              <br></br>
              <tr>
                <td colSpan={5}>
                  <b>Name</b>
                </td>
                <td>{userDetails[0].name}</td>
              </tr>
              <br></br>
              <tr>
                <td colSpan={5}>
                  <b>Username</b>
                </td>
                <td>{userDetails[0].username}</td>
              </tr>
              <br></br>
              <tr>
                <td colSpan={5}>
                  <b>Email Address</b>
                </td>
                <td>{userDetails[0].email}</td>
              </tr>
              <br></br>
              <tr>
                <td colSpan={5}>
                  <b>Contact Number</b>
                </td>
                <td>{userDetails[0].contactNumber}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Modal isOpen={this.state.editUsername} toggle={this.toggleModalEditUsername}>
          <ModalHeader toggle={this.toggleModalEditUsername}>
            <h3>Edit Username </h3>{" "}
          </ModalHeader>
          <ModalBody>
            <EditUsername />
          </ModalBody>
        </Modal>
        <Modal isOpen={this.state.editPassword} toggle={this.toggleModalEditPassword}>
          <ModalHeader toggle={this.toggleModalEditPassword}>
            <h3>Edit Password </h3>{" "}
          </ModalHeader>
          <ModalBody>
            <EditPassword />
          </ModalBody>
        </Modal>
        <Modal isOpen={this.state.editDetails} toggle={this.toggleModalEditDetails}>
          <ModalHeader toggle={this.toggleModalEditDetails}>
            <h3>Edit Account Information</h3>{" "}
          </ModalHeader>
          <ModalBody>
            <EditDetails />
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default EditAccountDetails;

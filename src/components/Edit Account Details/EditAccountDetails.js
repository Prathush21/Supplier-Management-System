import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Table } from "reactstrap";
import EditUsername from "./EditUsername";
import EditPassword from "./EditPassword";
import EditDetails from "./EditDetails";
import axios from "axios";
import '../../styles/styles_1.css';

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

    axios.get("/") //Edit Page
    .then(getUserDetails => {
      userDetails.append(getUserDetails.data);
      console.log(getUserDetails)
    }).catch(err => {
      console.log(err)
    })

    return (
      <React.Fragment>
        <div className="Container-fluid shadow-2-strong">
          <h2>Edit Account Information</h2>
          <br></br>
          <div className="row">
            <div className="col-sm-12 col-md-auto mb-2 align-content-center">
              <Button color="light" onClick={this.toggleModalEditDetails}>
                Edit Account Details
              </Button>
            </div>

            <div className="col-sm-12 col-md-auto mb-2 align-content-left">
              <Button
                color="light"
                onClick={this.toggleModalEditUsername}
                
              >
                Change Username
              </Button>
            </div>
            <div className="col-sm-12 col-md-auto mb-2 align-content-center">
              <Button
                color="light"
                onClick={this.toggleModalEditPassword}
                
              >
                Change Password
              </Button>
            </div>
          </div>
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
        <Modal
          isOpen={this.state.editUsername}
          toggle={this.toggleModalEditUsername}
        >
          <ModalHeader toggle={this.toggleModalEditUsername}>
            <h3>Edit Username </h3>{" "}
          </ModalHeader>
          <ModalBody>
            <EditUsername />
          </ModalBody>
        </Modal>
        <Modal
          isOpen={this.state.editPassword}
          toggle={this.toggleModalEditPassword}
        >
          <ModalHeader toggle={this.toggleModalEditPassword}>
            <h3>Edit Password </h3>{" "}
          </ModalHeader>
          <ModalBody>
            <EditPassword />
          </ModalBody>
        </Modal>
        <Modal
          isOpen={this.state.editDetails}
          toggle={this.toggleModalEditDetails}
        >
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

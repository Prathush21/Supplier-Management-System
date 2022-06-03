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
      userDetails: []
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
    
    axios.get("http://localhost:8087/manager/profile") //Edit Page
    .then(getUserDetails => {
      this.setState({userDetails: getUserDetails.data.data[0]});
      console.log(getUserDetails)
    }).catch(err => {
      console.log(err)
    })

    return (
      <React.Fragment>
        <div className="Container-fluid shadow-2-strong">
          <h2>Account Details</h2>
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
                <td>{this.state.userDetails.name}</td>
              </tr>
              <br></br>
              <tr>
                <td colSpan={5}>
                  <b>Email Address</b>
                </td>
                <td>{this.state.userDetails.email}</td>
              </tr>
              <br></br>
              <tr>
                <td colSpan={5}>
                  <b>Address</b>
                </td>
                <td>{this.state.userDetails.address}</td>
              </tr>
              <br></br>
              <tr>
                <td colSpan={5}>
                  <b>Contact Number</b>
                </td>
                <td>{this.state.userDetails.contact}</td>
              </tr>
              <tr>
                <td colSpan={5}>
                  <b>Joined Date</b>
                </td>
                <td>{this.state.userDetails.join_date}</td>
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

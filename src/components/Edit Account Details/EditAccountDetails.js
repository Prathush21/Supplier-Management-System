import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, Table } from "reactstrap";
import EditDetails from "./EditDetails";
import axios from "axios";
import '../../styles/styles_1.css';

export default function EditAccountDetails () {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({
});

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

    
    axios.get("http://localhost:8087/manager/profile") //Edit Page
    .then(getUserDetails => {
      // this.setState({userDetails: getUserDetails.data.data[0]});
      setUserDetails(getUserDetails.data.data[0]);

        const joined = userDetails.join_date
        userDetails.join_date = joined.slice(0,10)
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
              <Button color="light" onClick={setModalIsOpenToTrue}>
                Edit Account Details
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
                <td>{userDetails.name}</td>
              </tr>
              <br></br>
              <tr>
                <td colSpan={5}>
                  <b>Email Address</b>
                </td>
                <td>{userDetails.email}</td>
              </tr>
              <br></br>
              <tr>
                <td colSpan={5}>
                  <b>Address</b>
                </td>
                <td>{userDetails.address}</td>
              </tr>
              <br></br>
              <tr>
                <td colSpan={5}>
                  <b>Contact Number</b>
                </td>
                <td>{userDetails.contact}</td>
              </tr>
              <tr>
                <td colSpan={5}>
                  <b>Joined Date</b>
                </td>
                <td>{userDetails.join_date}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Modal
          isOpen={modalIsOpen}
        >
          <ModalHeader close={<Button close onClick={setModalIsOpenToFalse}></Button>}>
            <h3>Edit Account Details</h3>{" "}
          </ModalHeader>
          <ModalBody>
            <EditDetails userDetails = {userDetails} />
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }


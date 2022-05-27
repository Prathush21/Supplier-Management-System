import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import "../styles/table.css";
import AddGood from "./addnewgood";
import axios from "axios";

class Storage extends Component {
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
    const storage = [
      {
        id:1,
        typeid: 100,
        typename: "type 1",
        unittype: "kg",
        unitprize: "475.00",
        image: "/assets/images/login.jpg",
        stockamount: 25,
        refilledDate: "2022/05/27",
        availability: "available",
      }]

    axios.get('').then((getData) => {
      storage.push(getData.data);
    });

    return (
      <React.Fragment>
        <div className="Container-fluid">
          <h2>Storage </h2>
          <br></br>

          <MDBRow>
            {storage.map((good, index) => (
              <MDBCol sm="4">
                <center>
                  <MDBCard style={{ margin: "0.5rem" }}>
                    <MDBCardBody style={{ borderRadius: "5px" }}>
                      <MDBCardTitle>{good.typename}</MDBCardTitle>
                      <MDBCardText>
                        <b>{good.unitprize}</b>
                        <br></br>Unit : {good.unittype}
                      </MDBCardText>
                      <MDBCardImage
                        className="img-fluid"
                        src={good.image}
                        alt="..."
                        position="top"
                      ></MDBCardImage>
                      <br></br>
                      <MDBCardText>
                        Stock Amount : <b>{good.stockamount}</b>
                        <br></br>
                        Last Refilled Date : {good.refilledDate}
                        <br></br>
                        Availability Status : {good.availability}
                      </MDBCardText>

                      <Button color="primary"  onClick={this.toggleModal}>
                        Edit 
                      </Button>
                    </MDBCardBody>
                  </MDBCard>
                </center>
              </MDBCol>
            ))}
          </MDBRow>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            <h3>New Storage Type </h3>
          </ModalHeader>
          <ModalBody>{/* <AddStorage/> */}</ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Storage;

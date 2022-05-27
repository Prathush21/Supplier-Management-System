import React, {Component, useEffect, useState} from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import "../styles/table.css";
import AddGood from "./addnewgood"
import axios from "axios";

class Good extends Component {
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
    // const goods = [
    //   {
    //     typeid: 100,
    //     typename: "type 1",
    //     unittype: "kg",
    //     image: "/assets/images/login.jpg",
    //   },
    //   {
    //     typeid: 100,
    //     typename: "type 1",
    //     unittype: "kg",
    //     image: "/assets/images/login.jpg",
    //   },
    //   {
    //     typeid: 100,
    //     typename: "type 1",
    //     unittype: "kg",
    //     image: "/assets/images/login.jpg",
    //   },
    //   {
    //     typeid: 100,
    //     typename: "type 1",
    //     unittype: "kg",
    //     image: "/assets/images/login.jpg",
    //   },
    // ];

    const goods = [];
    
    axios.get('').then((getData) => {
      goods.push(getData.data);
    })

    return (
      <React.Fragment>
      <div className="Container-fluid">
        <h2>Goods</h2>
        <br></br>

        <Button color="primary" onClick={this.toggleModal}> Add New Good Type </Button>
        <br></br>
        <br></br>

        <MDBRow>
          {goods.map((good, index) => (
            <MDBCol sm="4">
              <MDBCard style={{ margin: "0.5rem" }}>
                <MDBCardBody style={{ borderRadius: "5px" }}>
                  <MDBCardImage
                    className="img-fluid"
                    src={good.image}
                    alt="..."
                    position="top"
                  ></MDBCardImage>

                  <MDBCardTitle>{good.typename}</MDBCardTitle>
                  <MDBCardText>
                    ID : <b>{good.typeid}</b>
                    <br></br>
                    Unit : {good.unittype}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </div>
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>
              <h3>New Good Type </h3>
              </ModalHeader>
              <ModalBody>
                <AddGood/>
              </ModalBody>
            </Modal>
        </React.Fragment>
    );
  }
}

export default Good;

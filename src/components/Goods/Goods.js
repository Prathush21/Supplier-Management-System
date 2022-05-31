import React, {Component, useEffect, useState} from "react";
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
import "../../styles/styles_2.css";
import AddGood from "./AddNewGood"
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
    const goods = [
      {
        typeid: 100,
        typename: "type 1",
        unittype: "kg",
        image: "/assets/images/login.jpg",
      },
      {
        typeid: 100,
        typename: "type 1",
        unittype: "kg",
        image: "/assets/images/login.jpg",
      },
      {
        typeid: 100,
        typename: "type 1",
        unittype: "kg",
        image: "/assets/images/login.jpg",
      },
      {
        typeid: 100,
        typename: "type 1",
        unittype: "kg",
        image: "/assets/images/login.jpg",
      },
    ];

    
    axios.get("http://localhost:3000/supplyRecord/all")
      .then(getGoods => {
        goods.append(getGoods.data);
        console.log(getGoods)
      }).catch(err => {
        console.log(err)
      })

    return (
      <React.Fragment>
      <div className="Container-fluid shadow-2-strong">
        <h2>Goods</h2>
        <br></br>

        <Button color="light" onClick={this.toggleModal}> Add New Good Type </Button>
        <br></br>
        <br></br>

        <MDBRow>
          {goods.map((good, index) => (
            <MDBCol sm="4">
              <MDBCard key={good.typeid} className="shadow-5" style={{ margin: "0.5rem", border:"0px",  backgroundColor: "rgba(95, 106, 230, 0.33)"}}>
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

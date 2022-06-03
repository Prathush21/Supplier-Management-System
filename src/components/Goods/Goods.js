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
      goods : []
    };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    
    axios.get("http://localhost:8087/good/allgoods")
      .then(getGoods => {
        // console.log(getGoods.data.data)
        this.setState({goods: getGoods.data.data})
        // console.log(goods[0])
        
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
          {this.state.goods.map((good, index) => (
            <MDBCol sm="4">
              <MDBCard key={good.id} className="shadow-5" style={{ margin: "0.5rem", border:"0px",  backgroundColor: "rgba(95, 106, 230, 0.33)"}}>
                <MDBCardBody style={{ borderRadius: "5px" }}>
                  {/* <MDBCardImage
                    className="img-fluid"
                    src={good.image}
                    alt="..."
                    position="top"
                  ></MDBCardImage> */}

                  <MDBCardTitle>{good.type}</MDBCardTitle>
                  <MDBCardText>
                    ID : <b>{good.id}</b>
                    <br></br>
                    Unit : {good.unit}
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

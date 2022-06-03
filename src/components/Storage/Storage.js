import React, { Component,} from "react";
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
import EditStorage from './EditStorage';
import axios from "axios";


class Storage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      id:0
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.viewModal = this.viewModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  viewModal(Id){
    this.setState(this.toggleModal);
    if (this.state.isModalOpen === false) {
      this.setState(
        {id : Id}
      )
    }
  }

  render() {
    const storage = [
      // {
      //   id: 1,
      //   typeid: 100,
      //   typename: "type 1",
      //   unittype: "kg",
      //   unitprize: "475.00",
      //   image: "/assets/images/login.jpg",
      //   stockamount: 25,
      //   refilledDate: "2022/05/27",
      //   availability: "available",
      // },
      // {
      //   id: 2,
      //   typeid: 200,
      //   typename: "type 1",
      //   unittype: "kg",
      //   unitprize: "475.00",
      //   image: "/assets/images/login.jpg",
      //   stockamount: 25,
      //   refilledDate: "2022/05/27",
      //   availability: "available",
      // },
      // {
      //   id: 3,
      //   typeid: 300,
      //   typename: "type 1",
      //   unittype: "kg",
      //   unitprize: "475.00",
      //   image: "/assets/images/login.jpg",
      //   stockamount: 25,
      //   refilledDate: "2022/05/27",
      //   availability: "available",
      // },
    ];

    axios.get("http://localhost:8087/storage/all")
      .then(getItem => {
        storage.append(getItem.data.data);
        console.log(getItem.data.data)
      }).catch(err => {
        console.log(err)
      })

    return (
      <React.Fragment>
        <div className="Container-fluid shadow-2-strong">
          <h2>Storage </h2>
          <br></br>
          <MDBRow>
            {storage.map((good, index) => (
              <MDBCol sm="4">
                <center>
                  <MDBCard key={good.id} className="shadow-5" style={{ margin: "0.5rem", border:"0px",  backgroundColor: "rgba(95, 106, 230, 0.33)"}}>
                    <MDBCardBody className="shadow-5 hover-overlay" style={{ borderRadius: "5px" }}>
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
                        <Button outline color="dark" onClick={() => this.viewModal(good.id)}>Edit</Button>
                    </MDBCardBody>
                  </MDBCard>
                </center>
              </MDBCol>
            ))}
          </MDBRow>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            <h3> Edit Storage </h3>
          </ModalHeader>
          <ModalBody>{ <EditStorage id={this.state.id} storage= {storage}/> }</ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Storage;
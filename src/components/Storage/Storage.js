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
      id:0,
      storage: []
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
    axios.get("http://localhost:8087/storage/all")
      .then(getItem => {
        // console.log(getItem.data.data)
        this.setState({storage: getItem.data.data})
      }).catch(err => {
        console.log(err)
      })

    return (
      <React.Fragment>
        <div className="Container-fluid shadow-2-strong">
          <h2>Storage </h2>
          <br></br>
          <MDBRow>
            {this.state.storage.map((good, index) => (
              <MDBCol sm="4">
                <center>
                  <MDBCard key={good.id} className="shadow-5" style={{ margin: "0.5rem", border:"0px",  backgroundColor: "rgba(95, 106, 230, 0.33)"}}>
                    <MDBCardBody className="shadow-5 hover-overlay" style={{ borderRadius: "5px" }}>
                      <MDBCardTitle>{good.type}</MDBCardTitle>
                      <MDBCardText>
                        <b>{good.unit_price}</b>
                        <br></br>Unit : {good.unit}
                      </MDBCardText>
                      {/* <MDBCardImage
                        className="img-fluid"
                        src={good.image}
                        alt="..."
                        position="top"
                      ></MDBCardImage> */}
                      <br></br>
                      <MDBCardText>
                        Stock Amount : <b>{good.stock_amount}</b>
                        <br></br>
                        Last Refilled Date : {good.last_refilled_date}
                        <br></br>
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
          <ModalBody>{ <EditStorage id={this.state.id} storage= {this.state.storage}/> }</ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Storage;

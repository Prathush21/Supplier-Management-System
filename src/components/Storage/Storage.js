import React, { useState, useEffect } from "react";
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
import EditStorage from "./EditStorage";
import axios from "axios";

export default function Storage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalId, setModalId] = useState(0);
  const [storage, setStorage] = useState([
  ]);


  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  function viewModal(Id) {
    setModalIsOpenToTrue();
    if (modalIsOpen === false) {
      setModalId(Id);
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:8087/storage/all")
      .then((getItem) => {
        setStorage(getItem.data.data );
      })
      .catch((err) => {
        //console.log(err);
      });
  }, [storage]);

  return (
    <React.Fragment>
      <div className="Container-fluid shadow-2-strong">
        <h2>Storage</h2>
        <br></br>
        <MDBRow>
          {storage.map((good, index) => (
            <MDBCol sm="4">
              <center>
                <MDBCard
                  key={good.id}
                  className="shadow-5"
                  style={{
                    margin: "0.5rem",
                    border: "0px",
                    backgroundColor: "rgba(95, 106, 230, 0.33)",
                  }}
                >
                  <MDBCardBody
                    className="shadow-5 hover-overlay"
                    style={{ borderRadius: "5px" }}
                  >
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
                      Last Refilled Date : {good.last_refilled_date.slice(0,10)}
                      <br></br>
                    </MDBCardText>
                    <Button
                      outline
                      color="dark"
                      onClick={() => viewModal(good.id)}
                    >
                      Edit
                    </Button>
                  </MDBCardBody>
                </MDBCard>
              </center>
            </MDBCol>
          ))}
        </MDBRow>
      </div>
      <Modal isOpen={modalIsOpen}>
        <ModalHeader
          close={<Button close onClick={setModalIsOpenToFalse}></Button>}
        >
          <h3> Edit Storage </h3>
        </ModalHeader>
        <ModalBody>
          {<EditStorage id={modalId} storage={storage} />}
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

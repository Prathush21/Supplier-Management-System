import React, { Component, useEffect, useState } from "react";
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
import AddGood from "./AddNewGood";
import axios from "axios";

export default function Good() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [goods, setGoods] = useState([
    {
      id: 1,
      type: "type 1",
      unit: "kg",
    },
    {
      id: 2,
      type: "type 2",
      unit: "kg",
    },
  ]);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  function getDeleteID(Id) {
    const url = `http://localhost:8087/user/supply-delete/${Id}`;
    axios
      .post(url, Id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    axios
      .get("http://localhost:8087/good/allgoods")
      .then((getGoods) => {
        // console.log(getGoods.data.data)
        setGoods(getGoods.data.data);
        // console.log(goods[0])
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="Container-fluid shadow-2-strong">
        <h2>Goods</h2>
        <br></br>

        <Button color="light" onClick={setModalIsOpenToTrue}>
          {" "}
          Add New Good Type{" "}
        </Button>
        <br></br>
        <br></br>

        <MDBRow>
          {goods.map((good, index) => (
            <MDBCol sm="4">
              <MDBCard
                key={good.id}
                className="shadow-5"
                style={{
                  margin: "0.5rem",
                  border: "0px",
                  backgroundColor: "rgba(95, 106, 230, 0.33)",
                }}
              >
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
                  <Button
                    outline
                    color="dark"
                    onClick={() => getDeleteID(good.id)}
                  >
                    Delete
                  </Button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </div>
      <Modal isOpen={modalIsOpen}>
        <ModalHeader
          close={<Button close onClick={setModalIsOpenToFalse}></Button>}
        >
          <h3>New Good Type </h3>
        </ModalHeader>
        <ModalBody>
          <AddGood />
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

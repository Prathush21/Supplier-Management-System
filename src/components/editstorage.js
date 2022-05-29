import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import React from "react";
import { useParams } from "react-router-dom";
import "../styles/editstorage.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function EditStorage(props) {
  const storage = [
    {
      id: 1,
      typeid: 100,
      typename: "type 1",
      unittype: "kg",
      unitprize: "475.00",
      image: "/assets/images/login.jpg",
      stockamount: 25,
      refilledDate: "2022/05/27",
      availability: "available",
    },
    {
      id: 2,
      typeid: 200,
      typename: "type 2",
      unittype: "kg",
      unitprize: "475.00",
      image: "/assets/images/login.jpg",
      stockamount: 25,
      refilledDate: "2022/05/27",
      availability: "available",
    },
    {
      id: 3,
      typeid: 300,
      typename: "type 3",
      unittype: "kg",
      unitprize: "475.00",
      image: "/assets/images/login.jpg",
      stockamount: 25,
      refilledDate: "2022/05/27",
      availability: "available",
    },
  ];

  axios.get("").then((getData) => {
    storage.push(getData.data);
  });

  const params = useParams();
  const dataID = props.id;
  const data = storage.filter((s) => s.id === parseInt(dataID, 10))[0];

  return (
    <div className="Container-fluid shadow-2-strong">
      <div className="row">
        <div className="col-6 offset-1">
          <Form className="form">
            <FormGroup>
              <Label for="typename">Type Name</Label>
              <Input
                type="text"
                name="typename"
                id="typename"
                readOnly
                value={data.typename}
              />
            </FormGroup>

            <FormGroup>
              <Label for="unit">Unit</Label>
              <Input
                type="text"
                name="unit"
                id="unit"
                readOnly
                value={data.unittype}
              />
            </FormGroup>

            <FormGroup>
              <Label for="refilledDate">Last Refilled Date</Label>
              <Input
                type="text"
                name="refilledDate"
                id="refilledDate"
                readOnly
                value={data.refilledDate}
              />
            </FormGroup>

            <FormGroup>
              <Label for="unitPrice">Unit Price</Label>
              <Input
                type="text"
                name="unitPrice"
                id="unitPrice"
                placeholder={data.unitprize}
              />
            </FormGroup>

            <FormGroup>
              <Label for="stockAmount">Stock Amount </Label>
              <Input
                type="text"
                name="stockAmount"
                id="stockAmount"
                placeholder={data.stockamount}
              />
            </FormGroup>

            <Button color="primary"> Submit </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
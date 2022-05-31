import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import React, { useState,useEffect } from "react";
import "../../styles/styles_1.css";
import axios from "axios";

export default function EditStorage(props) {
  const storage = props.storage;

  const dataID = props.id;
  const initialValues = storage.filter((s) => s.id === parseInt(dataID, 10))[0];
  const [formValues,setformValues] = useState(initialValues)
  const [isSubmit,setIsSubmit] = useState(false);
  const [formErrors, setformErrors] = useState({})
  const [data, setData] = useState(null);

  axios
    .get("http://localhost:3000/") //Edit storage
    .then((getUserDetails) => {
      storage.append(getUserDetails.data);
      console.log(getUserDetails);
    })
    .catch((err) => {
      console.log(err);
    });

  const sendData = () => {
    const url = "http://localhost:3000/supplyRecord/"; //Edit Supplier

   axios
      .post(url, data)
      .then((res) => {
        console.log("response", res);
      })
      .catch((err) => {
        console.log("error::::", err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({...formValues, [name]:value});
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));
    setIsSubmit(true);  
    setData(formValues);
  }

  useEffect(() => {

    if(Object.keys(formErrors).length === 0 && isSubmit){
        sendData()
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {}
   
    return errors;
  }  

  return (
    <div className="Container-fluid shadow-2-strong">
      <div className="row">
        <div className="col-6 offset-1">
          <Form className="form"  onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="typename">Type Name</Label>
              <Input
                type="text"
                name="typename"
                id="typename"
                readOnly
                value={formValues.typename}
              />
            </FormGroup>

            <FormGroup>
              <Label for="unit">Unit</Label>
              <Input
                type="text"
                name="unit"
                id="unit"
                readOnly
                value={formValues.unittype}
              />
            </FormGroup>

            <FormGroup>
              <Label for="refilledDate">Last Refilled Date</Label>
              <Input
                type="text"
                name="refilledDate"
                id="refilledDate"
                readOnly
                value={formValues.refilledDate}
              />
            </FormGroup>

            <FormGroup>
              <Label for="unitPrice">Unit Price</Label>
              <Input
                type="number"
                step="0.01"
                name="unitPrice"
                id="unitPrice"
                placeholder={formValues.unitprize}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="stockAmount">Stock Amount </Label>
              <Input
                type="number"
                step="0.01"
                name="stockAmount"
                id="stockAmount"
                placeholder={formValues.stockamount}
                onChange={handleChange}
              />
            </FormGroup>

            <Button color="primary" type="submit">
              {" "}
              Submit{" "}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

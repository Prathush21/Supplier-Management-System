import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import '../../styles/styles_1.css';
import React, { useState, useEffect } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import axios from "axios";

export default function AddSupplRecord() {
  const initialValues = {
    sup_ID: "",
    unit_Prize: "",
    amount: "",
    date: null,
    type: "",
    availability: "",
  };
  const [formValues, setformValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setformErrors] = useState({});
  const [data, setData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));
    setIsSubmit(true);
    setData(formValues);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      sendData();
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if (isNaN(values.sup_ID)) {
      errors.sup_ID = "Supplier ID is numeric !";
    }

    return errors;
  };

  const sendData = () => {
    const url = "http://localhost:3000/supplyRecord/create";
    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Container-fluid shadow-2-strong">
      <Form className="form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="sup_ID">Supplier ID</Label>
          <Input
            type="text"
            name="sup_ID"
            id="sup_ID"
            required={true}
            invalid={formErrors.sup_ID === "Supplier ID is numeric !"}
            onChange={handleChange}
          />
          <p class="fst-italic fw-bolder" style={{ color: "#f93154" }}>
            {formErrors.sup_ID}
          </p>
        </FormGroup>

        <FormGroup>
          <Label for="unit_Prize">Unit Price</Label>
          <Input
            type="number"
            step="0.01"
            name="unit_Prize"
            id="unit_Prize"
            required={true}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="amount">amount</Label>
          <Input
            type="number"
            step="0.01"
            name="amount"
            id="amount"
            required={true}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="date">Received Date</Label>
          <Input
            type="date"
            name="date"
            id="date"
            required={true}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="type">Type</Label>

          <DropdownButton
            alignRight
            title="Select type"
            id="type"
            variant="light"
            required={true}
            onChange={handleChange}
          >
            <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
            <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
            <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
          </DropdownButton>
        </FormGroup>
        <FormGroup>
          <Label for="availability">Availability</Label>

          <DropdownButton
            alignRight
            title="Select Availability"
            id="availability"
            variant="light"
            required={true}
            onChange={handleChange}
          >
            <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
            <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
            <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
          </DropdownButton>
        </FormGroup>

        <Button color="primary" type="submit">
          {" "}
          Submit{" "}
        </Button>
      </Form>
    </div>
  );
}

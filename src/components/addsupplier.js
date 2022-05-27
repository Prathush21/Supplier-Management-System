import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../styles/supplyrecords.css";
import { format } from "date-fns";
import React, { useState } from "react";

export default function AddSupplier() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [date, setDate] = useState("");
  const [errorMessage, setErrorMessage] = useState('')
  const [errorexist, setErrorExist] = useState(false)




  const errors = { email: "" };

  const validateDate = (value) => {
    
    if (new Date(value)<=new Date()) {
      setDate(value);
      setErrorMessage('')
    } else {
      setErrorMessage('Enter Valid Date!')
      setErrorExist(true)
    }
  }

  return (
    <div className="Container-fluid">
      <Form className="form">
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="exampleName" required="true" />
        </FormGroup>

        <FormGroup>
          <Label for="exampleEmail">Email Address</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            required="true"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
        </FormGroup>

        <FormGroup>
          <Label for="ContactNo">Contact Number</Label>
          <Input
            type="text"
            name="contactno"
            id="contactnumber"
            required="true"
            pattern="[0][0-9]{9}"
          />
        </FormGroup>

        <FormGroup>
          <Label for="address">Address</Label>
          <Input type="text" name="address" id="address" required="true" />
        </FormGroup>
        <FormGroup>
          <Label for="date">Joined Date</Label>
          <Input
            type="date"
            name="joineddate"
            id="joineddate"
            required="true"
            onChange={(e) => validateDate(e.target.value)} 
          />
          <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</span>
        </FormGroup>

        <Button color="primary" > Submit </Button>
      </Form>
    </div>
  );
}

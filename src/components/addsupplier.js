import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../styles/supplyrecords.css";
import React, { useState } from "react";
import axios from "axios";

export default function AddSupplier() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');

  const sendData = {
    method: 'post',
    url: '../server/src/controller/$',
    data: {
      name : name,
      email : email,
      contact : contact,
      address : address,
      date : date
    }
  };

  return (
    <div className="Container-fluid">
      <Form className="form">
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="exampleName" 
          onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleEmail">Email Address</Label>
          <Input type="email" name="email" id="exampleEmail" 
          onChange={(e) => setEmail(e.target.value)}/>
        </FormGroup>

        <FormGroup>
          <Label for="ContactNo">Contact Number</Label>
          <Input type="text" name="contactno" id="contactnumbesr" 
          onChange={(e) => setContactNumber(e.target.value)}/>
        </FormGroup>

        <FormGroup>
          <Label for="address">Address</Label>
          <Input type="text" name="address" id="address" 
          onChange={(e) => setAddress(e.target.value)}/>
        </FormGroup>

        <FormGroup>
          <Label for="date">Joined Date</Label>
          <Input type="date" name="joineddate" id="joineddate" 
          onChange={(e) => setDate(e.target.value)}/>
        </FormGroup>

        <Button color="primary"
        onClick={axios(sendData)}> Submit </Button>
      </Form>
    </div>
  );
}

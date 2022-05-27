import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../styles/supplyrecords.css";
import React, { useState } from 'react';
import { DropdownButton, Dropdown } from "react-bootstrap";
import axios from axios;

export default function AddSupplRecord() {
  const {sup_ID, setSupplyID} = useState('');
  const {unit_Prize, setUnitPrice} = useState('');
  const {amount, setAmount} = useState('');
  const {date, setDate} = useState('');
  const {type, setType} = useState('');
  const {availability, setAvailability} = useState('');


  const sendData = {
    method: 'post',
    url: '/login',
    data: {
      sup_ID : sup_ID,
      unit_Prize : unit_Prize,
      amount : amount,
      type : type,
      date : date,
      availability : availability
    }
  };

  axios(sendData);

  return (
    <div className="Container-fluid">
      <Form className="form">
        <FormGroup>
          <Label for="supplID">Supplier ID</Label>
          <Input 
          type="text" 
          name="supplID" 
          id="supplID" 
          onChange={(e) => setSupplyID(e.target.value)}/>
        </FormGroup>

        <FormGroup>
          <Label for="UnitPrice">Unit Price</Label>
          <Input type="number" 
          step="0.01" 
          name="unitprice" 
          id="unitprice" 
          onChange={(e) => setUnitPrice(e.target.value)}/>
        </FormGroup>

        <FormGroup>
          <Label for="Amount">Amount</Label>
          <Input type="number" step="0.01" name="amount" id="amount" 
          onChange={(e) => setAmount(e.target.value)}/>
        </FormGroup>

        <FormGroup>
          <Label for="date">Received Date</Label>
          <Input type="date" name="receivedddate" id="receiveddate" 
          onChange={(e) => setDate(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label for="type">Type</Label>

          <DropdownButton
            alignRight
            title="Select type"
            id="dropdown-menu-align-right"
            variant="secondary"
            onChange={(e) => setType(e.target.value)}
          >
            <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
            <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
            <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
          </DropdownButton>
        </FormGroup>
        <FormGroup>
          <Label for="availability">Availability</Label>

          <DropdownButton
            alignRight
            title="Select Availability"
            id="dropdown-menu-align-right"
            variant="secondary"
            onChange={(e) => setAvailability(e.target.value)}
          >
            <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
            <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
            <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
          </DropdownButton>
        </FormGroup>

        <Button 
        color="primary"
        onClick={sendData}> Submit </Button>
      </Form>
    </div>
  );
}

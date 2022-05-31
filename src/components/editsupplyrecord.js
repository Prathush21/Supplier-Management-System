import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../styles/supplyrecords.css";
import React, { useState } from "react";
import axios from "axios";

export default function EditSupplyRecords(props) {
  
  const [supplierid, setSupplierId] = useState('');
  const [unitprice, setUnitPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [availability, setAvailability] = useState('');
  const [receiveddate, setReceivedDate] = useState('');

  const [errorMessage, setErrorMessage] = useState('')

  
  const supplyrecords = [
    {
      id: 100,
      supplierid: 1250,
      unitprice: 20,
      amount: 10000,
      type: 'kg',
      availability: "yes",
      receiveddate: "2015-10-18",
    },
    {
      id: 100,
      supplierid: 1250,
      unitprice: 20,
      amount: 10000,
      type: 'kg',
      availability: "yes",
      receiveddate: "2015-10-18",
    },
  ];

    const data = supplyrecords[props.row];
    setId(data.id);

  const validateDate = (value) => {
    
    if ((new Date(value) <= new Date())) {
      setDate(value);
      setErrorMessage('')
    } else {
      setErrorMessage('Enter Valid Date!')
    }
  }

  const sendData = () => {

    const url = 'http://localhost:3000/supplyRecord/edit/:id' //Edit Supplier

    const data = {
        id: id,
        supplierid: supplierid,
        unitprice: unitprice,
        amount: amount,
        type: type,
        availability: availability,
        receiveddate: receiveddate,
    }
    axios.post(url, data)
    .then((res) => {
      console.log("response", res)
    }).catch(err => {
      console.log("error::::", err)
    })
  };

  return (
    <div className="Container-fluid">
      <Form className="form">
        <FormGroup>
          <Label for="supplierid">Supplier ID</Label>
          <Input type="text" name="supplierid" id="examplesupplierid" placeholder={data.supplierid}  required='true'
          onChange={(e) => setSupplierId(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="unitprice">Unit Price</Label>
          <Input type="unitprice" name="unitprice" id="exampleunitprice" placeholder={data.unitprice} required='true'
          onChange={(e) => setUnitPrice(e.target.value)}/>
        </FormGroup>

        <FormGroup>
          <Label for="amount">Amount</Label>
          <Input type="number" step ="0.01" name="amount" id="exampleamount"  placeholder={data.amount} required='true'
          onChange={(e) => setAmount(e.target.value)}/>
        </FormGroup>

        <FormGroup>
          <Label for="type">Type</Label>
          <Input type="text" name="type" id="exampletype" placeholder={data.type} required='true' 
          onChange={(e) => setType(e.target.value)}/>
        </FormGroup>

        <FormGroup>
          <Label for="type">Availability</Label>
          <Input type="text" name="availability" id="exampleavailability" placeholder={data.availability} required='true'
          onChange={(e) => setAvailability(e.target.value)}/>
        </FormGroup>

        <FormGroup>
          <Label for="type">ReceivedDate</Label>
          <Input type="date" name="receivedDate" id="examplereceivedDate" placeholder={data.receiveddate} required='true' 
          onChange={(e) => setReceivedDate(e.target.value)}/>
        </FormGroup>

        <Button color="primary"
        onClick={sendData}> Submit </Button>
      </Form>
    </div>
  );
}

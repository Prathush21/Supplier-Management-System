import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import '../../styles/styles_1.css';
import React, { useState } from "react";
import axios from "axios";

export default function EditSupplyManager(props) {
  
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContactNumber] = useState('');
  const [date, setDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  
  const supplymanagers = [
    {
      id: 100,
      name: "Kamal",
      email: "kamal@gmail.com",
      contactno: "0759862565",
      joineddate: "2015-10-18",
    },
    {
      id: 100,
      name: "Nimal",
      email: "nimal@gmail.com",
      contactno: "0759862565",
      joineddate: "2015-10-18",
    },
  ];

    const data = supplymanagers[props.row];
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

    const url = 'http://localhost:8087/supplyRecord/edit/:id' //Edit Supplier

    const data = {
      id : id,
      name : name,
      email : email,
      contact : contact,
      date : date
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
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="exampleName" placeholder={data.name}  required='true'
          onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleEmail">Email Address</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder={data.email} required='true'
          onChange={(e) => setEmail(e.target.value)}/>
        </FormGroup>

        <FormGroup>
          <Label for="ContactNo">Contact Number</Label>
          <Input type="text" name="contactno" id="contactnumbesr" placeholder={data.contactno} required='true'
          onChange={(e) => setContactNumber(e.target.value)}/>
        </FormGroup>

        <FormGroup>
          <Label for="date">Joined Date</Label>
          <Input type="text" name="joineddate" id="joineddate" value={data.joineddate} required='true'
          onChange={(e) => validateDate(e.target.value)}/>
          <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</span>
        </FormGroup>

        <Button color="primary"
        onClick={sendData}> Submit </Button>
      </Form>
    </div>
  );
}

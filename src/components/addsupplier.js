import { Button, Form, FormGroup, Input, Label, FormFeedback,FormText } from "reactstrap";
import "../styles/supplyrecords.css";
import React, { useState } from "react";
import axios from "axios";

export default function AddSupplier() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState(null);
  const [errorDate, setErrorDate] = useState('');
  const [errorContactNo, setErrorContactNo] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState(''); 

  const validateDate = (value) => { 
    if ((new Date(value) <= new Date())) {
      setDate(value);
      setErrorDate('')
      return true;
    } else {
      setErrorDate('Enter Valid Date!')
      return false;
    }
  }

  const validateContactNumber = (value) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if(re.test(value)){
      setContactNumber(value);
      setErrorContactNo('')
      return true;
    }else{
      setErrorContactNo('Invalid Contact Number!')
      return false;
    }
  }

  const validateName = (value) => {
    if (value.length > 2 ) {
      setName(value)
      setErrorName('')
      return true;
    } else {
      setErrorName('Name should be at least 3 characters!')
      return false;
    }
  }

  const sendData = () => {
    if (validateDate && validateContactNumber && validateName ) {
      const url = 'http://localhost:3000/supplier/create'
      const data = {
          name : name,
          email : email,
          contact : contact,
          address : address,
          date : date
      }
      axios.post(url,data).then((res) => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })      
    }

    

    const url = 'http://localhost:3000/supplier/create'
    const data = {
        name : name,
        email : email,
        contact : contact,
        address : address,
        date : date
    }
    axios.post(url,data).then((res) => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  };
  
  return (
    <div className="Container-fluid shadow-2-strong">
      <Form className="form">
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="exampleName" required='true'
          onChange={(e) => validateName(e.target.value)}/>
          <FormFeedback>{errorName}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="exampleEmail">Email Address</Label>
          <Input type="email" name="email" id="exampleEmail" required='true'
          onChange={(e) => setEmail(e.target.value)}/>
        </FormGroup>

        <FormGroup>
          <Label for="ContactNo">Contact Number</Label>
          <Input type="text" name="contactno" id="contactnumbesr" required='true'
          onChange={(e) => validateContactNumber(e.target.value)}/>
          <FormFeedback>{errorContactNo}</FormFeedback>
          <FormFeedback>Sample FOrm</FormFeedback>
          <FormText>form test</FormText>
        </FormGroup>

        <FormGroup>
          <Label for="address">Address</Label>
          <Input type="text" name="address" id="address" required='true'
          onChange={(e) => setAddress(e.target.value)}/>
        </FormGroup>

        <FormGroup>
          <Label for="date">Joined Date</Label>
          <Input type="date" name="joineddate" id="joineddate" required='true'
          onChange={(e) => validateDate(e.target.value)}/>
          <FormFeedback>{errorDate}</FormFeedback>
        </FormGroup>

        <Button type='submit' color="primary"
        onClick={sendData}> Submit </Button>
        
      </Form>
    </div>
  );
}

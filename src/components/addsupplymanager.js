import React, {useState} from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
<<<<<<< HEAD:src/pages/addsupplymanager.js
import '../components/addsupplymanager.css';
import axios from 'axios';


export default function AddSupplyManager() {
  
    const [name, setName]  = useState('');
    const [email, setEmail]  = useState('');
    const [contactNo, setContactNo]  = useState('');
    const [date, setDate]  = useState('');

    const sendDataToAPI = () => {
      axios.post('',
      name,
      email,
      contactNo,
      date)
    }

    return (
      <div className="Container">
        <h2>New Supply Manager </h2>
        <Form className="form">
          <FormGroup>
            <Label for="name">Name</Label>
=======
  import '../styles/supplyrecords.css'

  export default function addsupplymanager() {
   
      return (
        <div className="Container-fluid">
          <h2>New Supply Manager </h2>
          <Form className="form">
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="exampleName"
                
              />
            </FormGroup>
            <FormGroup>
            <Label for="exampleEmail">Email Address</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
             
            />
            <Label for="ContactNo">Contact Number</Label>
>>>>>>> 909ee4783e383bbca3e7fd910e6f3757729d882b:src/components/addsupplymanager.js
            <Input
              type="text"
              name="name"
              id="exampleName"
              onChange={(e) => setName(e.target.value)}
              
            />
          </FormGroup>
          <FormGroup>
          <Label for="exampleEmail">Email Address</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail" 
            onChange={(e) => setEmail(e.target.value)}
                 
          />
          <Label for="ContactNo">Contact Number</Label>
          <Input 
            type="text"
            name="contactno"
            id="contactnumbesr" 
            onChange={(e) => setContactNo(e.target.value)}
            
          />
          <Label for="date">Joined Date</Label>
          <Input
            type="date"
            name="joineddate"
            id="joineddate"
            onChange={(e) => setDate(e.target.value)}
            
          />

          </FormGroup>
        <Button color="primary" onClick={sendDataToAPI}> Submit </Button>
      </Form>
    </div>
  );
}
  
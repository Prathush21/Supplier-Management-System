import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../styles/supplyrecords.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function EditDetails() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const userDetails = [
    {
      id: 1,
      name: "Lokesh Kanagaraj",
      username: "lokesh24",
      email: "example@gmail.com",
      contactNumber: "0768582163",
    },
  ];

  axios.get("http://localhost:3000/") //Edit Page

  .then(getUserDetails => {
    userDetails.append(getUserDetails.data);
    console.log(getUserDetails)
  }).catch(err => {
    console.log(err)
  })

  const sendData = () => {
    const url = 'http://localhost:3000/'  //EDIT DETAILS

    const data = {
      name : name,
      email : email,
      contactNumber : contactNumber
    }
    axios.post(url, data)
    .then((res) => {
      console.log("response", res)
    }).catch(err => {
      console.log("error::::", err)
    })
  };

  useEffect(() => {
    setName(userDetails[0].name);
    setEmail(userDetails[0].email);
    setContactNumber(userDetails[0].contactNumber);
  });

  return (
    <div className="Container-fluid shadow-2-strong">

      <Form className="form">
        <FormGroup>
          <Label for="Name">Name</Label>
          <Input type="text" name="Name" id="Name"
          placeholder={name}
          onChange={(e) => setName(e.target.value)}/>
        </FormGroup>

        <FormGroup>
          <Label for="email">Email Address</Label> 
          <Input type="text" name="email" id="email" 
          placeholder={email}
          onChange={(e) => setEmail(e.target.value)}/>
        </FormGroup>

        <FormGroup>
          <Label for="contactno">Contact number</Label>
          <Input type="text"  name="contactno" id="contactno" 
          placeholder={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}/>
        </FormGroup>

     
        <Button color="primary"
        onClick={axios(sendData)}> Update </Button>
      </Form>
    </div>
  );
}

import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../styles/supplyrecords.css";
import React, { useState } from "react";
import axios from "axios";

export default function AddGood() {
  const [typename, setTypeName] = useState('');
  const [unit, setUnit] = useState('');
  const [image, setImage] = useState('');

  const sendData = {
    method: 'post',
    url: '../server/src/controller/$',
    data: {
      typename : typename,
      unit : unit,
      image : image,
    }
  };

  return (
    <div className="Container-fluid">
      <Form className="form">
        <FormGroup>
          <Label for="typename">Type Name</Label>
          <Input type="text" name="typename" id="typename" 
           onChange={(e) => setTypeName(e.target.value)}/>
        </FormGroup>

        <FormGroup>
          <Label for="unit">Unit</Label>
          <Input type="text" name="unit" id="unit" 
           onChange={(e) => setUnit(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input type="file" name="image" id="image"
           onChange={(e) => setImage(e.target.value)} />
        </FormGroup>

        <Button color="primary"
        onClick={axios(sendData)}> Submit </Button>
      </Form>
    </div>
  );
}

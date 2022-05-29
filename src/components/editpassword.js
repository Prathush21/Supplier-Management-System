import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../styles/supplyrecords.css";
import axios from "axios";
import React, { useState } from "react";

export default function EditPassword() {
  const [oldpass, setOldPass] = useState('');
  const [newpass, setNewPass] = useState('');
  const [repass, setRePass] = useState('');

  const sendData = {
    method: 'post',
    url: '../server/src/controller/$',
    data: {
      oldpass : oldpass,
      newpass : newpass,
      repass : repass
    }
  };


  return (
    <div className="Container-fluid shadow-2-strong">
      <Form className="form">
        <FormGroup>
          <Label for="oldpass">Old Password</Label>
          <Input type="password"  name="oldpass" id="oldpass" 
          onChange={(e) => setOldPass(e.target.value)}/>
        </FormGroup>

        <FormGroup>
          <Label for="newpass">New Password</Label>
          <Input type="password"  name="newpass" id="newpass" 
          onChange={(e) => setNewPass(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label for="repass">Re-enter new password</Label>
          <Input type="password"  name="repass" id="repass" 
          onChange={(e) => setRePass(e.target.value)}/>
        </FormGroup>
        
        <Button color="primary"
        onClick={axios(sendData)}> Submit </Button>
      </Form>
    </div>
  );
}
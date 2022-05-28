import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../styles/supplyrecords.css";
import axios from "axios";
import React, { useState } from "react";

export default function EditUsername() {
  const [oldusername, setOldusername] = useState('');
  const [newusername, setNewusername] = useState('');
  const [reusername, setReusername] = useState('');

  const sendData = {
    method: 'post',
    url: '../server/src/controller/$',
    data: {
      oldusername : oldusername,
      newusername : newusername,
      reusername : reusername
    }
  };

  return (
    <div className="Container-fluid">

      <Form className="form">
        <FormGroup>
          <Label for="oldusername">Old Username</Label>
          <Input type="text" name="oldusername" id="oldusername" 
          onChange={(e) => setOldusername(e.target.value)}/>
        </FormGroup>

        <FormGroup>
          <Label for="newusername">New username</Label> 
          <Input type="text" name="newusername" id="newusername" 
          onChange={(e) => setNewusername(e.target.value)}/>
        </FormGroup>
        
        <FormGroup>
          <Label for="reusername">Re-enter new username</Label>
          <Input type="text"  name="reusername" id="reusername" 
          onChange={(e) => setReusername(e.target.value)}/>
        </FormGroup>

        <Button color="primary"
        onClick={axios(sendData)}> Submit </Button>
      </Form>
    </div>
  );
}

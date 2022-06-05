import { Button, Form, FormGroup, Input, Label, Alert } from "reactstrap";
import '../../styles/styles_1.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AddGood() {
  const initialValues = {type:'', unit:'', image:''};
  const [formValues,setformValues] = useState(initialValues)
  const [isSubmit,setIsSubmit] = useState(false);
  const [formErrors, setformErrors] = useState({})
  const [data, setData] = useState(null)
  const [show, setShow] = useState(false);
  const [alertColor, setAlertColor] = useState('')
  const [alertMessage, setAlertMessage] = useState('')

  const setShowToTrue = () => {
    setShow(true);
  };

  const setShowToFalse = () => {
    setShow(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({...formValues, [name]:value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));
    setIsSubmit(true);  
    setData(formValues);
  }

  useEffect(() => {

    if(Object.keys(formErrors).length === 0 && isSubmit){
        sendData()
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {}
    
    // if ((values.type).length > 15 ){
    //   errors.type = 'Type Name must be at most 15 characters';
    // }

    // if ((values.unit).length > 10 ){
    //   errors.unit = 'Unit must be at most 10 characters';
    // }
    
    return errors;
  }

  const sendData = () => {
    const url = "http://localhost:8087/storage/addgood"
    axios.post(url, data)
    .then((res) => {
      console.log("response", res)
      setAlertColor("info");
      setAlertMessage("Successfully added.");
      setShowToTrue();
    }).catch(err => {
      console.log("error::::", err)
      setAlertColor("danger");
      setAlertMessage("Error!");
      setShowToTrue();
    })
  };

  return (
    <React.Fragment>
    <Alert isOpen={show} color={alertColor} toggle={setShowToFalse}>
      <p>{alertMessage}</p>
    </Alert>
    <div className="Container-fluid shadow-2-strong">
      <Form className="form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="type">Type Name</Label>
          <Input type="text" name="type" id="type" required={true}
           onChange={handleChange} invalid={(formErrors.type === 'Type Name must be at most 15 characters')}/>
            <p class="fst-italic fw-bolder" style={{color:'#f93154'}}>{formErrors.type}</p>
        </FormGroup>

        <FormGroup>
          <Label for="unit">Unit</Label>
          <Input type="text" name="unit" id="unit" required={true}
           onChange={handleChange} invalid={(formErrors.unit === 'Unit must be at most 10 characters')}/>
            <p class="fst-italic fw-bolder" style={{color:'#f93154'}}>{formErrors.unit}</p>
        </FormGroup>
        <FormGroup>
          <Label for="unit_price">Unit Price</Label>
          <Input type="text" name="unit_price" id="unit_price" 
           onChange={handleChange} />
        </FormGroup>

        <Button color="primary" type="submit"> Submit </Button>
      </Form>
    </div>
    </React.Fragment>
  );
}

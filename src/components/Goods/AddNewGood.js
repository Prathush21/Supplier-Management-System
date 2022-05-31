import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import '../../styles/styles_1.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AddGood() {
  const initialValues = {typename:'', unit:'', image:''};
  const [formValues,setformValues] = useState(initialValues)
  const [isSubmit,setIsSubmit] = useState(false);
  const [formErrors, setformErrors] = useState({})
  const [data, setData] = useState(null)

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
    
    if ((values.typename).length > 15 ){
      errors.typename = 'Type Name must be at most 15 characters';
    }

    if ((values.unit).length > 10 ){
      errors.unit = 'Unit must be at most 10 characters';
    }
    
    return errors;
  }

  const sendData = () => {
    const url = "/supplyRecord/createGood"
    axios.post(url, data)
    .then((res) => {
      console.log("response", res)
    }).catch(err => {
      console.log("error::::", err)
    })
  };

  return (
    <div className="Container-fluid shadow-2-strong">
      <Form className="form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="typename">Type Name</Label>
          <Input type="text" name="typename" id="typename" required={true}
           onChange={handleChange} invalid={(formErrors.typename === 'Type Name must be at most 15 characters')}/>
            <p class="fst-italic fw-bolder" style={{color:'#f93154'}}>{formErrors.typename}</p>
        </FormGroup>

        <FormGroup>
          <Label for="unit">Unit</Label>
          <Input type="text" name="unit" id="unit" required={true}
           onChange={handleChange} invalid={(formErrors.unit === 'Unit must be at most 10 characters')}/>
            <p class="fst-italic fw-bolder" style={{color:'#f93154'}}>{formErrors.unit}</p>
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input type="file" name="image" id="image" 
           onChange={handleChange} />
        </FormGroup>

        <Button color="primary" type="submit"> Submit </Button>
      </Form>
    </div>
  );
}

import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import '../../styles/styles_1.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function EditSupplier(props) {
  const suppliers = props.suppliers;

  const initialValues = suppliers[props.row];
  const joined = initialValues.joined_date
  initialValues.joined_date = joined.slice(0,10)
  const [formValues,setformValues] = useState(initialValues)
  const [isSubmit,setIsSubmit] = useState(false);
  const [formErrors, setformErrors] = useState({})
  const [data, setData] = useState(null);

  const sendData = () => {
    const ID = data.id;
    const url = `http://localhost:8087/supplier/edit/${ID}` 

    console.log(data)
    axios.post(url, data)
    .then((res) => {
      console.log("response", res)
    }).catch(err => {
      console.log("error::::", err)
    })
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
    const reContact = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    const reEmail =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    
    if ((values.name).length <3){
      errors.name = 'Name must be at least 3 characters';
    }
    if(!reEmail.test(values.email)){
      errors.email = 'Invalid Email Address';
    }
    
    if(!reContact.test(values.contact)){
      errors.contact = 'Invalid Contact Number'
    }
    return errors;
  } 
  
  // console.log(formValues)
  return (
    <div className="Container-fluid">
      <Form className="form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" value={formValues.name} required={true}
          onChange={handleChange} invalid={(formErrors.name === 'Name must be at least 3 characters')}/>
          <p class="fst-italic fw-bolder" style={{color:'#f93154'}}>{formErrors.name}</p>

        </FormGroup>

        <FormGroup>
          <Label for="email">Email Address</Label>
          <Input type="email" name="email" id="email" value={formValues.email} required={true}
          onChange={handleChange} invalid={(formErrors.email === 'Invalid Email Address')} />
          <p class="fst-italic fw-bolder" style={{color:'#f93154'}}>{formErrors.email}</p>
        </FormGroup>

        <FormGroup>
          <Label for="contact">Contact Number</Label>
          <Input type="text" name="contact" id="contact" value={formValues.contact}  required={true}
          onChange={handleChange} invalid={(formErrors.contact === 'Invalid Contact Number')}/>
          <p class="fst-italic fw-bolder" style={{color:'#f93154'}}>{formErrors.contact}</p>
        </FormGroup>

        <FormGroup>
          <Label for="address">Address</Label>
          <Input type="text" name="address" id="address" value={formValues.address} required={true}
          onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
          <Label for="joined_date">Joined Date</Label>
          <Input type="text" name="joined_date" id="joined_date" 
          readOnly
          value={formValues.joined_date} required={true}
          onChange={handleChange}/>
        </FormGroup>

        <Button color="primary" type="submit" > Submit </Button>
      </Form>
    </div>
  );
}

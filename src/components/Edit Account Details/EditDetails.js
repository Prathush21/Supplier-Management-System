import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import React, { useEffect, useState } from "react";
import '../../styles/styles_1.css';

export default function EditDetails(props) {
  const initialValues = props.userDetails;
  initialValues.newpass = ''
  initialValues.repass = ''

  const [formValues,setformValues] = useState(initialValues)
  const [isSubmit,setIsSubmit] = useState(false);
  const [formErrors, setformErrors] = useState({})
  const [data, setData] = useState(null);


  // const userDetails = [
  //   {
  //     id: 1,
  //     name: "Lokesh Kanagaraj",
  //     username: "lokesh24",
  //     email: "example@gmail.com",
  //     contactNumber: "0768582163",
  //   },
  // ];

  // axios.get("/manager/update") //Edit Page

  // .then(getUserDetails => {
  //   userDetails.append(getUserDetails.data);
  //   console.log(getUserDetails)
  // }).catch(err => {
  //   console.log(err)
  // })

  const sendData = () => {
    const url = 'http://localhost:8087/manager/update'  //EDIT DETAILS

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
    
    if ((values.name).length < 3){
      errors.name = 'Name must be at least 3 characters';
    }
    if(!reEmail.test(values.email)){
      errors.email = 'Invalid Email Address';
    }
    
    if(!reContact.test(values.contact)){
      errors.contact = 'Invalid Contact Number'
    }
    if((values.newpass).length < 8){
      errors.newpass = 'Password must be at least 8 characters';
    }
    if(!(values.newpass === values.repass)){
      errors.repass = 'Password did not match !'
    }
    return errors;
  } 
  

  return (
    <div className="Container-fluid shadow-2-strong">

      <Form className="form" onSubmit={handleSubmit}>
      <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" value={formValues.name}
          onChange={handleChange} invalid={(formErrors.name === 'Name must be at least 3 characters')}/>
          <p class="fst-italic fw-bolder" style={{color:'#f93154'}}>{formErrors.name}</p>
        </FormGroup>


        <FormGroup>
          <Label for="email">Email Address</Label>
          <Input type="email" name="email" id="email" value={formValues.email}
          onChange={handleChange} invalid={(formErrors.email === 'Invalid Email Address')} />
          <p class="fst-italic fw-bolder" style={{color:'#f93154'}}>{formErrors.email}</p>
        </FormGroup>

        <FormGroup>
          <Label for="text">Address</Label> 
          <Input type="text" name="address" id="address" 
          value={formValues.address}
          onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
          <Label for="contact">Contact Number</Label>
          <Input type="text" name="contact" id="contact" value={formValues.contact} 
          onChange={handleChange} invalid={(formErrors.contact === 'Invalid Contact Number')}/>
          <p class="fst-italic fw-bolder" style={{color:'#f93154'}}>{formErrors.contact}</p>
        </FormGroup>

        <FormGroup>
          <Label for="newpass">New Password</Label>
          <Input type="password"  name="newpass" id="newpass" 
         onChange={handleChange} invalid={(formErrors.newpass === 'Password must be at least 8 characters')}/>
         <p class="fst-italic fw-bolder" style={{color:'#f93154'}}>{formErrors.newpass}</p>
        </FormGroup>
        <FormGroup>
          <Label for="repass">Re-enter new password</Label>
          <Input type="password"  name="repass" id="repass" 
          onChange={handleChange} invalid={(formErrors.repass === 'Password did not match !')}/>
          <p class="fst-italic fw-bolder" style={{color:'#f93154'}}>{formErrors.repass}</p>
        </FormGroup>

     
        <Button color="primary" type="submit"> Update </Button>
      </Form>
    </div>
  );
}

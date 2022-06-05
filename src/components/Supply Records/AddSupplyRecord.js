import { Button, Form, FormGroup, Input, Label, Alert } from "reactstrap";
import '../../styles/styles_1.css';
import React, { useState, useEffect } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import axios from "axios";

export default function AddSupplRecord() {
  const initialValues = {
    sup_ID: "",
    unit_prize: "",
    amount: "",
    received_date: null,
    type: "",
    availability: 1,
  };
  const [formValues, setformValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setformErrors] = useState({});
  const [data, setData] = useState(null);
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
    setformValues({ ...formValues, [name]: value });
  };

  const [supplyrecords, setSupplyRecords] = useState([]);
  const [types, setTypes] = useState([]);

  

  useEffect(() => {
    axios.get("http://localhost:8087/supplier/all")
      .then(getRecords => {
        // console.log(getRecords.data.data)
        setSupplyRecords(getRecords.data.data);
      }).catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    axios.get("http://localhost:8087/good/alltypes")
      .then(getGoods => {
        // console.log(getGoods.data.data)
        setTypes(getGoods.data.data)
        
      }).catch(err => {
        console.log(err)
      })
  })


  const dropdown1 = supplyrecords.map((o) => {
    return(
      <option value={o.id}>{o.name} - {o.id}</option>
    );
  })
  
  const dropdown2 = types.map((o) => {
    return(
      <option value={o.type}>{o.type}</option>
    );
  })

  



  const handleSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));
    if (formValues.type === "") {
      formValues.type = types[0].type;
    }
    if (formValues.sup_ID === "") {
      formValues.sup_ID = supplyrecords[0].id;
    }
    console.log(formValues);
    setIsSubmit(true);
    setData(formValues);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      sendData();
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if (isNaN(values.sup_ID)) {
      errors.sup_ID = "Supplier ID is numeric !";
    }

    // if ((new Date(values.date) <= new Date())) {
    //   errors.date = 'Enter Valid Date!';
    // }


    return errors;
  };

  const sendData = () => {
    const url = 'http://localhost:8087/supplyRecord/create';
    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        setAlertColor("info");
        setAlertMessage(res.data.message);
        setShowToTrue();
      })
      .catch((err) => {
        console.log(err);
        setAlertColor("danger");
        switch (err.request.status) {
          case 400:
            console.log(err.data.message);
            setAlertMessage(err.data.message);
            setShowToTrue();
            break;
          case 401:
            setAlertMessage(err.data.message);
            setShowToTrue();
            break;
          case 500:
            setAlertMessage("Server Error!");
            setShowToTrue();
            break;
          case 501:
            setAlertMessage("Server Error!");
            setShowToTrue();
            break;
          case 502:
            setAlertMessage("Server Error!");
            setShowToTrue();
            break;
          default:
            break;
        }
      });
  };

  return (
    <React.Fragment>
    <Alert isOpen={show} color={alertColor} toggle={setShowToFalse}>
      <p>{alertMessage}</p>
    </Alert>
    <div className="Container-fluid shadow-2-strong">
      <Form className="form" onSubmit={handleSubmit}>

        <FormGroup>
          <Label for="sup_ID">Supplier ID</Label>
          <select
            name="sup_ID"
            id="sup_ID"
            required={true}
            onChange={handleChange}
            className='form-select'
            value={formValues.sup_ID}
          >
            {dropdown1}
          </select>

        </FormGroup>

        <FormGroup>
          <Label for="unit_prize">Unit Price</Label>
          <Input
            type="number"
            step="0.01"
            name="unit_prize"
            id="unit_prize"
            value={formValues.unit_prize}
            required={true}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="amount">amount</Label>
          <Input
            type="number"
            step="0.01"
            name="amount"
            id="amount"
            value={formValues.amount}
            required={true}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="date">Received Date</Label>
          <Input
            type="date"
            name="received_date"
            id="received_date"
            value={formValues.received_date}
            required={true}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="type">Type</Label>

          <select
            name="type"
            id="type"
            required={true}
            onChange={handleChange}
            className='form-select'
            value={formValues.type}
          >
            {dropdown2}
          </select>

        </FormGroup>
        <Button color="primary" type="submit">
          {" "}
          Submit{" "}
        </Button>
      </Form>
    </div>
    </React.Fragment>
  );
}

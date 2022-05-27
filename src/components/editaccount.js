import { Button, Form, FormGroup, Input, Label, Row } from "reactstrap";
import "../styles/supplyrecords.css";
import { Table } from "react-bootstrap";
import{ ListGroup,ListGroupItem} from 'react-bootstrap'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple,
    MDBCol,
    MDBRow,
  } from "mdb-react-ui-kit";

export default function editAccount() {
  return (
    <div className="Container-fluid">
      <h2>Edit Account Information</h2>
      <Button color="primary" > Edit Account Details</Button> {' '} {' '}
          <Button color="primary" style={{ marginLeft: '.5rem' }}> Change Username </Button>
          <Button color="primary" style={{ marginLeft: '.6rem' }}> Change Password </Button>
          <br></br>
      <Table responsive>
          <br></br>
  <thead></thead>
  <tbody>
      <br></br>
    <tr>
      <td colSpan={5}><b>Name</b></td>
      <td>Lokesh Kanagaraj</td>

      
    </tr>
    <br></br>
    <tr>
      <td colSpan={5}><b>Username</b></td>
      <td>lokesh24</td>

      
    </tr>
    <br></br>
    <tr>
    <td colSpan={5}><b>Email Address</b></td>
      <td>example@gmail.com</td>

      
    </tr>
    <br></br>
    <tr>
    <td colSpan={5}><b>Contact Number</b></td>
      <td>0768582163</td>

    </tr>
  </tbody>
</Table>
     
    </div>
  );
}

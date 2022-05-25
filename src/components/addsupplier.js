import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../styles/supplyrecords.css";

export default function AddSupplier() {
  return (
    <div className="Container-fluid">
      <Form className="form">
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="exampleName" />
        </FormGroup>

        <FormGroup>
          <Label for="exampleEmail">Email Address</Label>
          <Input type="email" name="email" id="exampleEmail" />
        </FormGroup>
        <FormGroup>
          <Label for="ContactNo">Contact Number</Label>
          <Input type="text" name="contactno" id="contactnumbesr" />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input type="text" name="address" id="address" />
        </FormGroup>
        <FormGroup>
          <Label for="date">Joined Date</Label>
          <Input type="date" name="joineddate" id="joineddate" />
        </FormGroup>

        <Button color="primary"> Submit </Button>
      </Form>
    </div>
  );
}

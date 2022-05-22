import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../styles/addsupplymanager.css";
import { DropdownButton, Dropdown } from "react-bootstrap";

export default function addsupplrecord() {
  return (
    <div className="Container-fluid">
      <h2>New Supply Record </h2>
      <Form className="form">
        <FormGroup>
          <Label for="supplID">Supplier ID</Label>
          <Input type="text" name="supplID" id="supplID" />
        </FormGroup>
        <FormGroup>
          <Label for="UnitPrice">Unit Price</Label>
          <Input type="number" step="0.01" name="unitprice" id="unitprice" />
          <Label for="Amount">Amount</Label>
          <Input type="number" step="0.01" name="amount" id="amount" />

          <Label for="date">Received Date</Label>
          <Input type="date" name="receivedddate" id="receiveddate" />
          <Label for="type">Type</Label>

          <DropdownButton
            alignRight
            title="Select type"
            id="dropdown-menu-align-right"
            variant="secondary"
          >
            <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
            <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
            <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
          </DropdownButton>
          <Label for="availability">Availability</Label>

          <DropdownButton
            alignRight
            title="Select Availability"
            id="dropdown-menu-align-right"
            variant="secondary"
          >
            <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
            <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
            <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
            
          </DropdownButton>
        </FormGroup>
        <Button color="primary"> Submit </Button>
      </Form>
    </div>
  );
}

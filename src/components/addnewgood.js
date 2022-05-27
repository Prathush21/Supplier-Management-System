import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../styles/supplyrecords.css";

export default function AddGood() {
  return (
    <div className="Container-fluid">
      <Form className="form">
        <FormGroup>
          <Label for="typename">Type Name</Label>
          <Input type="text" name="typename" id="typename" />
        </FormGroup>

        <FormGroup>
          <Label for="unit">Unit</Label>
          <Input type="text" name="unit" id="unit" />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input type="file" name="image" id="image" />
        </FormGroup>

        <Button color="primary"> Submit </Button>
      </Form>
    </div>
  );
}

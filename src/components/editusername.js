import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../styles/supplyrecords.css";

export default function editUsername() {
  return (
    <div className="Container-fluid">
          <h2>Edit Username</h2>

     
      <Form className="form">
        <FormGroup>
          <Label for="oldusername">Old Username</Label>
          <Input type="text" name="oldusername" id="oldusername" />
        </FormGroup>

        <FormGroup>
          <Label for="newusername">New username</Label> 
          <Input type="text" name="newusername" id="newusername" />
        </FormGroup>
        <FormGroup>
          <Label for="reusername">Re-enter new username</Label>
          <Input type="text"  name="reusername" id="reusername" />
        </FormGroup>

        
        <Button color="primary"> Submit </Button>
      </Form>
    </div>
  );
}

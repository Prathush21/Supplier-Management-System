import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../styles/supplyrecords.css";

export default function editPassword() {
  return (
    <div className="Container-fluid">
              <h2>Edit Password</h2>

      <Form className="form">
        <FormGroup>
          <Label for="oldpass">Old Password</Label>
          <Input type="password"  name="oldpass" id="oldpass" />
        </FormGroup>

        <FormGroup>
          <Label for="newpass">New Password</Label>
          <Input type="password"  name="newpass" id="newpass" />
        </FormGroup>
        <FormGroup>
          <Label for="repass">Re-enter new password</Label>
          <Input type="password"  name="repass" id="repass" />
        </FormGroup>

        
        <Button color="primary"> Submit </Button>
      </Form>
    </div>
  );
}

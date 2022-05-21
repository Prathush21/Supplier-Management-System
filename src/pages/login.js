import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Image from "react-bootstrap/Image";

export default function Login() {
  return (
    <div className="container">
      <div className="row row-header">
        <div className="col-7 col-sm-6 loginHeading">
          <h1 className="">Supplier Management System</h1>
          <br></br>
          <div className="row">
            <Form>
              <FormGroup>
                <Label htmlFor="username" size="lg">
                  Username
                </Label>
                <Input type="text" id="username" name="username" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password" size="lg">
                  Password
                </Label>
                <Input type="password" id="password" name="password" />
              </FormGroup>
              <br></br>
              <div className="d-grid gap-2">
                <Button size="lg" type="submit" value="submit" color="primary">
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </div>

        <div class="col-5 col-sm-6 loginImage rounded float-end">
          <Image
            src="/assets/images/login.jpg"
            alt="Login"
            width="100%"
          ></Image>
        </div>

      </div>
      

    </div>
  );
}

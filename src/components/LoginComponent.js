import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
} from "reactstrap";
import Image from "react-bootstrap/Image";
import "../styles/login.css";
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";

export default function Login() {
  return (
    <div className="login">
      <div className="">
        <div className="">
          <div className="position-absolute top-50 start-50 translate-middle">
            <MDBCard
              className="shadow-5"
              style={{
                margin: "2rem",
                border: "0px",
                color: "#fff",
                backgroundColor: "rgba(255, 255, 255, 0.4)",
              }}
            >
              <MDBCardBody>
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
                      <Button
                        size="lg"
                        type="submit"
                        value="submit"
                        color="primary"
                      >
                        Login
                      </Button>
                    </div>
                  </Form>
                </div>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </div>
    </div>
  );
}

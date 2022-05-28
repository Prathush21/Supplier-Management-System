import React from "react";
import Image from "react-bootstrap/Image";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import "../styles/headercomponent.css";

export default function Header() {
  const name = "Supply Management System";
  return (
    <header>
      <Navbar dark expand="md">
        <div>
          <div className="row mt-2 mb-3 d-flex align-items-center">
            <div className="col-2 col-sm-1 ml-3">
              <NavbarBrand>
                <Image
                  roundedCircle
                  fluid
                  src="assets/images/logo.jpg"
                  alt="logo.jpg"
                />
              </NavbarBrand>
            </div>
            <div className="col-7">
              <h1 className="header1">{name}</h1>
            </div>
            <div className="col">
              <Nav className="ml-auto justify-content-end" navbar>
                <NavItem>
                  <Button color="light">
                    <span className="fa fa-sign-out fa-lg"></span> Logout
                  </Button>
                </NavItem>
              </Nav>
            </div>
          </div>
        </div>
      </Navbar>
    </header>
  );
}

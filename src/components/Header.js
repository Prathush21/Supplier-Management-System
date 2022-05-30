import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
} from "mdb-react-ui-kit";
import {Button} from "reactstrap";

export default function Header() {
  const name = "Supplier Management System";
  return (
    <>
      <MDBNavbar className="navigationBar">
        <MDBContainer fluid>
          <MDBNavbarBrand>
            <img
              src="/assets/images/logo_new.png"
              width="120"
              alt=""
              loading="lazy"
            />
            <h1 className="header1">{name}</h1>
          </MDBNavbarBrand>
          <MDBNavbarItem>
            <Button color="light">
              <span className="fa fa-sign-out fa-lg"></span> Logout
            </Button>
          </MDBNavbarItem>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

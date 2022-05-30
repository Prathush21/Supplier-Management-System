import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
} from "mdb-react-ui-kit";
import {Button} from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

export default function Header() {
  const auth = useAuth()
  const navigate = useNavigate()

  const name = "Supplier Management System";

  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }

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
          <NavLink style={{ color:"#fff" }} className="nav-link" to="editaccountdetails">
             {auth.user}
            </NavLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <Button color="light" onClick={handleLogout}>
              <span className="fa fa-sign-out fa-lg"></span> Logout
            </Button>
          </MDBNavbarItem>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

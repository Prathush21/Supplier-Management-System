import React from "react";
import Image from "react-bootstrap/Image";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import "../../styles/headercomponent.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/auth";

export default function Header() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  const name = "Supplier Management System";
  return (
    <header>
      <Navbar dark expand="md" className="ml-5">
        <div>
          <div className="row mt-2 mb-3 d-flex align-items-center">
            <div className="col-auto col-sm-1 ml-3">
              <Image
                heigth="60px"
                fluid
                src="/assets/images/logo_new.png"
                alt="logo.jpg"
              />
            </div>
            <div className="col-7 d-flex align-items-center">
                <h1 className="header1">{name}</h1>
  
            </div>
            <div className="col">
              <Nav className="ml-auto justify-content-end" navbar>
                <NavItem style={{ color: "#fff", margin: "5px" }}>
                  <span className="fa fa-user-o fa-lg"></span> {auth.user}
                </NavItem>
                <NavItem>
                  <Button color="light" className="shadow-sm" onClick={handleLogout}>
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

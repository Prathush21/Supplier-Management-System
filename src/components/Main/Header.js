import React from "react";
import { Container, Navbar, NavbarBrand, NavItem, Nav } from "reactstrap";
import { Button } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/auth";

export default function Header() {
  const auth = useAuth();
  const navigate = useNavigate();

  const name = "Supplier Management System";

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <>
      <Navbar className="navigationBar">
        <Container fluid>
          <Nav>
            {" "}
            <NavbarBrand>
              <img
                src="/assets/images/logo_new.png"
                width="120"
                alt=""
                loading="lazy"
              />
              <h1 className="header1">{name}</h1>
            </NavbarBrand>
          </Nav>
          <Nav>
            {" "}
            <NavItem>
              <span>
                {" "}
                <NavLink
                  style={{ color: "#fff", margin: "5px" }}
                  to="editaccountdetails"
                >
                  
                </NavLink>{" "}
                {"   "}
                <Button outline color="dark" onClick={handleLogout}>
                  <span className="fa fa-sign-out fa-lg"></span> Logout
                </Button>
              </span>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

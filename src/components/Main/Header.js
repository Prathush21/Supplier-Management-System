import React from "react";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavItem,
} from "reactstrap";
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
          <NavbarBrand>
            <img
              src="/assets/images/logo_new.png"
              width="120"
              alt=""
              loading="lazy"
            />
            <h1 className="header1">{name}</h1>
          </NavbarBrand>
          <NavItem>
            <span>
              {" "}
              <NavLink
                style={{ color: "#fff", margin: "5px" }}
                to="editaccountdetails"
              >
                {auth.user}
              </NavLink>{" "}
              {"   "}
              <Button color="light" onClick={handleLogout}>
                <span className="fa fa-sign-out fa-lg"></span> Logout
              </Button>
            </span>
          </NavItem>
        </Container>
      </Navbar>
    </>
  );
}

import React, { useState } from "react";
import { NavbarToggler, Collapse } from "reactstrap";
import NavigationBar from "./NavbarComponent";

export default function NavigationComponent() {
  const [showNavExternal, setShowNavExternal] = useState(false);

  return (
    <>
      <div className="d-md-none justify-content-center mt-2">
        <div className="justify-content-center ">
          <div className="container mx-auto mt-2">
            <NavbarToggler
              type="button"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowNavExternal(!showNavExternal)}
            >
              <span
                style={{ color: "#fff" }}
                className="fa fa-bars fa-lg"
              ></span>
            </NavbarToggler>
          </div>
          <Collapse show={showNavExternal}>
            <NavigationBar />
          </Collapse>
        </div>
      </div>
      <div className="d-none d-md-block">
        <NavigationBar />
      </div>
    </>
  );
}

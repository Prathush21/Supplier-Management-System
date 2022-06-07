import React, { useState } from "react";
import { Button, Collapse } from "reactstrap";
import NavigationBar from "./NavbarComponent";

export default function NavigationComponent() {
  const [showNavExternal, setShowNavExternal] = useState(false);

  return (
    <>
      <div className="d-md-none justify-content-center mt-2 mb-2">
        <div className="justify-content-center ">
          <div className="container mt-2 mb-2">
            <Button
              type="button"
              color="secondary"
              outline
              onClick={() => setShowNavExternal(!showNavExternal)}
            >
              <span
                style={{ color: "#fff" }}
                className="fa fa-bars fa-lg"
              ></span>
            </Button>
          </div>
          <Collapse isOpen={showNavExternal}>
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

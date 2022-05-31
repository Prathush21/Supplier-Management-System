import React from "react";
import {} from "reactstrap";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import NavigationComponent from "./ResponsiveNavbar";
import { useAuth } from "../utils/auth";

export default function Main() {

  return (
    <div>
      <Header />
      <div className="row main">
        <div className="col-12 col-md-2 navigationBar">
          <NavigationComponent />
        </div>
        <div className="col-12 col-md-10">
          <Outlet />
        </div>
      </div>

    </div>
  );
}

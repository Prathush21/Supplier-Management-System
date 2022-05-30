import React, { Component } from "react";
import {} from "reactstrap";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavigationComponent from "./ResponsiveNavbar";


class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row main">
          <div className="col-12 col-md-2 navigationBar">
            <NavigationComponent />
          </div>
          <div className="col-12 col-md-10">
            <Outlet/>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

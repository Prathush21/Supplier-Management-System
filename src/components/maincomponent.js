import React, { Component } from "react";
import Header from "./headercomponent";
import NavigationBar from "./navbarcomponent";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import SupplyManagers from "../components/supplymanagers";
import Suppliers from "../components/suppliers";
import AddSupplyRecord from "../components/addsupplyrecord";
import SupplyRecords from "../components/supplyrecords";
import Goods from "../components/goods";
import Storage from "../components/storage";
import EditAccountDetails from "../components/editaccountdetails";
import EditStorage from "../components/editstorage";
import {} from "reactstrap";
import EditSupplier from "../components/editsupplier";
import {} from "reactstrap";
import Home from "./homecomponent";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row main">
          <div className="col-12 col-md-2 navigationBar">
            <NavigationBar />
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

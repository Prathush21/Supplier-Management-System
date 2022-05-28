import React, { Component } from "react";
import Header from "./headercomponent";
import NavigationBar from "./navbarcomponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SupplyManagers from "./supplymanagers";
import Suppliers from "./suppliers";
import AddSupplyRecord from "./addsupplyrecord";
import SupplyRecords from "./supplyrecords";
import Goods from "./goods";
import Storage from "./storage";
import EditAccountDetails from "./editaccountdetails";
import EditStorage from "./editstorage";
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
            <Routes>
            <Route
                exact
                path="/home"
                element={<Home />}
              ></Route>
              <Route
                exact
                path="/supplymanagers"
                element={<SupplyManagers />}
              ></Route>
              <Route exact path="/suppliers" element={<Suppliers />}></Route>
              <Route
                exact
                path="/addsupplyrecord"
                element={<AddSupplyRecord />}
              ></Route>
              <Route
                exact
                path="/supplyrecords"
                element={<SupplyRecords />}
              ></Route>
              <Route exact path="/goods" element={<Goods />}></Route>
              <Route exact path="/storage" element={<Storage />}></Route>
              <Route path="/editstorage/:dataID" element={<EditStorage />} />
              <Route
                exact
                path="/editaccountdetails"
                element={<EditAccountDetails />}
              ></Route>
              <Route
                exact
                path="*"
                element={<Home />}
              ></Route>
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

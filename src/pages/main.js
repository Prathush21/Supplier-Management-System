import React, { Component } from "react";
import Header from "../components/headercomponent";
import NavigationBar from "../components/navbarcomponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SupplyManagers from "../components/supplymanagers";
import Suppliers from "../components/suppliers";
import AddSupplyRecord from "../components/addsupplyrecord";
import SupplyRecords from "../components/supplyrecords";
import Goods from "../components/goods";
import Storage from "../components/storage";
import EditAccountDetails from "../components/editaccountdetails";
import EditStorage from "../components/editstorage";

import {} from "reactstrap";

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
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

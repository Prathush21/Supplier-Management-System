import React, { Component } from "react";
import Header from "../components/headercomponent";
import NavigationBar from "../components/navbarcomponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddManager from "../components/addsupplymanager";
import AddSupplier from "../components/addsupplier";
import AddSupplyRecord from "../components/addsupplyrecord";
import SupplyRecords from "./supplyrecords";
import {} from "reactstrap";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-12 col-md-2 navigationBar">
            <NavigationBar />
          </div>
          <div className="col-12 col-md-10">
            <Router>
              <Routes>
                <Route path="/addmanager" element={<AddManager />}></Route>
                <Route path="/addsupplier" element={<AddSupplier />}></Route>
                <Route
                  path="/addsupplyrecord"
                  element={<AddSupplyRecord />}
                ></Route>
                <Route
                  path="/supplyrecords"
                  element={<SupplyRecords />}
                ></Route>

                <Route path="/main" element={<Main />}></Route>
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

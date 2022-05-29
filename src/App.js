import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import Login from "./components/LoginComponent";
import Main from "./components/maincomponent";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/homecomponent";
import SupplyManagers from "./components/supplymanagers";
import Suppliers from "./components/suppliers";
import SupplyRecords from "./components/supplyrecords";
import Good from "./components/goods";
import Storage from "./components/storage";
import EditAccountDetails from "./components/editaccountdetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="main" element={<Main />}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home />}></Route>
            <Route path="supplymanagers" element={<SupplyManagers />}></Route>
            <Route path="suppliers" element={<Suppliers />}></Route>
            <Route path="supplyrecords" element={<SupplyRecords />}></Route>
            <Route path="goods" element={<Good />}></Route>
            <Route path="storage" element={<Storage />}></Route>
            <Route
              path="editaccountdetails"
              element={<EditAccountDetails />}
            ></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

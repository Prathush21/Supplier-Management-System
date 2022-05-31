import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./utils/auth";
import { RequireAuth } from "./utils/RequireAuth";
import Login from "./components/LoginComponent";
import Main from "./components/Main/MainComponent";
import Home from "./components/Home/HomeComponent";
import SupplyManagers from "./components/Supply Managers/SupplyManagers";
import Suppliers from "./components/Suppliers/Suppliers";
import SupplyRecords from "./components/Supply Records/SupplyRecords";
import Good from "./components/Goods/Goods";
import Storage from "./components/Storage/Storage";
import EditAccountDetails from "./components/Edit Account Details/EditAccountDetails";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="main" element={<RequireAuth><Main /></RequireAuth>}>
              <Route index element={<Home />} />
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
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

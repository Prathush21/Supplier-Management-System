import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Main from "./pages/main";
import AddManager from "./components/addsupplymanager";
import AddSupplier from "./components/addsupplier";
import AddSupplyRecord from "./components/addsupplyrecord";




function App() {
  return (
    <div className='App'>
      <Main />
  
      <Router>
      <Routes>

      <Route path='/login' element={<Login />}></Route>
      <Route path='/addmanager' element={<AddManager />}></Route>
      <Route path='/addsupplier' element={<AddSupplier />}></Route>
      <Route path='/addsupplyrecord' element={<AddSupplyRecord />}></Route>
      <Route path='/main' element={<Main/>}></Route>


      </Routes>

      </Router>
     
       

    </div>
  );
}

export default App;

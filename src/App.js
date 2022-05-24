import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
<<<<<<< HEAD
import AddManager from "./pages/addsupplymanager";
import AddSupplier from "./pages/addsupplier";
import AddSupplyRecord from "./pages/addsupplyrecord";
=======
import Main from "./pages/main";
>>>>>>> 909ee4783e383bbca3e7fd910e6f3757729d882b

function App() {
  return (
    <div className='App'>
      <Main />
  
      <Router>
      <Routes>

      <Route path='/login' element={<Login />}></Route>
      <Route path='/main' element={<Main/>}></Route>


      </Routes>

      </Router>
    </div>
  );
}

export default App;

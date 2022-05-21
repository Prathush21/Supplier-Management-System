import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import AddManager from "./pages/addsupplymanager";


function App() {
  return (
    <div className="App">
  
      <Router>
      <Routes>

      <Route path='/login' element={<Login />}></Route>
      <Route path='/addmanager' element={<AddManager />}></Route>

      </Routes>

      </Router>
     
       

    </div>
  );
}

export default App;

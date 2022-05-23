import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Main from "./pages/main";

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

import react from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Signup from "./pages/SignUp.js";
import Login from "./pages/Login.js";
import Dashboard from "./pages/Dashboard.js";

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}
export default App;





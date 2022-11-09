import React from "react";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./Components/Signup"
import Demo from "./Components/Demo";
import Register from "./Components/Register";


function App() {
  return (
    <div className="App">
   <Router>


<Routes>



    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/demo" element={<Demo />} />
    <Route path="/seconddemo" element={<Register />} />





    
</Routes>
</Router>

    </div>
  );
}

export default App;

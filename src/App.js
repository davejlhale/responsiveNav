import React from 'react';
import {BrowserRouter , Routes,Route} from "react-router-dom"
import Navbar  from './components/Navbar';
import Homepage from './pages/Homepage';
import About from "./pages/About";
import DeveloperRoles from "./pages/DeveloperRoles"
import './App.css';

function App() {
  return (
   <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/DeveloperRoles" element={<DeveloperRoles />}/>
    </Routes>
    </BrowserRouter>
  );
}
  


export default App;
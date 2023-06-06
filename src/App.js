import React from 'react';
import {BrowserRouter , Routes,Route} from "react-router-dom"
import Navbar  from './components/Navbar';
import Homepage from './pages/Homepage';
import About from "./pages/About";
import DeveloperRoles from "./pages/DeveloperRoles"
import DeveloperRolesList from "./pages/DeveloperRolesList"
import SignUp from "./pages/SignUp"
import UnityPathway from "./pages/UnityPathway"
import UnityIndex from './pages/UnityIndex';
import './App.css';

function App() {
  return (
   <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/Unity" element={<UnityIndex />}/>
      <Route path="/DeveloperRoles" element={<DeveloperRoles />}/>
      <Route path="/DeveloperRolesList" element={<DeveloperRolesList />}/>
      <Route path="/UnityPathway" element={<UnityPathway />}/>
      <Route path="/UnityIndex" element={<UnityIndex />}/>
      <Route path="/SignUp" element={<SignUp />}/>
    </Routes>
    </BrowserRouter>
  );
}
  


export default App;
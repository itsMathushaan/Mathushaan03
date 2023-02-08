import React from 'react';
import '../src/CSS/Sidebar.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Navigate} from "react-router-dom";
import Sidebar from './components/Sidebar';
import Profile from './Pages/Profile';
import AdminDashboard from './Pages/adminDashboard';
import Employee from './components/empDatatable';
import Inventory from './Pages/Inventory';
import Access from './Pages/Access';
import Settings from './Pages/Settings';
import Support from './Pages/Support';

import Login from './Pages/Login';



const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/Access" element={<Access />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
    
  );
};



export default App;
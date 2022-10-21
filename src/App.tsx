import React from 'react';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom'
import  { Home, Patient } from './pages/index';
import './App.css';
import './pages/home/Home.css';
import './pages/patient/Patient.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/patient' element={<Patient />}/>
      </Routes>
    </Router>
  );
}

export default App;

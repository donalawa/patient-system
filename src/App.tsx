import React from 'react';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom'
import  { Home, Patient } from './pages/index';
import  Navbar from './components/Navbar';


import './App.css';
import './pages/home/Home.css';
import './pages/patient/Patient.css';
// import './components/Navbar/Navbar.css';

function App() {
  return (
    <div className='container'>
    <Navbar />
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/patient' element={<Patient />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom'
import  { Home, Appointment } from './pages/index';
import  Navbar from './components/Navbar';


import './App.css';
import './pages/home/Home.css';
import './pages/appointment/Appointment.css';
import './components/Table/DataTable.css';

function App() {
  return (
    <div className='container'>
    <Navbar />
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/appointment' element={<Appointment />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

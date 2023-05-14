import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

const Routings = () => {
  return (
    <div>
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/menu' element={<Menu/>} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
    </div>
  )
}

export default Routings

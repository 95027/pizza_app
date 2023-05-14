import React, { useState } from 'react';
import logo from '../assets/logo.webp';
import {NavLink} from 'react-router-dom';
import '../style.css';
import { Icon } from 'semantic-ui-react';

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }

  return (
    <div className='navbar'>
        <div className='leftSide'>
          <NavLink to="/"><img src={logo} alt="logo"/></NavLink>
          <ul  id={openLinks ? 'open' : 'close'}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
        <div className='rightSide'>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <button onClick={toggleNavbar}><Icon name='bars'  id="" /></button>
        </div>
    </div>
  )
}

export default Navbar
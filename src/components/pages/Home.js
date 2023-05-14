import React from 'react'
import { NavLink } from 'react-router-dom';
import banner from '../assets/banner.jpg';

const Home = () => {

  return (
    <div className='home' style={{backgroundImage:`url(${banner})`}}>
      <div className='home-container'>
        <div>
          <h1>Your's Pizzeria</h1>
          <p>PIZZA TO FIT ANY TASTE</p>
          <NavLink to="/menu">
            <button>ORDER NOW</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home
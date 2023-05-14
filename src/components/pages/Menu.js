import React from 'react';
import { MenuList } from '../helpers/MenuList';

const Menu = () => {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Our <span>Menu</span></h1>
      <div className='menuList'>
        {
          MenuList.map((menuItem) => {
            return <div key={menuItem.name} className='menuItem'>
              <div style={{backgroundImage:`url(${menuItem.image})`}}></div>
              <h2>{menuItem.name}</h2>
               <p>$ {menuItem.price}</p>
            </div>})
        }
      </div>

    </div>
  )
}

export default Menu
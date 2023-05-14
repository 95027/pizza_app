import React from 'react'
import { Icon } from 'semantic-ui-react';

const Footer = () => {
  return (
    <div className='footer'>
        <p>&copy; 2023 yourspizzahut.com</p>
        <div className='socialMedia'>
            <Icon name='instagram' />
            <Icon name='facebook' />
            <Icon name='twitter' />
            <Icon name='linkedin' />
        </div> 
        <p>Developed By: <span>ch.sai kumar</span></p>
    </div>
  )
}

export default Footer
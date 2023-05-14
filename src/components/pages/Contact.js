import React, { useState } from 'react';
import contact from '../assets/contact.jpg';
import '../style.css';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();

    const alphaExp=/^[a-zA-Z ]+$/;
    const emailExp=/^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$/;

    if(name === '')
    {
      document.getElementById('nameNote').innerHTML = 'Please enter your name';
    }
    else
    {
      if(name.match(alphaExp))
      {
        document.getElementById('nameNote').innerHTML = '';
      }
      else
      {
        document.getElementById('nameNote').innerHTML = 'Please enter characters only';
      }
    }

    if(email === '')
    {
      document.getElementById('emailNote').innerHTML = 'Please enter your email id';
    }
    else
    {
      if(email.match(emailExp))
      {
        document.getElementById('emailNote').innerHTML = '';
      }
      else
      {
        document.getElementById('emailNote').innerHTML = 'Please enter valid email id';
      }
    }
    if(msg === '')
    {
      document.getElementById('msgNote').innerHTML = 'Please enter your message';
    }
    else
    {
      document.getElementById('msgNote').innerHTML = '';
    }

  }
  return (
    <div className='contact'>
      <div className='contactLeft' style={{backgroundImage:`url(${contact})`}}></div>
      <div className='contactRight'>
        <h1>Contact Us</h1>
        <form method='post' onSubmit={submitHandler}>
          <label>Full Name:</label>
          <input type='text' name="user" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
          <div id='nameNote' className='errmsg'></div>
          <label>Email:</label>
          <input type='text' name="email" placeholder='Enter your email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
          <div id='emailNote' className='errmsg'></div>
          <label>Message:</label>
          <textarea rows='5' name="msg" placeholder='Enter your message' value={msg} onChange={(e)=>setMsg(e.target.value)}></textarea>
          <div id='msgNote' className='errmsg'></div>
          <input type='submit' value='Send Message' />
        </form>
      </div>
    </div>
  )
}

export default Contact
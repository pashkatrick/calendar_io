import React, { useEffect, useState } from 'react'
import '../navigation.css'
import { NavLink, useLocation } from 'react-router-dom'
import styled from "styled-components";

export default function NavBar(props) {
  
  const location = useLocation()

  useEffect (()=> {
    
  })

  return (
    <div className='navbar'>
      <NavLink className="mainIcon" to='/'></NavLink>
      <NavLink className={`${location.pathname=='/faq'? 'buttonActive' : 'button'}`} to='/dashboard'>FAQ</NavLink>
      <NavLink className={`${location.pathname=='/explore'? 'buttonActive' : 'button'}`} to='/explore'>Explore features</NavLink>
        <div className="rightButtons">
          <NavLink className ='button' to='/login'>Login</NavLink>
          <NavLink className ='buttonBright' to='/signup'>Sign Up</NavLink>
        </div>
    </div>
  )
}


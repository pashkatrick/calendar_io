import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function ProviderNavbar(props) {
  
  const loggedUser = props.loggedUser

  return (
    <div className="provNav">
      <div className="providerNavLogo">Calendar.io</div>
      <NavLink className="providerNavButton" to="/dashboard">Dashboard</NavLink>
      <NavLink className="providerNavButton" to='/events'>Events</NavLink>
      <NavLink className="providerNavButton" to='/account'>Account</NavLink>      
      <p>{loggedUser}</p>                                                                               
    </div>
  )
}

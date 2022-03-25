import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function ProviderNavbar(props) {
  
  const loggedUser = props.loggedUser

  return (
    <div className="provNav">
      <div className="providerNavLogo">Calendar.io</div>
      {loggedUser && <NavLink className="providerNavButton" to="/dashboard">Dashboard</NavLink>}
      {loggedUser && <NavLink className="providerNavButton" to='/events'>Events</NavLink>}
      {loggedUser && <NavLink className="providerNavButton" to='/account'>Account</NavLink>}            
                                                                        
    </div>
  )
}

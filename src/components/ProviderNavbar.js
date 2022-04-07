import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function ProviderNavbar(props) {
  
  const loggedUser = props.loggedUser
  const location = (useLocation()).pathname

  useEffect (()=> {
    console.log(location)
  })


  return (
    <div className="provNav">
      <div className="providerNavLogo">Calendar.io</div>
      {loggedUser && <div className="column">
        <NavLink className={location==='/dashboard'? 'menu_button_active':'providerNavButton'} to="/dashboard">Dashboard</NavLink>
        <NavLink className={location==='/events'? 'menu_button_active':'providerNavButton'} to='/events'>Events</NavLink>
        <NavLink className={location==='/account'? 'menu_button_active':'providerNavButton'} to='/account'>Account</NavLink>                                                           
      </div>}
    </div>
  )
}

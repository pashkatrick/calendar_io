import React, { useEffect } from 'react'
import { useNavigate, NavLink, useLocation } from 'react-router-dom'

export default function LeftNavbar() {
  
  const loggedUser = localStorage.getItem('user')
  const location = (useLocation()).pathname
  const navigate = useNavigate()

  useEffect (()=> {
    if (!loggedUser) navigate('/login')
  })

  return (
    <div className="providerMainPage">
    <div className="provNav">
      <div className="providerNavLogo">Calendar.io</div>
      {loggedUser && <div className="column">
        <NavLink className={location==='/dashboard'? 'menu_button_active':'menu_button'} to="/dashboard">Dashboard</NavLink>
        <NavLink className={location==='/events'? 'menu_button_active':'menu_button'} to='/events'>Events</NavLink>
        <NavLink className={location==='/account'? 'menu_button_active':'menu_button'} to='/account'>Account</NavLink>     
        <NavLink className={location==='/settings'? 'menu_button_active':'menu_button'} to='/availability'>Availability</NavLink>  
        <NavLink className={location==='/bookings'? 'menu_button_active':'menu_button'} to='/bookings/upcoming'>Bookings</NavLink>                                                           
      </div>}
      </div>
    </div>
  )
}

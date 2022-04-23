import React, { useEffect } from 'react'
import { useNavigate, NavLink, useLocation } from 'react-router-dom'
import PopUpMenu from './PopUpMenu'
import LoginBlock from './LoginBlock'

export default function LeftNavbar() {
  
  const loggedUser = localStorage.getItem('user')
  const location = (useLocation()).pathname
  const navigate = useNavigate()

  useEffect (()=> {
    if (!loggedUser) navigate('/login')
  })

  return (
    <div className="provNav">
      <div className="providerNavLogo">Calendar.io</div>
      {loggedUser && <div className="column">
        <NavLink className={location==='/events'? 'menu_button_active':'menu_button'} to='/events'>
          <div className={`icon_event ${location==='/events'? 'icon_active':null}`}></div>
          Events
          </NavLink> 
        <NavLink className={location==='/availability'? 'menu_button_active':'menu_button'} to='/availability'>
        <div className={`icon_availability ${location==='/availability'? 'icon_active':null}`}></div>
          Availability
        </NavLink>  
        <NavLink className={location==='/bookings/upcoming'? 'menu_button_active':'menu_button'} to='/bookings/upcoming'>
        <div className={`icon_bookings ${location==='/bookings/upcoming'? 'icon_active':null}`}></div>
          Bookings
          </NavLink>
          <NavLink className={location==='/settings'? 'menu_button_active':'menu_button'} to='/settings'>
          <div className={`icon_settings ${location==='/settings'? 'icon_active':null}`}></div>
          Settings
          </NavLink>                                   
      </div>}
        <LoginBlock/>
      </div>
  )
}

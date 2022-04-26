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

  function Link (link) {
    navigate(link)
  }

  function checkStyle (link) {
    if (location===link) return 'menu_button_active'
    return 'menu_button'
  }

  function checkIcon (link) {
    if (location===link) return 'icon_active'
    return null
  }

  return (
    <div className="provNav">
      <div className="providerNavLogo">
        <div className="column">
          <span className="menu_logo">Calendar.io</span>
          <span className="menu_logo_left">Cal</span>
        </div>
      </div>
      
      {/* <div className="menuFlex"> */}
        
        <div className={checkStyle('/events')} onClick={()=>Link('/events')}>
          <div className={`icon_event ${checkIcon('/event')}`}></div>
          <span className="visible_menu_item">Events</span>
        </div> 
        
        <div className={checkStyle('/availability')} onClick={()=>Link('/availability')}>
          <div className={`icon_availability ${checkIcon('/availability')}`}></div>
          <span className="visible_menu_item">Availability</span>
        </div>  
        
        <div className={checkStyle('/bookings/upcoming')} onClick={()=>Link('/bookings/upcoming')}>
        <div className={`icon_bookings ${checkIcon('/bookings/past')} ${checkIcon('/bookings/upcoming')} ${checkIcon('/bookings/cancelled')}`}></div>
        <span className="visible_menu_item">Bookings</span> 
          </div>
          <div className={checkStyle('/settings')} onClick={()=>Link('/settings')}>
          <div className={`icon_settings ${location==='/settings'? 'icon_active':null}`}></div>
          <span className="visible_menu_item">Settings</span>
          </div>                                   
      {/* </div> */}
        <LoginBlock/>
      </div>
  )
}

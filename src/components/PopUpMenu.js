import React, { useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import useOutsideClick from '../services/useOutsideClick'

export default function PopUpMenu(props) {
  
    const ref = useRef()
    const navigate = useNavigate()

    useOutsideClick (ref, () => {
        props.click()
    }) 

    function buttonClick (param) {
      if (param="login") localStorage.clear()
      navigate(`/${param}`)
      props.click()
    }

    return (
    <div ref = {ref} className="carrotQuestMenu">
    <div onClick={()=>buttonClick()} className='carrotQuestMenuItem border_bottom' to='/availability'>
      <div className='icon_sleep'></div>Set yourself as away
    </div>
    <NavLink className='carrotQuestMenuItem border_bottom' to='/availability'>
      <div className='icon_public'></div>View public page
    </NavLink>

    <NavLink className='carrotQuestMenuItem' to='/availability'>
      <div className='icon_sent'></div>Join our community
    </NavLink>

    <NavLink className='carrotQuestMenuItem' to='/availability'>
      <div className='icon_roadmap'></div>Roadmap
    </NavLink>
    <NavLink className='carrotQuestMenuItem border_bottom' to='/availability'>
      <div className='icon_text'></div>Help
    </NavLink>
    <div onClick={()=>buttonClick('login')} className='carrotQuestMenuItem' to='/'>
      <div className='icon_signout'></div>Sign Out
    </div>
    
  
  </div> 
  )
}

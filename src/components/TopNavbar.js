import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Login from './Login'

export default function TopNavbar(props) {
  
  
  const loggedUser = props.loggedUser

  const navigate = useNavigate()

  function LogOut() {
    localStorage.clear()
    navigate('/login')
  }

  function LogIn() {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <div className="providerTopNavbar">
        <div className="upperRightCornerButtons">
        {loggedUser && <div className="usernameDisplay">{loggedUser}</div>}
        {loggedUser && <div className="buttonActive" onClick={()=>LogOut()}>Logout</div>}
        {!loggedUser && <div className="usernameDisplay" onClick={()=>LogIn()}>Login</div>}
        </div>
    </div>
  )
}

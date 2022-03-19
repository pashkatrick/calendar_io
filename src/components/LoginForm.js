import React from 'react'
import NavBar from './NavBar'
import Button from './Button'
import '../navigation.css'

export default function LoginForm() {
  return (
    <div className="regBox">
      <div className="loginForm">calendario.com/</div>
      <input className="loginInput" placeholder='yourname'/>
      <Button text={"Create a page"} class={'buttonBright'}/>
    </div>
  )
}

import React, { useEffect } from 'react'
import ProviderNavbar from './ProviderNavbar'
import { useNavigate } from 'react-router-dom'

export default function LeftNavbar() {
  
  const loggedUser = localStorage.getItem('user')
  const navigate = useNavigate()

  useEffect (()=> {
    if (!loggedUser) navigate('/login')
  })

  return (
      <div className="providerMainPage">
        <ProviderNavbar loggedUser={loggedUser}/>
    </div>
  )
}

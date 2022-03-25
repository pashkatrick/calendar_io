import React, { useEffect } from 'react'
import ProviderNavbar from '../components/ProviderNavbar'
import ProviderTopNavbar from '../components/ProviderTopNavbar'
import AvailableDays from '../components/AvailableDays'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  
  const loggedUser = localStorage.getItem('user')
  const navigate = useNavigate()

  useEffect (()=> {
    if (!loggedUser) navigate('/login')
  })

  return (
      <div className="providerMainPage">
        <ProviderNavbar loggedUser={loggedUser}/>
        <div className="providerContent">
          <ProviderTopNavbar loggedUser={loggedUser}/>         
          <AvailableDays/>
        </div>
    </div>
  )
}

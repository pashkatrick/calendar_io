import React, { useState } from 'react'
import ProviderNavbar from '../components/ProviderNavbar'
import ProviderTopNavbar from '../components/ProviderTopNavbar'
import AvailableDays from '../components/AvailableDays'
import Login from '../components/Login'

export default function Dashboard(props) {
  
  const userIsLogged = true

  const unavailableDays=[1]

  function loginUser () {
  }

  return (
      <div className="providerMainPage">
        <ProviderNavbar userIsLogged={userIsLogged}/>
        <div className="providerContent">
          <ProviderTopNavbar/>         
          <AvailableDays/>
        </div>
    </div>
  )
}

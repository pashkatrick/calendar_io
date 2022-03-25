import React from 'react'
import ProviderNavbar from '../components/ProviderNavbar'
import ProviderTopNavbar from '../components/ProviderTopNavbar'
import Events from '../components/Events'

export default function ProviderEvents() {
  
  const loggedUser = localStorage.getItem('user')

  return (
      <div className="providerMainPage">
        <ProviderNavbar loggedUser={loggedUser}/>
        <div className="providerContent">
          <ProviderTopNavbar loggedUser={loggedUser}/>
          <Events/>
        </div>
    </div>
  )
}

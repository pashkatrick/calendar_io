import React from 'react'
import ProviderNavbar from '../components/ProviderNavbar'
import ProviderTopNavbar from '../components/TopNavbar'
import Events from '../components/Events'

export default function ProviderEvents() {
  
  const loggedUser = localStorage.getItem('user')

  return (
      <div className="providerMainPage">
        <Events/>
      </div>
  )
}

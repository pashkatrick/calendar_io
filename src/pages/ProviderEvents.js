import React from 'react'
import ProviderNavbar from '../components/ProviderNavbar'
import ProviderTopNavbar from '../components/ProviderTopNavbar'
import Events from '../components/Events'

export default function ProviderEvents() {
  
  return (
      <div className="providerMainPage">
        <ProviderNavbar/>
        <div className="providerContent">
          <ProviderTopNavbar/>
          <Events/>
        </div>
    </div>
  )
}

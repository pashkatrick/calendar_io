import React from 'react'
import Login from '../components/Login'
import ProviderNavbar from '../components/ProviderNavbar'
import ProviderTopNavbar from '../components/ProviderTopNavbar'

export default function LoginPage(props) {
  
    const loggedUser = props.loggedUser

    return (
    <div className="providerMainPage">
    <ProviderNavbar loggedUser={loggedUser}/>
    <div className="providerContent">
      <ProviderTopNavbar/>         
      <Login/>
      <br />
    </div>
</div>
  )
}

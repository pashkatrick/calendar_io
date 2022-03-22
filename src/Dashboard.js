import React from 'react'
import ProviderNavbar from '../components/ProviderNavbar'
import ProviderTopNavbar from '../components/ProviderTopNavbar'
import AvailableDays from '../components/AvailableDays'
import Login from './components/Login'

export default function Dashboard(props) {
  
  const loggedUser = props.loggedUser

  function setTime (time) {
    console.log(time)
  } 

  return (
      <div className="providerMainPage">
        <ProviderNavbar loggedUser={loggedUser}/>
        <div className="providerContent">
          <ProviderTopNavbar/>         
          <AvailableDays/>
          <Login/>
          <br />
          
        </div>
    </div>
  )
}

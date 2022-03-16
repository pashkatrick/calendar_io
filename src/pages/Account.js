import React from 'react'
import ProviderNavbar from '../components/ProviderNavbar'
import ProviderTopNavbar from '../components/ProviderTopNavbar'
import Calendar from '../components/Calendar'

export default function Account() {
  
  const unavailableDays=[1]
  const events=[ 
    {id:1, date:'4_2_2022', providerName:'', consumerId:2, start:'5', time:'pm', long:15},
    {id:2, date:'3_31_2022', providerName:'', consumerId:2, start:'5', time:'pm', long:15},
    {id:3, date:'4_10_2022', providerName:'', consumerId:2, start:'4', time:'pm', long:15},
  ]


  return (
      <div className="providerMainPage">
        <ProviderNavbar/>
        <div className="providerContent">
          <ProviderTopNavbar/>         
          <Calendar unavailableDays={unavailableDays} events={events}/>
          
        </div>
    </div>
  )
}

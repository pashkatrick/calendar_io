import React, { useEffect, useState } from 'react'
import Event from '../components/Event'

export default function Events() {
  
  const userId = 2
  const axios = require('axios');
  const [event_types, setEvents] = useState([])

  function loadEvents () {
            
    var config = {
        method: 'get',
        url: `http://109.107.176.29:5000/user/${userId}/types`,
        headers: { }
    };
        
    axios(config)
    .then(function (response) {
      setEvents(response.data.event_types);
    })
  }
  
  useEffect (()=> {
    loadEvents()
  },[])


    return (
    <div className="_page">
      <div className="row">
        <div className="_title">Event Types</div>
        <div className="wizard_button right_side">+ New Event Type</div>
      </div>
      <div className="_subtitle">Create events to share for people to book on your calendar.</div>
      <div className="_alert">
        <div className="row">
          <div className="icon_alert"></div>
          <div className="column">
            <div>You need to upgrade your plan to have more than one active event type.</div>
            <div>You can upgrade here</div>
          </div>  
        </div>
      </div>
      
      {event_types.map(event=> 
        <Event key={event._id} length={event.length} title={event.title}/>
      )}
      

    </div>
  )
}

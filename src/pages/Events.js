import React from 'react'
import Event from '../components/Event'

export default function Events() {
  
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
      
      <Event/>

    </div>
  )
}

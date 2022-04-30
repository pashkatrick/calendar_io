import React from 'react'
import EventForm from '../components/EventForm'
import { useSelector } from 'react-redux';
import * as variables from '../services/variables'
import { timeDecoder } from '../services/timeBuilder';

export default function EventComplete() {

  const date = useSelector(state=>state.chosenDate)  
  const time = useSelector(state=>state.time)  
  const event = useSelector(state=>state.event)
  const provider = useSelector(state=>state.provider)
  const months = variables.CALENDAR_MONTHS_FULL

  function displayDate () {
    const result = timeDecoder(time.time_from) + ", " + date.day + " " + months[date.month] + ", " + date.year
    return result
  }

  return (
    <div className="page">
    <div className="eventContainer _border">
          <div className="event_description _extraheight">
            <div className="_title">{provider.name}</div>
            <br/>
            <div className="row">
            <div className="icon_clock"></div>
            <div className="_subtitle">{event.title}</div>
            </div>
            <div className="row green_title">
            <div className="icon_bookings"></div>  
            <div className="complete_event_title">{displayDate()}</div>
            </div>
          </div>
            <EventForm providerId={provider._id}/>
            <div className="column">
          </div>
      </div>    
    </div>
    
  
  )
}

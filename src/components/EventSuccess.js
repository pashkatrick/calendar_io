import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Input from '../components/Input'
import { timeDecoder } from '../services/timeBuilder';
import * as variables from '../services/variables'

export default function EventSuccess() {

  const event = useSelector(state=>state.event) 
  const time = useSelector(state=>state.time) 
  const months = variables.CALENDAR_MONTHS_FULL
  const date = useSelector(state=>state.chosenDate) 
  const provider = useSelector(state=>state.provider) 
  
  function displayDate () {
    const result = months[date.month] + " " + date.day  + ", " + date.year + " at " + timeDecoder(time.time_from)
    return result
  }

  return (
    <Fragment>
    {/* {currentEvent? <div className="page"> */}
      <div className="page">
        <div className="event_success_container">
        <div className="event_success_header">
          <div className="event_success_icon">
          <div className="event_success_icon_inner"></div>
        </div>
          <div className="event_success_title">This meeting is scheduled</div>
          <div className="event_success_subtitle">We emailed you and the other attendees a calendar invitation with all the details.</div>
        </div>
          <dir className='event_success_body'>
              <div className="column">
                <div>{`What ${event.title} between ${event.recepient_name} and ${provider.username}`}</div>
                <div>{`When ${displayDate()}`}</div>
              </div>
          </dir>
          <dir className='event_success_body'>
              <div className="row">
                <Input value={event.recepient_email} width='200px'/>
                <NavLink className="wizard_button" to='/wizard'>Try it out</NavLink>
              </div>
          </dir>

        </div>

      </div>
    {/* </div>: <NotFound/>} */}
    </Fragment>
  )
}

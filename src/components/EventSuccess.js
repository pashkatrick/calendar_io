import React, { useEffect, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import * as actions from '../redux/actionTypes'
import NotFound from '../pages/NotFound';
import Input from '../components/Input'

export default function EventSuccess(props) {

  const event = useSelector(state=>state.event)  
  const date = useSelector(state=>state.chosenDate) 

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
                <div>{`What between ${event.title} and ${props.provider.username}`}</div>
                <div>{`When ${event.title} and ${props.provider.username}`}</div>
              </div>
          </dir>
          <dir className='event_success_body'>
              <div className="row">
                <Input value={'fetch_the_email@domain.com'} width='200px'/>
                <NavLink className="wizard_button" to='/wizard'>Try it out</NavLink>
              </div>
          </dir>

        </div>

      </div>
    {/* </div>: <NotFound/>} */}
    </Fragment>
  )
}

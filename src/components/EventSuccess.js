import React, { useEffect, Fragment } from 'react'
import { useSelector } from 'react-redux';
import * as actions from '../redux/actionTypes'
import NotFound from '../pages/NotFound';

export default function EventSuccess() {

  const currentEvent = useSelector(state=>state.event)  

  return (
    <Fragment>
    {currentEvent? <div className="page">
      <p>SUCCESS!</p>
      <p>Your event with {currentEvent.providerName} on {currentEvent.date} was added!</p>
      <p>We sent you detailed information to your email address {currentEvent.email}</p>
    </div>: <NotFound/>}
    </Fragment>
  )
}

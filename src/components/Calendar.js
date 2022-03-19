import React, { useEffect, useState } from 'react'
import { Fragment } from 'react/cjs/react.development'
import store from '../redux/store'
import * as actions from '../redux/actionTypes'

function Calendar(props) {
  
  const week=['S','M','T','W','T','F','S']
  const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const wdays = [0,1,2,3,4,5,6];
  const unavailableDays = props.unavailableDays
  const events = props.events
  const currentMonth = getMonth()
  
  const [focus, setFocus ] = useState()
  const [month, setMonth ] = useState(getMonth())
  const [year, setYear ] = useState(getYear())
  const [state, setState] = useState({
    emptyDays:[],
    days:[],
  })
  
  function getMonth() {
    const today = new Date();
    return today.getMonth();
  }

  function getYear() {
    const today = new Date();
    return today.getFullYear();;
  }

  useEffect (()=> {
    daysInMonth(month, year)
  },[])

  function tooltipBuilder(eventId){
    const event = events.find(event=>event.id==eventId)
    const result = "event" + " at " + event.start + event.time + " for " + event.long + " minutes"
    return result
  }
  
  function fillCalendar (num, month, year) {
    const days = []
    for (let i=1; i<=num; i++) {
      const d = new Date(year, month, i)
      const weekday = wdays[d.getDay()];
      const day = {
        id:i,
        wday:wdays[weekday]
      }
      days.push(day)
    }
    return days
}

function daysInMonth (month, year) {
  const emptyDays = weekday(month, year)
  const num = new Date(year, month+1, 0).getDate()
  const days = fillCalendar(num, month, year)
  setState({...state, days, emptyDays})
}
  
  function findEvent (day) {
    const currentDate = month+1+"_"+day+"_"+year
    let activeEvents=[]
    events.forEach(event=> {
        if (event.date==currentDate) activeEvents.push(event)
    })
    return activeEvents
  }

  function weekday(month, year) {
    const emptyDays = []
    const d = new Date(year, month, 1)
    const num = wdays[d.getDay()];
    for (let i=1; i<=num; i++) {
      emptyDays.push(i)
    }
    return emptyDays
  }

  function forwardMonth (month) {
    setMonth(month+1);
    if (month>=11) {
      setYear(year+1);
      setMonth(month-11)
    }
    daysInMonth(month+1, year)
    setFocus(null)
  }

  function backwardMonth (month) {
    setMonth(month-1);
    if (month<1) {
      setYear(year-1);
      setMonth(month+11)
    }
    daysInMonth(month-1, year)
    setFocus(null)
  }

  function handleShowData (obj) {
    setFocus(obj)
    store.dispatch({
      type:actions.DATE_ADDED,
      payload:{
        date:month+'_'+year+'_'+obj.id
      }
  })
  }
  
  return <Fragment>
    
    <div className="calendarContainer">
    <div className="monthButtonsPanel">
      <div className="monthArrow" onClick={()=>backwardMonth(month)}>
        <div className="monthB"></div>
      </div>
      <div> {months[month]} {year}</div>
      <div className="monthArrow" onClick={()=>forwardMonth(month)}>
        <div className="monthF"></div>
      </div>
    </div>
    
    <div className="calendar">
    {week.map(day=> 
        <div className="cell weekday">{day}</div>
        )}
      {state.emptyDays.map(day=> 
        <div className="cell"></div>
        )}
      {state.days.map(obj=> 
        <div onClick={()=> handleShowData(obj)} className={`${focus==obj? 'focusCell':null} ${unavailableDays.filter(element=> element==obj.wday).length>0 ? 'cell':'activeCell'}`}>
            {obj.id}
            <div className="events">    
            {findEvent(obj.id).map(event=> 
                <div className="event" key={event.id}>
                  <span class="tooltip">{tooltipBuilder(event.id)}</span>
                </div>
                )}
            </div>
        </div>
      )}
  </div>
  </div>

            

  </Fragment>
}

export default Calendar
import React, { useEffect, useState } from 'react'
import { Fragment } from 'react/cjs/react.development'
import store from '../redux/store'
import * as actions from '../redux/actionTypes'
import * as variables from '../services/variables'

function Calendar(props) {
  
  const week = variables.CALENDAR_WEEKDAYS
  const months = variables.CALENDAR_MONTHS
  const wdays = variables.CALENDAR_DAYS
  const unavailableDays = props.unavailableDays
  const events = props.events
  
  //this part should be refactored 
  const [state, setState] = useState({
    emptyDays:[],
    days:[],
    //a new part
    focus:0,
    month:getMonth(),
    year:getYear(),
    monthNow:getMonth(),
    yearNow:getYear()
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
    daysInMonth(state.month, state.year)
  },[])

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
  const emptyDays = drawMonth(month, year)
  const num = new Date(year, month+1, 0).getDate()
  const days = fillCalendar(num, month, year)
  setState({...state, days, emptyDays})
}
  
  function drawMonth(month, year) {
    const emptyDays = []
    const d = new Date(year, month, 1)
    const num = wdays[d.getDay()];
    for (let i=1; i<=num; i++) {
      emptyDays.push(i)
    }
    return emptyDays
  }

  function forwardMonth (month) {
    setState({...state, month:month+1});
    if (month>=11) {
      setState({...state, year:state.year+1});
      setState({...state, month:state.month-11})
    }
    daysInMonth(state.month+1, state.year)
    setState({...state, focus:null})
  }

  function backwardMonth (month) {
    if (state.monthNow==month) return null
    else {
    setState({...state, month:state.month-1});
    if (month<1) {
      setState({...state, year:state.year-1});
      setState({...state, month: state.month+11})
    }
    daysInMonth(state.month-1, state.year)
    setState({...state, focus:null})
  }
  }

  function handleShowData (obj) {
    setState({...state, focus:obj})
    store.dispatch({
      type:actions.DATE_ADDED,
      payload:{
        date:state.month+'_'+state.year+'_'+obj.id+'_'+obj.wday,
        week:props.provider.week
      }
  })
  }
  
  return <Fragment>
    
    <div className="calendarContainer">
    <div className="monthButtonsPanel">
      <div className="monthArrow" onClick={()=>backwardMonth(state.month)}>
        <div className="monthB"></div>
      </div>
      <div> {months[state.month]} {state.year}</div>
      <div className="monthArrow" onClick={()=>forwardMonth(state.month)}>
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
        <div onClick={()=> handleShowData(obj)} className={`${state.focus==obj? 'focusCell':null} ${unavailableDays.filter(element=> element==obj.wday).length>0 ? 'cell':'activeCell'}`}>
            {obj.id}
        </div>
      )}
  </div>
  </div>
  </Fragment>
}

export default Calendar
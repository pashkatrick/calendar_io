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
  
  const [focus, setFocus ] = useState()
  const [month, setMonth ] = useState(getMonth())
  const [year, setYear ] = useState(getYear())
  const [state, setState] = useState({
    emptyDays:[],
    days:[],
    dayNow:today(),
    monthNow:getMonth(),
    yearNow:getYear()
  })
  
  function today () {
    const today = new Date();
    return today.getDate();
  }
  
  function handleUnavailableDay (day) {
    if (unavailableDays.filter(e=> e==day.wday).length>0) return true
    if (month==state.monthNow) return state.dayNow>day.id
    return false
  }

  function getMonth() {
    const today = new Date();
    return today.getMonth();
  }

  function getYear() {
    const today = new Date();
    return today.getFullYear();
  }

  useEffect (()=> {
    daysInMonth(month, year)
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
    setMonth(month+1);
    if (month>=11) {
      setYear(year+1);
      setMonth(month-11)
    }
    daysInMonth(month+1, year)
    setFocus(null)
  }

  function backwardMonth (month) {
    if (state.monthNow==month) return null
    else {
    setMonth(month-1);
    if (month<1) {
      setYear(year-1);
      setMonth(month+11)
    }
    daysInMonth(month-1, year)
    setFocus(null)
  }
  }

  function handleShowData (obj) {
    if (!handleUnavailableDay(obj)) {
      setFocus(obj)
      store.dispatch({
        type:actions.DATE_ADDED,
        payload:{
          date:month+'_'+year+'_'+obj.id+'_'+obj.wday,
        }
    })
    }
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
      {state.emptyDays.map(item=> 
        <div className="cell"></div>
        )}
      {state.days.map(obj=> 
        <div key={obj.id} onClick={()=> handleShowData(obj)} className={`${focus===obj && 'focusCell'}
        ${handleUnavailableDay(obj)==true ? 'cell':'activeCell'}
        `}>
            {obj.id}
        </div>
      )}
  </div>
  </div>

  </Fragment>
}

export default Calendar
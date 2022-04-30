import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { timeDecoder } from '../services/timeBuilder'
import * as variables from '../services/variables'


export default function Meeting(props) {
  
  const {meeting} = props
  const x = meeting.time_from
  const user = useSelector(state=>state.user)
  const week = variables.CALENDAR_WEEKDAYS_FULL
  const month =variables.CALENDAR_MONTHS
  const navigate = useNavigate()

  function displayTime () {
    const result = timeDecoder(meeting.start_time) + " - " + timeDecoder(meeting.end_time)
    return result
  }

  function displayTitle () {
    const result = meeting.title + " " + user.name + " / " + meeting.recepient_name
    return result
  }

  function displayDate() {
    const result = week[meeting.weekday] + ", " + meeting.day + " " + month[meeting.month]
    return result
  }

  function goMeeting (id) {
    console.log(id)
    navigate(`${id}`)
  }

  return (
    <div className="_meeting">
            <div className="column">
            <div className="_subtitle">{displayDate()}</div>
            <div className="_subtitle">{displayTime()}</div>
            </div>
            <div className="column">
              <div className="">{displayTitle ()}</div>
              <div className="_subtitle">{meeting.recepient_email}</div>
            </div>
            <div className="row">
              <div className="button_icon">
                <div className="icon_cancel"></div>
                Cancel</div>
                <div onClick={()=>goMeeting(meeting._id)}className="button_icon">
                <div className="icon_clock"></div>
                Reschedule</div>
            </div>
            
    </div>
  )
}

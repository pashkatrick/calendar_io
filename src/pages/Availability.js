import React, {useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import Dialog from '../pages/Dialog'
import Schedule from '../components/Schedule'

import AvailableDays from '../components/AvailableDays'
import TimeZones from '../components/TimeZones'

export default function Availability() {
  
  //user id supposed to load from the server
  const userId = 3
  let {id} = useParams()

  const [schedules, setSchedules] = useState([])
  
  const axios = require('axios');

  function loadSchedules () {
            
    var config = {
        method: 'get',
        url: `http://109.107.176.29:5000/user/${userId}/schedules`,
        headers: { }
    };
        
    axios(config)
    .then(function (response) {
      setSchedules(response.data.schedules);
    })
}

function newSchedule (title) {
  const schedule = {
    _id:199,
    title:title,
    free_slots: [
      {id:1, day:0, time_from:0, time_to: 720}
    ]
  }
  const newSchedule = [...schedules]
  newSchedule.push(schedule)
  setSchedules(newSchedule)
}

  function getFreeSlots (id) {
    const currentSchedule = schedules.find(schedule=> schedule._id==id)
    return currentSchedule.free_slots
  }

  useEffect (()=> {
    loadSchedules()
  },[])

  return (
    <div className="_page">
    {id=='new' && <Dialog createNew={(title)=>newSchedule(title)}/>}
        <div className="row">
          <div className="_title">Availability</div>
          {!id && <NavLink className="wizard_button right_side" to='new'>+ New Schedule</NavLink>}
        </div>
        <div className="_subtitle">Configure times when you are available for bookings.</div>
        
       {!id && schedules.map(schedule=> 
        <Schedule key={schedule._id} id={schedule._id} title={schedule.title}/>
        )}
        {id && id!='new' && <div className="row">
          <AvailableDays key={id} slots={getFreeSlots(id)} id={id}/>
          <div className="right_screen">
          <span className="budge_default_side">Default</span>
          <div className="_subtitle">Timezone</div>
          <TimeZones/>
          </div>
        </div>}
    </div>
  )
}

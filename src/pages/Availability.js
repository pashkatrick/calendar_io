import React, {useState, useEffect, Fragment} from 'react'
import { useParams, NavLink } from 'react-router-dom'
import Dialog from '../pages/Dialog'

import AvailableDays from '../components/AvailableDays'
import TimeZones from '../components/TimeZones'

export default function Availability(props) {
  
  const schedules = [
    {name:'Working hours', default:true },
  ]
  
  let {id} = useParams()

  const [toggle, setToggle] = useState(false)
  //fetch data from the server and check the last id for the available times
  const lastId = 12

  useEffect (()=> {

  },[])

  return (
    <div className="_page">
    {id=='new' && <Dialog/>}
        <div className="row">
          <div className="_title">Availability</div>
          {!id && <NavLink className="wizard_button right_side" to='new'>+ New Schedule</NavLink>}
        </div>
        <div className="_subtitle">Configure times when you are available for bookings.</div>
        
       {!id && <NavLink className="_event" to={`/availability/${lastId}`}>
        <div className="column">
        <div className="_subtitle">Working hours
        <span className="budge_default">Default</span>
        </div>
        <div>long description</div>
        </div>    
            <div className="icon_event_button"></div>    
        </NavLink>}
        
        
        {id && id!='new' && <div className="row">
          <AvailableDays/>
          <div className="right_screen">
          <span className="budge_default_side">Default</span>
          <div className="_subtitle">Timezone</div>
          <TimeZones/>
          </div>
        </div>}
    </div>
  )
}

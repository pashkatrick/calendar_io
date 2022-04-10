import React, {useState, useEffect, Fragment} from 'react'
import { useParams, NavLink } from 'react-router-dom'
import Dialog from '../pages/Dialog'

import AvailableDays from '../components/AvailableDays'

export default function Availability(props) {
  
  const schedules = [
    {name:'Working hours', default:true, },
  ]
  
  
  let {id} = useParams()

  const [toggle, setToggle] = useState(false)
  const lastId = 12

  useEffect (()=> {

  },[])

  return (
    <div className="_page">
    {id && <Dialog/>}
        <div className="row">
          <div className="_title">Availability</div>
          <NavLink className="wizard_button right_side" to='123'>+ New Schedule</NavLink>
        </div>
        <div className="_subtitle">Configure times when you are available for bookings.</div>
        
        <div className="_event">
        <div className="column">
        <div className="_subtitle">Working hours
        <span className="budge_default">Default</span>
        </div>
        <div>long description</div>
        </div>    
            <div className="icon_event_button"></div>    
    </div>
        
        {/* {avDays.map(days=> 
          
          )} */}
        
        {/* <AvailableDays/> */}
    </div>
  )
}

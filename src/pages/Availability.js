import React, {useState} from 'react'
import AvailableDays from '../components/AvailableDays'

export default function Availability() {
  
const [title, setTitle] = useState('Text')


  return (
    <div className="_page">
        <div className="_title">Availability</div>
        <div className="_subtitle">Configure times when you are available for bookings.</div>
        <input className="flex_title" value={title} type="text" onChange={e=> setTitle(e.target.value)}/>
        
        {/* <AvailableDays/> */}
    </div>
  )
}

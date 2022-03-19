import React, { useEffect, useState } from 'react'
import TimeFrame from './TimeFrame'

export default function TimeSlot(props) {
  
    const [state, setTimeSlot] = useState({
        from:props.from,
        to:props.to
    })
    
    useEffect (()=> {
        if (props.from != state.from) setFrom(props.from) 
        if (props.to != state.to) setTo(props.to) 
  
      },[props.from, props.to])

    function setFrom (time) {
        setTimeSlot({...state,from:time})
        props.setTime(time, 'from')
    }

    function setTo (time) {
        setTimeSlot({...state, to:time})
        props.setTime(time, 'to')
    } 
  
    return (
    <div className="row">
        <TimeFrame setTime={(time)=>setFrom(time)} time={props.from}/>
        <div className="timeGap"> - </div>
        <TimeFrame setTime={(time)=>setTo(time)} time={props.to}/>
    </div>
  )
}

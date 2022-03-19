import React, { useEffect, useState, useRef} from 'react'
import timeBuilder from '../services/timeBuilder';

export default function TimeFrames(props) {
  
  function handleClickOutside(event) {
    const target = event.target.className;
    if (target=="timeFrame" || target=="timeFrames null") {
        return null
    }
    if (target=="dropdownButtonOn") {
        
    }
    else {
        setFrom(false)
        setTo(false)
    }
  }   
  
  //refactor later
  const [currentFrom, setCurrentFrom] = useState(props.from)
  const [currentTo, setCurrentTo] = useState(props.to)
  const [from, setFrom] = useState(false)
  const [to, setTo] = useState(false)

  const times = timeBuilder(0, 1440)
  
    function toggleFrom() {
      console.log(from)
      setTo(false)
      setFrom(false)
      const state = !from
      setFrom(state)
    }

    function toggleTo() {
      setFrom(false)
      setTo(false)
      const state = !to
      setTo(state)
    }

    // validate timeFrame later

    function handleFrom (time) {
        toggleFrom()
        setCurrentFrom(time)
        props.time(time, currentTo)
    }

    function handleTo (time) {
        toggleTo()
        setCurrentTo(time)
        props.time(currentFrom, time)
    }

    useEffect (()=> {
      document.addEventListener("mousedown", handleClickOutside);
      if (props.from != currentFrom) setCurrentFrom(props.from) 
      if (props.to != currentTo) setCurrentTo(props.to) 
    },[props.from, props.to])

    function timeDecoder (num) {
      const hour = Math.floor((num/15)/4)
      let min = num-(hour*4*15)
      if (min==0) min=min.toString()+'0'
      const m = num>=720 ? 'pm' : 'am'; 
      return (`${hour}:${min}${m}`)
    }

    return (
    <div className="timeFramePage">
    <div className="timeFrameContainer">
      <div className="timeFrameFrom">{timeDecoder(currentFrom)}
        <div className={`${from? 'dropdownButtonOff': 'dropdownButtonOn'}`} onClick={()=>toggleFrom()}></div>
        <div className={`timeFrames ${!from? 'invisibleFrame':null}`}>
        {times.map(time=> 
          <div key={time} className={`${time==currentFrom? 'timeFrameActive' : 'timeFrame'}`} onClick={()=>handleFrom(time)}>{timeDecoder(time)}</div>
          )}
      </div>
      </div>
      <div>-</div>
      <div className="timeFrameTo">{timeDecoder(currentTo)}
        <div className={`${to? 'dropdownButtonOff': 'dropdownButtonOn'}`} onClick={()=>toggleTo()}></div>
        <div className={`timeFrames ${!to? 'invisibleFrame':null}`}>
        {times.map(time=> 
          <div key={time} className={`${time==currentTo? 'timeFrameActive' : 'timeFrame'}`} onClick={()=>handleTo(time)}>{timeDecoder(time)}</div>
          )}
        </div>
        </div>
    </div>
    </div>
  )
}

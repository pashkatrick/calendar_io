import React, {useState, useEffect} from 'react'
import store from '../redux/store'
import { useSelector } from 'react-redux';
import timeBuilder from '../services/timeBuilder';
import { timeDecoder } from '../services/timeBuilder';

export default function TimeForConsumer(props) {
  
let timeFrames = props.frames
const meetingLength = parseInt(props.length)

const finiteTime = getFiniteTime()

function getFiniteTime () {
  let interTime = []
  timeFrames.map(time=> {
    interTime=interTime.concat(timeGapsCalculate(time.time_from, time.time_to))
  })
  return interTime
}

function timeGapsCalculate (from, to) {  
  let times = []
  for (let i=from; i<=to; i=i+meetingLength) {
    times.push(i)
  }
  return times
}

function setTimeFrame (time) {
  props.setTime(time)
}

return (
    
    <div className="column">
    {/* <div className="timeFrameConsumer timeRed">{timeDecoder(props.from)}</div> */}
    <div className="timeFormConsumer">
        {finiteTime.map(time => 
          <div key={time} className={`${props.from==time ? 'timeFrameConsumerCurrent':'timeFrameConsumer'}`} onClick={()=>setTimeFrame(time)}>{timeDecoder(time)}</div>
          )}
    </div>
    </div>
    
  )
}


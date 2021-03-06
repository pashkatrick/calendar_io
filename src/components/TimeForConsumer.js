import React, {useState, useEffect} from 'react'
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
    <div className="timeForConsumer">
        {finiteTime.map(time => 
          <div key={time} className={`${props.from==time ? 'timeFrameConsumerCurrent':'timeFrameConsumer'}`} onClick={()=>setTimeFrame(time)}>{timeDecoder(time)}</div>
          )}
    </div>
    </div>
  )
}


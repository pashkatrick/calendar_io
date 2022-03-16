import React, {useState} from 'react'
import store from '../redux/store'
import { useSelector } from 'react-redux';
import timeBuilder from '../services/timeBuilder';

export default function TimeForConsumer(props) {
  
const [currentTime, setTime] = useState(0)

let timeFrames = props.frames

//temp solution extract this method, it's 100% reusable
function timeDecoder (num) {
  const hour = Math.floor((num/15)/4)
  let min = num-(hour*4*15)
  if (min==0) min=min.toString()+'0'
  const m = num>=720 ? 'pm' : 'am'; 
  return (`${hour}:${min} ${m}`)
}

function setTimeFrame (time) {
  setTime(time)
}

return (
    
    <div className="column">
    <div className="timeFrameConsumer timeRed">{timeDecoder(currentTime)}</div>
    <div className="timeFormConsumer">
        {timeFrames.map(time => 
          <div className={`${currentTime==time ? 'timeFrameConsumerCurrent':'timeFrameConsumer'}`} onClick={()=>setTimeFrame(time)}>{timeDecoder(time)}</div>
          )}
    </div>
    </div>
    
  )
}


import React, { useState , useRef, useEffect} from 'react'
import useOutsideClick from '../services/useOutsideClick'
import  timeBuilder from '../services/timeBuilder'
import { timeDecoder } from '../services/timeBuilder'

export default function TimeFrame(props) {
    
    const ref = useRef()

    const times = timeBuilder()
    
    const [state, setToggle] = useState({
        toggle:false,
        currentTime:props.time
    })
    
    function toggle () {
        const result = !state.toggle
        setToggle({...state, toggle:result})
    }
    
    function setTime (time) {
        setToggle({toggle:false, currentTime:time})
        props.setTime(time)
    }

    useEffect (()=> {
        if (props.time != state.currentTime) setTime(props.time)
      },[props.time])
      

    useOutsideClick(ref, () => {
        setToggle({...state, toggle:false})
      });
    
    return (
    <div ref={ref} className="columnFrame">
        <div className={`rowFrame ${state.toggle? "activeFrame":"nonActiveFrame"}`}>
            <div className="timeCurrent">{timeDecoder(state.currentTime)}</div>
            <div className={`${!state.toggle? "arrowDown" : "arrowUp"}`} onClick={()=>toggle()}></div>
        </div>
        
        <div className={`${state.toggle? "timeFrame":"timeFrameInv"}`}>
        {times.map(time=> 
            <div className={`${time==state.currentTime? "activeTime":"nonActiveTime"}`} key={time} onClick={()=>setTime(time)}>{timeDecoder(time)}</div>
            )}
        </div>
    </div>
  )
}

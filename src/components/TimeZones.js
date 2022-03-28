import React, { useState , useRef} from 'react'
import useOutsideClick from '../services/useOutsideClick'
import * as variable from '../services/variables'

export default function TimeZones(props) {
    
    const ref = useRef()

    const zones = variable.TIME_ZONES
    
    const [state, setState] = useState({
        toggle:false,
        currentZone:zones[0]
    })
    
    function toggle () {
        const result = !state.toggle
        setState({...state, toggle:result})
    }
    
    function setTimeZone (zone) {
        setState({toggle:false, currentZone:zone})
        // props.setTime(zone)
    }

    useOutsideClick(ref, () => {
        setState({...state, toggle:false})
      });
    
    return (
    <div ref={ref} className="columnFrame">
        <div className={`rowFrame timezone ${state.toggle? "activeFrame":"nonActiveFrame"}`}>
            <div className="timezone">{state.currentZone}</div>
            <div className={`${!state.toggle? "arrowDown" : "arrowUp"}`} onClick={()=>toggle()}></div>
        </div>
        
        <div className={`${state.toggle? "timezones":"timeFrameInv"}`}>
        
        {zones.map(zone=> 
            <div onClick={()=>{setTimeZone(zone)}} className={`${zone==state.currentZone? "activeZone":"nonActiveZone"}`} key={zone}>{zone}</div>
            )}
        </div>
    </div>
  )
}

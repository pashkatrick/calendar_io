import '../navigation.css'
import Calendar from '../components/Calendar'
import { useEffect, useState } from 'react';
import { useNavigate, NavLink, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import * as variables from '../services/variables'
import TimeForConsumer from '../components/TimeForConsumer';

export default function ProviderCal(props) {
    
  const [frames, setFrames] = useState([])
  const [filteredFrames, setFilteredFrames] = useState([])
  const providerId = props.provider._id
  const currentDate = useSelector(state=>state.chosenDate)
  const length = useParams()
  const navigate = useNavigate();
  const availableDays = timeFrameParser(frames)
  const week = variables.CALENDAR_WEEKDAYS_FULL

  useEffect (()=> {
      const axios = require('axios');
      var config = {
      method: 'get',
      url: `http://109.107.176.29:5000/user/${providerId}/free`,
      headers: { }
  };    
      axios(config)
      .then(function (response) {
        setFrames(response.data.free_slots)
  })
  },[])

  useEffect (()=> {
   if (currentDate) {
    const filtered = frames.filter(frame => frame.day==currentDate.weekday)
    setFilteredFrames(filtered)
    }
  },[currentDate])
    
  
  function timeFrameParser (providerTimeFrames) {
    const days = []
    providerTimeFrames.map(frame=> days.includes(frame.day)? null : days.push(frame.day))
    return days
  }


  function setTime (time) {
    //redux setTime
    console.log(`${time} to ${time+parseInt(length.type)}`)        
  }


  return (
    <div className="page">
      <div className="avatar">{props.provider.name.substring(0,1)}</div>
      <p>You are going to book something with {props.provider.name}</p>
      {/* {error? <p>{error}</p> : <p>pick up the date</p>} */}
        <div className="eventContainer">
          <div className="event_description">
            <div>{props.provider.name}</div>
            <div>one</div>
            <div>one</div>
          </div>
          <Calendar availableDays={availableDays} provider={props.provider}/>
          <div></div>
          {currentDate && 
          <div className="column">
          <div>{week[currentDate.weekday]}</div>
          <TimeForConsumer setTime={(time)=>setTime(time)} frames={filteredFrames} length={length.type}/>
          </div>
          }
          </div>
          <br />
          <div className="row">
          <NavLink className="wizard_button_light" to={`/${props.provider.username}`}>Back</NavLink>
          {/* <div className="wizard_button" onClick={()=>handleDay()}>Next</div> */}
          </div>
    </div>
);
}
 

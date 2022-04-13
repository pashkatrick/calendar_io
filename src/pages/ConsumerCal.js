import '../navigation.css'
import Calendar from '../components/Calendar'
import { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function ProviderCal(props) {
    

  const [frames, setFrames] = useState([])
  const providerId = props.provider._id
  
  useEffect (()=> {
      const axios = require('axios');
      var config = {
      method: 'get',
      url: `http://109.107.176.29:5000/user/${providerId}/free`,
      headers: { }
  };    
      axios(config)
      .then(function (response) {
      setFrames(response.data.data)
  })
  },[])

    const navigate = useNavigate();
    const unavailableDays = timeFrameParser(frames)
    
      function timeFrameParser (providerTimeFrames) {
        const days = []
        providerTimeFrames.map(frame=> days.includes(frame.day)? null : days.push(frame.day))
        return days
      }

    let error = ""
    const currentDate = useSelector(state=>state.chosenDate)

    function handleDay () {
      if (currentDate) {
        navigate(`${currentDate}`)
      }
      else {
        error="no date"
      }
    }

    return (
    <div className="page">
      <div className="avatar">{props.provider.name.substring(0,1)}</div>
      <p>You are going to book something with {props.provider.name}</p>
      {error? <p>{error}</p> : <p>pick up the date</p>}
        <div className="eventContainer">
          <Calendar unavailableDays={unavailableDays} provider={props.provider}/>
          </div>
          <br />
          <div className="row">
          <NavLink className="buttonBright" to={`/${props.provider.username}`}>Back</NavLink>
          <div className="buttonBright" onClick={()=>handleDay()}>Next</div>
          </div>
    </div>
);
}
 

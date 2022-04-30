import '../navigation.css'
import Calendar from '../components/Calendar'
import { useEffect, useState } from 'react';
import { useNavigate, NavLink, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import * as variables from '../services/variables'
import TimeForConsumer from '../components/TimeForConsumer';
import store from '../redux/store'
import * as actions from '../redux/actionTypes'
import { type } from '@testing-library/user-event/dist/type';




export default function ProviderCal(props) {
    
  const [frames, setFrames] = useState([])
  const [type, setType] = useState()
  const [filteredFrames, setFilteredFrames] = useState([])
  const [provider, setProvider] = useState()
  const currentDate = useSelector(state=>state.chosenDate)
  const navigate = useNavigate();
  const availableDays = timeFrameParser(frames)
  const week = variables.CALENDAR_WEEKDAYS_FULL
  const month = variables.CALENDAR_MONTHS

  // ==============

  const param = useParams()
  const axios = require('axios');

  useEffect (()=> {
      loadProvider()
  },[])

  function loadProvider () {
      var config = {
      method: 'get',
      url: `http://109.107.176.29:5000/user/${param.provider}?full=true`,
      headers: { }
      };    
      axios(config)
      .then(function (response) {
          console.log(response)
          if (response.data==false) {
              navigate('*')
              
          } else {
            setProvider(response.data.user)
            saveProvider(response.data.user)
            loadTypes(response.data.user._id)
          }
  })
  }

  function findMatchingType (types, matchType) {
      let match = 0 
      types.map(type=> {
           if (type.length==matchType) {
            setType(type)
            setEvent(type)
            match++
            }
       })
      if (match==0) {
          navigate('*')
      }
  }

  function loadTypes (id) {
      var config = {
      method: 'get',
            url: `http://109.107.176.29:5000/user/${id}/types`,
            headers: { }
            };    
            axios(config)
            .then(function (response) {
                if (response.date!==false) findMatchingType(response.data.event_types, param.type)
              else navigate('*')
        })
        
  }

  // ==============

  useEffect (()=> {
  if (provider) {
    var config = {
      method: 'get',
      url: `http://109.107.176.29:5000/user/${provider._id}/free`,
      headers: { }
  };    
      axios(config)
      .then(function (response) {
        console.log(response)
        setFrames(response.data.free_slots)
  })
  }
  },[provider])

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
    store.dispatch({
      type:actions.TIME_ADDED,
      payload:{ 
        time:{
          time_from:time,
          time_to:time+parseInt(param.type),
          length:param.type
        } 
      }
      })
    navigate(`${currentDate.date}`)        
  }

  function saveProvider (provider) {
      store.dispatch({
        type:actions.PROVIDER_ADDED,
        payload:{
          provider
        }
      })
  }

  function setEvent (event) {
    store.dispatch({
        type:actions.EVENT_ADDED,
        payload:{
          event:{
            title: event.title,
          }
        }
      })
}


  return (
    <div className="page">
        <div className="innerPage">
        <div className="eventContainer">
          <div className="event_description">
            {provider && <div className="_title">{provider.name}</div>}
            <br/>
            <div className="row">
            <div className="icon_clock"></div>
            {type && <div className="_subtitle">{type.title} min</div>}
            </div>
            <div>time zone</div>
          </div>
          <Calendar availableDays={availableDays} provider={provider}/>
          {currentDate && 
          <div className="time_consumer_container">
          <div className="column">
          <div className="currentDate">{week[currentDate.weekday]} {currentDate.day} {month[currentDate.month]}</div>
          <TimeForConsumer setTime={(time)=>setTime(time)} frames={filteredFrames} length={param.type}/>
          </div>
          </div>
          }
          </div>
          <br />
          <div className="row">
          {provider && <NavLink className="wizard_button_light" to={`/${provider.username}`}>Back</NavLink>}
          </div>
          </div>
    </div>
);
}
 

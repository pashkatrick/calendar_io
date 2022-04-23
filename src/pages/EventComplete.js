import React, {useEffect} from 'react'
import EventForm from '../components/EventForm'
import store from '../redux/store'
import { useSelector } from 'react-redux';
import timeBuilder from '../services/timeBuilder';
import { useNavigate } from 'react-router';


export default function EventComplete(props) {

  const currentDate = useSelector(state=>state.chosenDate.date)  
  const providerId = props.provider._id
  const navigate = useNavigate()

  useEffect (()=> {
  console.log(providerId)
  },[])
 
  function setEventTime (time) {
    // navigate(`/${currentDate}`)
    // console.log(`here is your ${time}`)
  }

  return (
    <div className="page">
    <p>{currentDate.date}</p>
    <p>You are booking the event with {props.provider.name} on {currentDate.date}</p>
    <div className="row">
    <div className="eventContainer">
          <div className="event_description">
            <div className="_title">{props.provider.name}</div>
            <br/>
            <div className="row">
            <div className="icon_clock"></div>
            <div className="_subtitle"> min</div>
            </div>
            <div>time zone</div>
          </div>
      </div>
    
    <EventForm/>
    </div>
    </div>
  )
}

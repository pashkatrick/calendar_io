import React, {Fragment, useEffect, useState} from 'react'
import EventForm from '../components/EventForm'
import TimeForConsumer from '../components/TimeForConsumer'
import store from '../redux/store'
import { useSelector } from 'react-redux';
import timeBuilder from '../services/timeBuilder';
import { useNavigate } from 'react-router';


export default function EventComplete(props) {

  const [frames, setFrames] = useState([])
  const currentDate = useSelector(state=>state.chosenDate.date)  
  const providerId = props.provider._id
  const navigate = useNavigate()

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
 
 
 
  // const week = useSelector(state=>state.week)
  
  // useEffect (()=> {
  //   // console.log(date)
  //   // console.log(week)
  // },[])

  function setEventTime (time) {
    // navigate(`/${currentDate}`)
    // console.log(`here is your ${time}`)
  }

  return (
    <div className="page">
    <p>{currentDate.date}</p>
    <p>You are booking the event with {props.provider.link} on {currentDate.date}</p>
    <div className="row">
    <EventForm/>
    <TimeForConsumer frames={frames} setTime={(time)=>setEventTime(time)}/>
    </div>
    </div>
  )
}

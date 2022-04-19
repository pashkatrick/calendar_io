import React, {Fragment, useEffect, useState} from 'react'
import EventForm from '../components/EventForm'
import TimeForConsumer from '../components/TimeForConsumer'
import store from '../redux/store'
import { useSelector } from 'react-redux';
import timeBuilder from '../services/timeBuilder';


export default function EventComplete(props) {

  const [frames, setFrames] = useState([])
  const currentDate = useSelector(state=>state.chosenDate)  
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
      setFrames(response.data.free_slots)
      console.log(response)
})

},[])
 
 
 
  // const week = useSelector(state=>state.week)
  
  // useEffect (()=> {
  //   // console.log(date)
  //   // console.log(week)
  // },[])

  function setEventTime (time) {
    console.log(time)
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

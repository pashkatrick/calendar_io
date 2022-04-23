import React, {useEffect, useState} from 'react'
import EventForm from '../components/EventForm'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export default function EventComplete(props) {

  const [event, setEvent] = useState({
    title: "string_test",
    agenda: "string_test",
    description: "string_test",
    start_time: 0,
    end_time: 0,
    offline: true,
    paid: true,
    type_id: 0,
    user_id: 0
  })
  
  const currentDate = useSelector(state=>state.chosenDate.date)  
  const providerId = props.provider._id
  const navigate = useNavigate()

  useEffect (()=> {
  console.log(providerId)
  },[])
 
  // function saveEvent(event) {    
  // //   store.dispatch({
  // //     type:actions.EVENT_ADDED,
  // //     payload:{
  // //       event
  // //     }
  // //   })
  // //   saveEvent ()
  // //   navigate(`/success`)
  // }

  function saveEvent () {

  }

  return (
    <div className="page">
    <div className="eventContainer">
          <div className="event_description">
            <div className="_title">{props.provider.name}</div>
            <br/>
            <div className="row">
            <div className="icon_clock"></div>
            <div className="_subtitle">min</div>
            </div>
            <div>time zone</div>
          </div>
          <EventForm/>
          <div className="column">
          
          </div>
          
          
      </div>
    
    

    <div className="row">
          <div className="wizard_button" onClick={()=>navigate(-1)}>Back</div>
          <div className="wizard_button_light" onClick={()=>saveEvent()}>Submit</div>
          </div>
    </div>
    
  
  )
}

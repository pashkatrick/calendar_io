import { useState } from "react";
import { useNavigate, NavLink, Link } from 'react-router-dom'
import store from '../redux/store'
import { useSelector } from 'react-redux';
import * as actions from '../redux/actionTypes'
import TimeForConsumer from "./TimeForConsumer";

export default function EventForm(props) {

  const currentDate = useSelector(state=>state.chosenDate)  
  
  const navigate = useNavigate()
  const [event, setEvent] = useState({
      name:"",
      email:"",
      description:"",
      providerName: props.link,
      date:currentDate,
      from:"",
      to:""
  })

  let error=""
    
  function saveEvent() {    
    store.dispatch({
      type:actions.EVENT_ADDED,
      payload:{
      event
      }
    })
    navigate(`/success`)
  }

    return (
    <div className="event_form">
        <label htmlFor="name">Name:</label>
        <input  className="event_input" name="name" placeholder="John Doe" type="text" value={event.name} onChange={e=>setEvent({...event, name:e.target.value})}/>
        <br/>
        <label htmlFor="email">Email:</label>
        <input className="event_input" name="email" placeholder="email@email.com" type="text" value={event.email} onChange={e=>setEvent({...event, email:e.target.value})} />
        <br/>
        <label htmlFor="description">Description:</label>
        <textarea placeholder="say something" rows="4" type="textarea" value={event.description} onChange={e=>setEvent({...event, description:e.target.value})} /> 
        <br />
        <div className="row">
          <div className="buttonBright" onClick={()=>navigate(-1)}>Back</div>
          <div className="buttonBright" onClick={()=>saveEvent()}>Submit</div>
          <p>{error}</p>
          </div>
    </div>
);
}
 

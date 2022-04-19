import { useState, useEffect } from "react";
import { useNavigate, NavLink, Link } from 'react-router-dom'
import store from '../redux/store'
import { useSelector } from 'react-redux';
import * as actions from '../redux/actionTypes'
import TimeForConsumer from '../components/TimeForConsumer'


export default function EventForm(props) {

  // const currentDate = useSelector(state=>state.chosenDate)  
  
  const navigate = useNavigate()
  const [event, setEvent] = useState({
      // name:"",
      // email:"",
      // description:"",
      // providerName: props.link,
      // date:currentDate,
      // from:0,
      // to:0
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
  
// useEffect (()=> {
  
// },[])

  function saveEvent() {    
    store.dispatch({
      type:actions.EVENT_ADDED,
      payload:{
        event
      }
    })
    saveEvent ()
    navigate(`/success`)
  }

  function setEventTime (time) {
    setEvent({...event, from:time})
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
          </div>
    </div>
);
}
 

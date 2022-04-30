import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import store from '../redux/store'
import { useSelector } from 'react-redux';
import * as actions from '../redux/actionTypes'
import Input from './Input'

export default function EventForm(props) {

  const navigate = useNavigate()
  const axios = require('axios');
  const time = useSelector(state=>state.time)
  const date = useSelector(state=>state.chosenDate)
  const eventName =useSelector(state=>state.event.title)
  const [state, setState] = useState({
          title: eventName,
          agenda: "",
          description: "",
          offline: false,
          type_id: 1,
          recepient_name: "",
          recepient_email: "",
          start_time: time.time_from,
          end_time: time.time_to,
          year: date.year,
          month: date.month,
          day: date.day,
          weekday: date.weekday,
          status: null,
          confirmed: null,
          rejected: null,
          paid: null,
          provider: null
  })

  function eventSave() {    
    store.dispatch({
      type:actions.EVENT_ADDED,
      payload:{
        event: state
      }
    })
    eventPost()
  }

  function eventPost () {
    var data = JSON.stringify({
      "title": eventName,
      "agenda": "string",
      "description": state.description,
      "offline": true,
      "type_id": 0,
      "recepient_name": state.recepient_name,
      "recepient_email": state.recepient_email,
      "start_time": time.time_from,
      "end_time": time.time_to,
      "year": date.year,
      "month": date.month,
      "day": date.day,
      "weekday": date.weekday,
      "status": 0,
      "confirmed": true,
      "rejected": true,
      "paid": true,
      "provider": props.providerId
    });
    var config = {
      method: 'POST',
      url: `http://109.107.176.29:5000/meeting/${props.providerId}/add`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(response)
      formSuccess(response.status)
    })
  }
  
  function formSuccess (status) {
    if (status==200) {
      navigate('/success')
    }
  }

  function change (field,value) {
    setState({...state, [field]:value})
  }

    return (
    <div className="event_form _extraheight">
        <Input error={state.error} placeholder={'John Doe'} name={'Name'} type={'text'} width={'350px'} value={state.name} change={(value)=>change('recepient_name',value)}/>
        <br />
        <Input error={state.error} placeholder={'john@doe.domain'} name={'Email address'} type={'email'} width={'350px'} value={state.email} change={(value)=>change('recepient_email',value)}/>
        <br />
        <label className="input_label" htmlFor="description">Additional notes:</label>
        <textarea className="textarea" placeholder="say something" rows="4" type="textarea" value={state.description} onChange={e=>setState({...state, description:e.target.value})} /> 
        <br />
        <div className="row">
          <div className="wizard_button" onClick={()=>navigate(-1)}>Cancel</div>
          <div className="wizard_button_light" onClick={()=>eventSave()}>Confirm</div>
        </div>
    </div>
);
}
 

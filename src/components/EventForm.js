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
  const [state, setState] = useState({
    name:'',
    email:'',
    description:'',
    error:'',
    status:null
  }
  )

  function eventSave(event) {    
    store.dispatch({
      type:actions.EVENT_ADDED,
      payload:{
        event:{
          title: state.name,
          agenda: state.email,
          description: state.description,
          start_time: time.time_from,
          end_time: time.time_to,
          offline: true,
          paid: true,
          type_id: 0,
          user_id: props.providerId
        }
      }
    })
    eventPost()
  }


  function eventPost () {
    var data = JSON.stringify({
      "title": state.name,
      "agenda": state.email,
      "description": state.description,
      "start_time": 0,
      "end_time": 0,
      "offline": true,
      "paid": true,
      "type_id": 0
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
        <Input error={state.error} placeholder={'John Doe'} name={'Name'} type={'text'} width={'350px'} value={state.name} change={(value)=>change('name',value)}/>
        <br />
        <Input error={state.error} placeholder={'john@doe.domain'} name={'Email address'} type={'email'} width={'350px'} value={state.email} change={(value)=>change('email',value)}/>
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
 

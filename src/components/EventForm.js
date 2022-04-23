import { useState, useEffect } from "react";
import { useNavigate, NavLink, Link } from 'react-router-dom'
import store from '../redux/store'
import { useSelector } from 'react-redux';
import * as actions from '../redux/actionTypes'
import TimeForConsumer from '../components/TimeForConsumer'
import Input from './Input'

export default function EventForm(props) {

  const [state, setState] = useState({
    name:'',
    description:'',
    error:''
  }
  )

  // const currentDate = useSelector(state=>state.chosenDate)  
  
  const navigate = useNavigate()
  
  // useEffect (()=> {
    
  // },[])

  function change (field,value) {
    setState({...state, [field]:value})
  }

    return (
    <div className="event_form">
        <Input error={state.error} placeholder={'John Doe'} name={'Name'} type={'text'} width={'350px'} value={state.name} change={(value)=>change('name',value)}/>
        <br />
        <Input error={state.error} placeholder={'john@doe.domain'} name={'Email address'} type={'email'} width={'350px'} value={state.email} change={(value)=>change('email',value)}/>
        <br />
        <label className="input_label" htmlFor="description">Additional notes:</label>
        <textarea className="textarea" placeholder="say something" rows="4" type="textarea" value={state.description} onChange={e=>setState({...state, description:e.target.value})} /> 
    </div>
);
}
 

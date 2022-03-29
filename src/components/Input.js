import React, { useState } from 'react'
import { Fragment } from 'react/cjs/react.development';
export default function Input(props) {
  
    const [state, setState] = useState({
        value:'',
        errorMessage:''
    })

    const Joi = require('joi');
    const schema=props.schema

    function validate () {
        setState({...state, errorMessage:''})
        const {error} = schema.validate({value:state.value})
        if (error) { 
            const {message} = error
            const field = props.name + message.substr(7)
            setState({...state, errorMessage:field})
        } else {
            props.set(state.value)
        }
    }

    function cleanErrors () {
        setState({...state, errorMessage:''})
    }

    return (
    <Fragment>
    <label htmlFor={props.name}>{props.name}</label>
    
    {state.errorMessage && <div className='input_error' style={{width:props.width}}>{state.errorMessage}</div>}
    
    <input className='input' 
    style={{width:props.width}}
    onChange={e=>setState({...state, value: e.target.value})}
    onFocus={()=>cleanErrors()}
    onBlur = {()=>validate()}
    value={state.value}
    name={props.name}
    placeholder={props.placeholder}
    type={props.type} />
    </Fragment>
  )
}

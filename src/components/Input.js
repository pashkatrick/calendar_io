import React, { useState } from 'react'
import { Fragment } from 'react/cjs/react.development';

export default function Input(props) {
  

    const Joi = require('joi');
    const schema=props.schema

    

    function cleanErrors () {
        // setState({...state, errorMessage:''})
    }

    return (
    <Fragment>
    <label htmlFor={props.name}>{props.name}</label>
    {props.error && <div className='input_error' style={{width:props.width}}></div>}
    <input className='input' 
    style={{width:props.width}}
    onChange={e=>props.change(e.target.value)}
    onFocus={()=>cleanErrors()}
    // onBlur = {()=>validate()}
    value={props.value}
    name={props.name}
    placeholder={props.placeholder}
    type={props.type} />
    </Fragment>
  )
}

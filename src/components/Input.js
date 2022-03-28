import React, { useState } from 'react'

export default function Input(props) {
  
    const [state, setState] = useState({
        value:'',
        error:''
    })
    // schema should be taken from props

    const Joi = require('joi');
    const schema=props.schema
    

    function validate () {
        const {error} = schema.validate({value:state.value})
        if (error) console.log({error})
        else return null
    }

    return (
    <input className='input' 
    onChange={e=>setState({...state, value: e.target.value})}
    onClick = {()=>validate()}
    value={state.value}
    placeholder={props.text} 
    type={props.type} />
  )
}

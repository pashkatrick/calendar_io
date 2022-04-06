import React, { useState } from 'react'
import Input from '../components/Input'

export default function SignUp (props) {
    const [state, setState] = useState({
      name:'',
      username:''
    })

    const Joi = require('joi');
    
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      username: Joi.string().min(3).required()
    })

    function validate () {
        const result = schema.validate({name:state.name, username:state.username})
        console.log(result)
    }

    function change (field, value) {
      setState({...state, [field]:value})
    }

    return <div>
        <div className="column">
          <p>Create a new user:</p>
          <Input error={state.error} placeholder={'name'} name={'Name'} type={'text'} width={'350px'} value={state.name} change={(value)=>change('name',value)}/>
          <Input error={state.error} placeholder={'username'} name={'Username'} type={'text'} width={'350px'} value={state.username} change={(value)=>change('username',value)}/>
          <button classname="button" type="submit" onClick={()=>validate()}>Sign In</button>
        </div>
    </div>
}

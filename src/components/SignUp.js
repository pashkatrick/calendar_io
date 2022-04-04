import React, { useState } from 'react'
import axios from 'axios'
import Input from '../components/Input'

export default function SignUp (props) {
    const [state, setState] = useState({
      name:'',
      nick_name:'',
      bio:'',
      alert:''
    })

    const Joi = require('joi');
    
    const schemaText = Joi.object({value: Joi.string()})
    const schema = Joi.object({value: Joi.string().min(3).required()})

    const server= "http://localhost:5000"
    
    function loginUser () {
      
      var axios = require('axios');
      var data = JSON.stringify({
        "user": {
          "name": state.name,
          "username": state.nick_name,
          "avatar": "",
          "bio": state.bio,
          "lang": "ru"
        }
      });
      
      var config = {
        method: 'post',
        url: 'http://localhost:5000/user/add',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setState({...state, alert:"Congratulations!", name:'', nick_name:'',bio:''})
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    // function setValue(value) {
      
    // }

    // function test () {
    //   const {error} = schema.validate({value:state.value})
    // }

    return <div>
        <div className="column">
          <p>Create a new user:</p>
          <div>{state.alert}</div>
          <Input placeholder={'name'} name={'Name'} type={'text'} schema={schema} width={'350px'}/>
            <br />
            <Input placeholder={'username'} name={'Username'} type={'text'} schema={schema} width={'350px'}/>
            <br />
            <Input placeholder={'Some text'} name={'Bio'} type={'textarea'} schema={schemaText} width={'350px'}/>
            <br />
          <button classname="button" type="submit" onClick={()=>loginUser()}>Sign In</button>
        </div>
    </div>
}

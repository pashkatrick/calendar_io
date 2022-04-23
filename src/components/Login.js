import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from './Input'

export default function Login() {

    const [state, setState] = useState({
        email:'',
        username:'',
        password:'',
        id:null
    })
    
    const axios = require('axios');
    const navigate = useNavigate()
    
    function loginUser () {
            
    //     var config = {
    //         method: 'get',
    //         url: `http://109.107.176.29:5000/${state.email}?full=true`,
    //         headers: { }
    //     };
            
    //     axios(config)
    //     .then(function (response) {
    //         console.log(response)
    //         setState({...state, username: response.data.user.username, id:response.data.user._id});
    //     })

        localStorage.setItem('user',state.email)
        // localStorage.setItem('id',state._id)
        navigate("/events")
    }

    function change (field, value) {
        setState({...state, [field]:value})
      }

    return <div className="page">
        <div className="login_title">Calendar.io</div>
        <div className="login_subtitle">Sign in to your account</div>
        <div className="login_form">
        <div className="column">
        <Input error={state.error} placeholder={'your.email@something.com'} name={'Email'} type={'text'} width={'350px'} value={state.name} change={(value)=>change('email',value)}/>
        <br />
        <Input error={state.error} placeholder={'password'} name={'Password'} type={'password'} width={'350px'} value={state.username} change={(value)=>change('username',value)}/>
        <br />
        <button className="wizard_button" onClick={()=>loginUser()}>Login</button>
        <br />
        <button className="wizard_button_light">Login with Google</button>
        </div>
        </div>
    </div>
}

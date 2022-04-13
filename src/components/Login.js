import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from './Input'

export default function Login() {

    const [state, setState] = useState({
        email:'',
        password:''
    })
    
    const navigate = useNavigate()
    
    function loginUser () {
        localStorage.setItem('user',state.email)
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
        <div className="wizard_button" onClick={()=>loginUser()}>Login</div>
        <br />
        <div className="wizard_button_light">Login with Google</div>
        </div>
        </div>
    </div>
}

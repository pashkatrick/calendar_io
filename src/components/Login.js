import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const [state, setState] = useState({
        login:'',
        password:''
    })
    
    const navigate = useNavigate()
    
    function loginUser () {
        localStorage.setItem('user',state.login)
        navigate("/dashboard")
    }

    return <div>
        <div className="column">
            <input placeholder="login" type="text" onChange={e=> setState({...state, login: e.target.value})} />
            <br />
            <input placeholder="password" type="password" onChange={e=> setState({...state, password: e.target.value})} />
            <br />
            <button classname="button" type="submit" onClick={()=>loginUser()}>Log In</button>
        </div>
    </div>
}

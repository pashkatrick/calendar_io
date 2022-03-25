import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const [state, setState] = useState({
        login:'',
        password:''
    })
    
    const navigate = useNavigate()

    const server= "https://localhost:5000/"
    
    function loginUser () {
     
        //  const result = fetch(`${server}`, {
        //     method: 'GET'
        //     // headers: new Headers({
        //     //   name: `Leanne Graham`,
        //     // }),
        //   })
        //     .then((response) => response.json())
        //     console.log(result)
        
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

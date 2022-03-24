import React, { useState } from 'react'

export default function Login(props) {
    const [state, setState] = useState({
        login:'',
        password:''
    })
    

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

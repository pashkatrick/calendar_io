import React, { useState } from 'react'

export default function Login(props) {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const server= "https://localhost:5000/"
    
    function loginUser () {
     
         const result = fetch(`${server}`, {
            method: 'GET'
            // headers: new Headers({
            //   name: `Leanne Graham`,
            // }),
          })
            .then((response) => response.json())
            console.log(result)
    }

    return <div>
        <div className="column">
            <input placeholder="login" type="text" onChange={e=> setLogin(e.value)} />
            <br />
            <input placeholder="password" type="password" onChange={e=> setPassword(e.value)} />
            <br />
            <button classname="button" type="submit" onClick={()=>loginUser()}>Sign In</button>
        </div>
    </div>
}

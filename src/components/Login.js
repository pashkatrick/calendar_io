import React, { useEffect, useState } from 'react'

export default function Login(props) {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    function loginUser () {
        
    }

    return <form className="login">
        <input placeholder="login" type="text" onChange={e=> setLogin(e.value)} />
        <input placeholder="password" type="password" onChange={e=> setPassword(e.value)} />
        <button classname="buttonBright" type="submit" onClick={()=>loginUser()}>Sign In</button>
    </form>
}

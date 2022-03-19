import React, { useState } from 'react'

export default function Login() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return <form className="login">
        <input placeholder="login" type="text" onChange={e=> setLogin(e.value)} />
        <input placeholder="password" type="password" onChange={e=> setPassword(e.value)} />
        <button classname="buttonBright" type="submit">Sign In</button>
    </form>
}

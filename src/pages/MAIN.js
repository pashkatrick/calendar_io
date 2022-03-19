import React from 'react'
import '../navigation.css'
import LoginForm from '../components/LoginForm'
import NavBar from '../components/NavBar'
import Login from '../components/Login'


export default function MAIN(props) {
return (
    <div className='page'>
        <NavBar/>

            <Login/>

            <h1>Easy scheduling ahead.</h1>
            <h4>Accept donations. Start a membership. Sell anything you like. It's easier than you think.</h4>
        <LoginForm/>
            <p>Create your free account. No credit card required</p>
    </div>
);
}
 

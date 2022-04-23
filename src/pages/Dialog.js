import React, { useState } from 'react'
import Input from '../components/Input'
import { NavLink, useNavigate } from 'react-router-dom'


export default function Dialog(props) {
  
    const [name, setName] = useState('')
    const navigate = useNavigate()

    function create () {
        if (name!=='') props.createNew(name)
        navigate('/availability')
    }
    
    function change (value) {
        setName(value)
    }

    return (
        <div className="_page_dialog">
            <div className="dialog_form">
            <div className="_title">Add a new schedule</div>
            <div className="_subtitle">Create a new event type for people to book times with.</div>
            <Input placeholder={'name'} name={'Name'} type={'text'} width={'485px'} value={name} change={(value)=>change(value)}/>
            <br />
            <br />
            <div className="row_right">
                <NavLink className="wizard_button" to='/availability'>Cancel</NavLink>
                <div onClick={()=>create()} className="wizard_button_light">Continue</div>
            </div>
            </div>
        </div>
    )
}

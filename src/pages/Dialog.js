import React, { useState } from 'react'
import Input from '../components/Input'
import { NavLink } from 'react-router-dom'


export default function Dialog() {
  
    const [state, setState] = useState('')

    //add click out hook

    function change () {

    }

    return (
        <div className="_page_dialog">
            <div className="dialog_form">
            <div className="_title">Add a new schedule</div>
            <div className="_subtitle">Create a new event type for people to book times with.</div>
            <Input error={state.error} placeholder={'name'} name={'Name'} type={'text'} width={'485px'} value={state.name} change={(value)=>change('name',value)}/>
            <br />
            <br />
            <div className="row_right">
                <NavLink className="wizard_button" to='/availability'>Cancel</NavLink>
                <div className="wizard_button_light">Continue</div>
            </div>
            </div>
        </div>
    )
}

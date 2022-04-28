import { click } from '@testing-library/user-event/dist/click'
import React, {Fragment, useEffect, useState} from 'react'
import PopUpMenu from './PopUpMenu'

export default function LoginBlock() {

    const [toggle, setToggle] = useState (false)
    const name = localStorage.getItem('user')
    const active = 'false'
    
    useEffect (()=> {
    
    })

    function popup () {
        const result = !toggle
        setToggle(result)
    }

    function shortName (string,id) {
        if (string.length>=12) return string.substring(0,18-id)+'...'
        else return string
    }

    return (
    <Fragment>
    <div className="row login_block" onClick={()=>popup()}>
    {active? <div className="avatar_sleep_on"></div> : <div className="avatar_sleep_on"></div>}
        <div className="avatar">{name.substring(0,1)}</div>
          <div className="column">
          <div className="popup_title">{shortName(name,0)}</div>
          <div className="popup_title">{`calendar.io/${shortName(name,13)}`}</div>
          </div>
          <div className="icon_unfold popup_button"></div>
      </div>
      {toggle && <PopUpMenu click={() => popup()}/>}
      </Fragment>
  )
}

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Event() {
  
    const navigate = useNavigate()

    useEffect (()=> {
        if (localStorage.getItem('user')==null) navigate('/login')
    },[])

    return (
    <div className="_event">
        <div className="column">
        <div className="_subtitle">Meeting for 15 min/</div>
        <div className="row">
            <div className="icon_clock"></div>    
            <div>15 min</div>
            <div className="icon_person"></div>    
            <div>1-on-1</div>
        </div>
        </div>
        <div className="row">
            <div className="icon_event_button icon_public"></div>    
            <div className="icon_event_button icon_copy"></div>    
            <div className="icon_event_button icon_more"></div>    
        </div>
    </div>
  )
}

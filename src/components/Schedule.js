import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Schedule(props) {

return (
<NavLink className="_event" to={`/availability/${props.id}`}>
     <div className="column">
    <div className="_subtitle">{props.title}
    <span className="budge_default">Default</span>
    </div>
    <div>long description</div>
    </div>    
    <div className="icon_event_button icon_more"></div>    
</NavLink>
)
}

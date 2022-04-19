import '../navigation.css'
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

export default function ConsumerEvent (props) {

    const [types, setTypes] = useState([])
    const providerId = props.provider._id

    useEffect (()=> {
        const axios = require('axios');
        var config = {
        method: 'get',
        url: `http://109.107.176.29:5000/user/${providerId}/types`,
        headers: { }
        };    
        axios(config)
        .then(function (response) {
        setTypes(response.data.event_types)
    })
    },[])
    
    return (
            <div className="page">
            <div className="avatar">{props.provider.name.substring(0,1)}</div>
            <h4>{props.provider.name}</h4>
            <h5>{props.provider.bio}</h5>
            
            {types==null? <p>has the following type of events</p>:<p>this user does not have any events</p>}
            <div className="eventContainer">
            {types && types.map(event=>
                <NavLink key={event._id} className="_event" to={`${event.length}`}>
                <div className="column">
                <div className="_subtitle">{event.title}</div>
                <div className="row">
                <div className="icon_event"></div>    
                <div>{event.length}</div>
                <div className="icon_event"></div>    
                <div>1-on-1</div>
                </div>
                </div>
            </NavLink>
                
                )}
            </div>
    </div>
);
}
 

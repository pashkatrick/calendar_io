import '../navigation.css'
import Calendar from '../components/Calendar'
import EventForm from '../components/EventForm';
import { useEffect, useState } from 'react';
import store from '../redux/store'
import * as actions from '../redux/actionTypes'
import { NavLink } from 'react-router-dom';

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
        setTypes(response.data.data)
    })
    },[])
    
    return (
            <div className="page">
            <div className="avatar">{props.provider.name.substring(0,1)}</div>
            <h4>{props.provider.name}</h4>
            <h5>{props.provider.bio}</h5>
            
            {types==null? <p>has the following type of events</p>:<p>this user does not have any events</p>}
            <div className="eventContainer">
            {types.map(event=> 
                <NavLink key={event._id} className="_event" to={`${event.title}`}>{event.title}
                <div className="column">
                <div className="_subtitle">{event.title}</div>
                <div className="row">
                <div className="icon_event"></div>    
                <div>15 min</div>
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
 

import '../navigation.css'
import Calendar from '../components/Calendar'
import EventForm from '../components/EventForm';
import { useEffect, useState } from 'react';
import store from '../redux/store'
import * as actions from '../redux/actionTypes'
import { NavLink } from 'react-router-dom';

export default function ConsumerEvent (props) {

    const [types, setTypes] = useState([])
    //have to fetch from the server by loading provider
    const providerId = props.provider._id
    // const eventTypes = props.provider.eventTypes
    
    useEffect (()=> {
        const axios = require('axios');
        var config = {
        method: 'get',
        url: `http://127.0.0.1:5000/user/${providerId}/types`,
        headers: { }
    };    
        axios(config)
        .then(function (response) {
        setTypes(response.data.data)
    })
    },[])
    
    return (
            <div className="page">
            <p>Your fency logo</p>
            <h3>{props.link}</h3>
            <h4>{props.provider.name}</h4>
            {types==null? <p>has the following type of events</p>:<p>this user does not have any events</p>}
            <div className="eventContainer">
            {types.map(event=> 
                <NavLink key={event._id} className="buttonBright" to={`${event.title}`}>{event.title}</NavLink>
                )}
            </div>
    </div>
);
}
 

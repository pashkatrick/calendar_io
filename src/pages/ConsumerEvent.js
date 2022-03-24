import '../navigation.css'
import Calendar from '../components/Calendar'
import EventForm from '../components/EventForm';
import { useEffect } from 'react';
import store from '../redux/store'
import * as actions from '../redux/actionTypes'
import { NavLink } from 'react-router-dom';

export default function ConsumerEvent (props) {

    //have to fetch from the server by loading provider
    const eventTypes = props.provider.eventTypes
    
    return (
            <div className="page">
            <p>Your fency logo</p>
            <h3>{props.link}</h3>
            <p>You can create an event here</p>
            <h4>{props.provider.name}</h4>
            <p>has the following type of events</p>
            <div className="eventContainer">
            {/* {eventTypes.map(event=> 
                <NavLink key={event} className="buttonBright" to={`${event}`}>{event}</NavLink>
                )} */}
            </div>
    </div>
);
}
 

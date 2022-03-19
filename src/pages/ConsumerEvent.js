import '../navigation.css'
import Calendar from '../components/Calendar'
import EventForm from '../components/EventForm';
import { useEffect } from 'react';
import store from '../redux/store'
import * as actions from '../redux/actionTypes'
import { useNavigate } from 'react-router-dom';

export default function ConsumerEvent (props) {

    const navigate = useNavigate();

    //have to fetch from the server by loading provider
    const eventTypes = [
        '15min'
    ]

    function setEvent (event) {
        navigate(`${event}`)
    }

    return (
            <div className='page'>
            <p>Your fency logo</p>
            <p>{props.link}</p>
            <p>You can create an event here</p>
            <p>{props.provider.name} has the following type of events</p>
            <p>You can create an event here</p>
            <div className="eventContainer">
            <p>{props.link}</p>
            {eventTypes.map(event=> 
                <div key={event} onClick={()=>setEvent(event)}>{event}</div>
                )}
            </div>
    </div>
);
}
 

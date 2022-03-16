import '../navigation.css'
import Calendar from '../components/Calendar'
import EventForm from '../components/EventForm';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ConsumerEventDone (props) {

    const navigate = useNavigate();

    function setEvent (event) {
        navigate(`${event}`)
    }

    return (
            <div className="page">
                <div></div>
                <div></div>
                <div>DONE!</div>
                <p>We will send you an email when {props.link} confirm this event</p>
            </div>

);
}
 

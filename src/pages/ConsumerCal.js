import '../navigation.css'
import Calendar from '../components/Calendar'
import EventForm from '../components/EventForm';
import { useEffect } from 'react';
import store from '../redux/store'
import * as actions from '../redux/actionTypes'
import { useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

export default function ProviderCal(props) {

    const unavailableDays=[1]
    const events=[ 
    {id:1, date:'4_2_2022', providerName:'', consumerId:2, start:'5', time:'pm', long:15},
    {id:2, date:'3_31_2022', providerName:'', consumerId:2, start:'5', time:'pm', long:15},
    {id:3, date:'4_10_2022', providerName:'', consumerId:2, start:'4', time:'pm', long:15},
  ]

    const navigate = useNavigate();
    
    const date = useSelector(state=>state.chosenDate)    
    
    function handleDay () {
        navigate(`${date}`)
    }

    return (
            <div className='page'>
            <p>Your fency logo</p>

            <div className="eventContainer">
            
            <Calendar unavailableDays={unavailableDays} events={events}/>
            <button onClick={()=>handleDay()}>This day</button>
            </div>
    </div>
);
}
 

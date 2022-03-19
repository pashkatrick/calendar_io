import '../navigation.css'
import Calendar from '../components/Calendar'
import FloatButton from '../components/FloatButton'
import { produce } from 'immer'
import {eventAdded} from '../redux/actions'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'


export default function ProviderCal(props) {

    const location = useLocation();
    const navigate = useNavigate();
    const events=[ 
    {id:1, date:'2/2/2022', dd:2, mm:2, yy:2022, providerId:1, consumerId:2, start:'5', end:'6', time:'pm', type:'meeting', aproved:false},
    {id:3, date:'3/31/2022', dd:5, mm:2, yy:2022, providerId:1, consumerId:2, start:'5', end:'6', time:'pm', type:'meeting', aproved:false},
    {id:4, date:'2/10/2022', dd:10, mm:3, yy:2022, providerId:1, consumerId:2, start:'4', end:'5', time:'pm', type:'phonecall', aproved:false},
  ]
    
    function buildEvent (event) {
        const result = event.type + " from " + event.start + event.time + " to " + event.end + event.time
        return result
    }

    const date = useSelector(state=>state.chosenDate)

    function dateChoosen () {
        navigate(`${date}`)
    }

    return (
            <div className='page'>
            
            <button onClick={()=>dateChoosen()}>Date is choosen</button>


            <div className="calendar">
                <Calendar/>
            </div>

            <p>You have events to aprove:</p>
            <div className="eventList">    
            {events.map(event=>
                <div className="eventListItem">
                    {buildEvent(event)}
                    <button>aprove</button>
                    <button>decline</button>
                    <button>info</button>
                </div>    
            )}
            </div>    

    </div>
);
}
 

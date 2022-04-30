import React, { useDebugValue, useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import BookingsOutlet from '../components/BookingsOutlet'
import Meeting from '../components/Meeting'
import { useSelector } from 'react-redux';

export default function Bookings(props) {
  
  const userId = useSelector(state=>state.user._id)
  const [meetings, setMeetings] = useState([])
  const titles = [
    'Upcoming',
    'Cancelled',
    'Past'
  ]
  const screen = props.param
  const title = titles[props.param-1]

  function loadMeetings() {
    var axios = require('axios');
    var config = {
    method: 'get',
    url: `http://109.107.176.29:5000/meeting/${userId}/all`,
    headers: { }
    };
      axios(config)
      .then(function (response) {
        setMeetings(response.data.meetings)
      })
    }

    useEffect (()=> {
      loadMeetings()
    },[])

    function meetingsFilter (meeting,condition) {
      if (condition==true) return <Meeting meeting={meeting}/>
    }

  return (
    <div className='_page'>
      <div className='_title'>Bookings</div>
      <div className='_subtitle'>See upcoming and past events booked through your event type links.</div>
      <NavLink className={screen===1? 'bookings_title_active':'bookings_title'} to='/bookings/upcoming'>Upcoming</NavLink>
      <NavLink className={screen===2? 'bookings_title_active':'bookings_title'} to='/bookings/past'>Past</NavLink>
      <NavLink  className={screen===3? 'bookings_title_active':'bookings_title'} to='/bookings/cancelled'>Cancelled</NavLink>
      <div className="booking_line"></div>
      <br />
      <br />
        {screen===1 && meetings.map(meeting=> 
          meetingsFilter(meeting, true)
          )}
        {screen===2 && meetings.map(meeting=> 
          meetingsFilter(meeting, meeting.paid)
        )}
        
        {screen===3 && meetings.map(meeting=> 
          <div className=""></div>
        )}
        
        
        {/* {screen!=1 && 
        <div className="booking_screen">
          <BookingsOutlet title={title}/>
        </div>
        } */}
      
    </div>
  )
}

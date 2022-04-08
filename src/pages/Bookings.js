import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Bookings(props) {
  
  const screen = props.param

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
      {screen===1 && <div className="booking_screen">
        <div className="_title">No Upcoming bookings, yet</div>
        <div className="_subtitle">You have no Upcoming bookings. As soon as someone books a time with you it will show up here.</div>
      </div>}
      {screen===2 && <div className="booking_screen">
        <div className="_title">No Past bookings, yet</div>
        <div className="_subtitle">You have no Past bookings. As soon as someone books a time with you it will show up here.</div>
      </div>}
      {screen===3 && <div className="booking_screen">
        <div className="_title">No Cancelled bookings, yet</div>
        <div className="_subtitle">You have no Cancelled bookings. As soon as someone books a time with you it will show up here.</div>
      </div>}
      </div>
  )
}

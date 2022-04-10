import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Bookings(props) {
  
  const titles = [
    'Upcoming',
    'Cancelled',
    'Past'
  ]
  
  const screen = props.param
  const title = titles[props.param-1]

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
      <div className="booking_screen">
        <div className="column_center">
        <div className="icon_bookings_white"></div>
        <br />
        <div className="_title">{`No ${title} bookings, yet`}</div>
        <div className="_subtitle">{`You have no ${title} bookings. As soon as someone books a time with you it will show up here.`}</div>
        </div>
      </div>
    </div>
  )
}

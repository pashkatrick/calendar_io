import React from 'react'

export default function BookingsOutlet(props) {
  return (
    <div className="column_center">
    <div className="icon_bookings_white"></div>
    <br />
    <div className="_title">{`No ${props.title} bookings, yet`}</div>
    <div className="_subtitle">{`You have no ${props.title} bookings. As soon as someone books a time with you it will show up here.`}</div>
    </div>
  )
}

import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function MeetingEdit() {
  
    const param = useParams()

    useEffect (()=>{
        console.log(param)
    },[])


    return (
      <div className="_page">
          <div className='_title'>Bookings</div>
          <div className='_subtitle'>See upcoming and past events booked through your event type links.</div>
          <div className="">
            Edit the meeting with id # {param.id}
        </div>
      </div>
      
    )
  }
  

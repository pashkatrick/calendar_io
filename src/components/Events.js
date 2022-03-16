import React from 'react'

export default function Events() {
  
    const events=[ 
        {id:1, date:'4_2_2022', providerName:'', status:'confirmed', description:'meeting', consumerId:2, from:0, to:15, type:15},
        {id:2, date:'3_31_2022', providerName:'', status:'', description:'phone call', consumerId:2, from:15, to:30, type:15},
        {id:3, date:'4_10_2022', providerName:'', status:'', description:'nails cutting', from:30, to:45, type:15},
      ]
  
      function eventConfirm (id) {
        const event = events.filter(event=> event.id!=id)

      }

    return (
    <div className="eventList">
        {events.map(event => 
            <div className="eventListItem"> 
                <div>{event.description} {event.date} {event.type}</div>
                <div className="eventListButtons">
                    {event.status!='confirmed' && <div className="button" onClick={()=>eventConfirm(event.id)}>Confirm</div>}
                    <div className="button">Cancel</div>
                </div>
                
            </div>
            )}
    </div>
  )
}

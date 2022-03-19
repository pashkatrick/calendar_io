import { useState } from "react";

export default function EventForm(props) {

    const date=''
    const [event, setEvent] = useState({
        name:"",
        email:"",
        description:""
    })

    function saveEvent(e) {    
        const eventNew = {
            date:date,
            providerName:props.link,
            consumerName: event.name,
            consumerEmail: event.consumerEmail,
            start:'4',
            time:'pm',
            long:15
          }
          localStorage.setItem("event", JSON.stringify(eventNew))
          console.log(eventNew)
      }

    return (
    <div className="event_form">
        <label htmlFor="name">Name:</label>
        <input  className="event_input" name="name" placeholder="John Doe" type="text" value={event.name} onChange={e=>setEvent({...event, name:e.target.value})}/>
        <br/>
        <label htmlFor="email">Email:</label>
        <input className="event_input" name="email" placeholder="email@email.com" type="text" value={event.consumerEmail} onChange={e=>setEvent({...event, consumerEmail:e.target.value})} />
        <br/>
        <label htmlFor="description">Description:</label>
        <textarea placeholder="say something" rows="4" type="textarea" value={event.description} onChange={e=>setEvent({...event, description:e.target.value})} /> 
        <p>{date}</p>
        <button onClick={()=>saveEvent()}>Submit</button>
    </div>

);
}
 

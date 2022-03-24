import '../navigation.css'
import Calendar from '../components/Calendar'
import EventForm from '../components/EventForm';
import { useEffect } from 'react';
import * as actions from '../redux/actionTypes'
import { useNavigate, NavLink } from 'react-router-dom'
import store from '../redux/store'
import { useSelector } from 'react-redux';
import TimeForConsumer from '../components/TimeForConsumer';

export default function ProviderCal(props) {

    const navigate = useNavigate();

    let error = ""
    const currentDate = useSelector(state=>state.chosenDate)

    function handleDay () {
      if (currentDate) {
        navigate(`${currentDate}`)
      }
      else {
        error="no date"
      }
    }

    return (
    <div className="page">
      <p>Your fency logo</p>
      <p>You are going to book something with {props.provider.name}</p>
      {error? <p>{error}</p> : <p>pick up the date</p>}
        <div className="eventContainer">
          <Calendar unavailableDays={[1]}  provider={props.provider}/>
          </div>
          <br />
          <div className="row">
          <NavLink className="buttonBright" to={`/${props.provider.link}`}>Back</NavLink>
          <div className="buttonBright" onClick={()=>handleDay()}>Next</div>
          </div>
    </div>
);
}
 

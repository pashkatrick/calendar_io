import '../navigation.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import store from '../redux/store'
import * as actions from '../redux/actionTypes'

export default function ConsumerEvent (props) {

    const [types, setTypes] = useState([])
    const providerId = props.provider._id
    const navigate = useNavigate()

    useEffect (()=> {
        const axios = require('axios');
        var config = {
        method: 'get',
        url: `http://109.107.176.29:5000/user/${providerId}/types`,
        headers: { }
        };    
        axios(config)
        .then(function (response) {
        setTypes(response.data.event_types)
    })
    },[])

    function clickEvent (event) {
        store.dispatch({
            type:actions.EVENT_ADDED,
            payload:{
              event:{
                title: event.title,
              }
            }
          })
        navigate(`${event.length}`) 
    }
    
    return (
            <div className="page">
            <div className="avatar">{props.provider.name.substring(0,1)}</div>
            <h4>{props.provider.name}</h4>
            <h5>{props.provider.bio}</h5>
            {types==null? <p>this user does not have any events</p>:<p>has the following type of events</p>}
            <div className="column">
            {types && types.map(event=>
                <div onClick={()=>clickEvent(event)} className="_event_provider" key={event._id}>
                {/* <NavLink key={event._id} className="_event_provider" to={`${event.length}`}> */}
                <div className="column">
                <div className="_subtitle">{event.title}</div>
                <div className="row">
                <div className="icon_clock"></div>    
                <div className="_subtitle">{event.length}</div>
                <div className="icon_person"></div>    
                <div className="_subtitle">1-on-1</div>
                </div>
                </div>
                </div>
                // </NavLink>
                )}
            </div>
    </div>
);
}
 

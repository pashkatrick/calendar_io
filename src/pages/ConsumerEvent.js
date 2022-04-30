import '../navigation.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import store from '../redux/store'
import * as actions from '../redux/actionTypes'


export default function ConsumerEvent () {

    const [types, setTypes] = useState([])
    const [provider, setProvider] = useState()
    const navigate = useNavigate()
    const param = useParams()

    const axios = require('axios');
    
    useEffect (()=> {
        var config = {
        method: 'get',
        url: `http://109.107.176.29:5000/user/${param.provider}?full=true`,
        headers: { }
        };    
        axios(config)
        .then(function (response) {
        fetchProvider(response)
    })
    },[])
           
    function fetchProvider(response) {
        if (response.data==false) {
          navigate('*')
        } else {
          setProvider(response.data.user)
          saveProvider(response.data.user)
        }
    }
        
    function saveProvider (provider) {
        store.dispatch({
            type:actions.PROVIDER_ADDED,
            payload:{
              provider
            }
      })
    }

    useEffect (()=> {
    if (provider) {
      const axios = require('axios');
        var config = {
        method: 'get',
        url: `http://109.107.176.29:5000/user/${provider._id}/types`,
        headers: { }
        };    
        axios(config)
        .then(function (response) {
        setTypes(response.data.event_types)
    })
    }
    })

    function setEvent (event) {
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
            <div className="avatar">{provider? provider.name.substring(0,1):'noname'}</div>
            <h4>{provider? provider.name:'noname'}</h4>
            <h5>{provider? provider.bio:'noname'}</h5>
            {types==null? <p>this user does not have any events</p>:<p>has the following type of events</p>}
            <div className="column">
            {types && types.map(event=>
                <div onClick={()=>setEvent(event)} className="_event_provider" key={event._id}>
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
                )}
            </div>
    </div>
);
}
 

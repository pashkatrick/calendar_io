import {Routes, Route, useLocation} from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import ConsumerCal from './pages/ConsumerCal';
import NotFound from './pages/NotFound';
import EventSuccess from './components/EventSuccess';
import ConsumerEvent from './pages/ConsumerEvent';
import EventComplete from './pages/EventComplete';
import Events from './pages/Events';
import Settings from './pages/Settings';
import Availability from './pages/Availability';
import SignUpPage from './pages/SignUpPage';
import Wizard from './components/Wizard';
import LeftNavbar from './components/LeftNavbar'
import Login from './components/Login';
import Bookings from './pages/Bookings';
import Notification from './components/Notification';
import AvailableDays from './components/AvailableDays';


export default function App() {
  
  const location=(useLocation()).pathname
  const loggedUser = localStorage.getItem('user')
  const currentDate = useSelector(state=>state.chosenDate)
  const notify = useSelector(state=>state.notifify)
  
  const [state, setState] = useState({
    link:null,
    provider:null,
    path:location.substring(1)
  })

  function checkPorvider() {
    var axios = require('axios');
    var config = {
    method: 'get',
    url: `http://109.107.176.29:5000/${state.path}?full=true`,
    headers: { }
    };
  
    axios(config)
    .then(function (response) {
      setState({...state, provider:response.data.user, link:response.data.user.username})
    })
  }
  
  useEffect (()=> {
    if (state.path) {
      checkPorvider()
    }
    // console.log(currentDate.date)
  },[])

  function menu() {
    if (loggedUser==null || state.link!=null) return false
    if (location=='/wizard' || location=='/login' || location=='/') return false
    else return true
  }

  return (
    <div>
      {menu()? <LeftNavbar/> : null}
      <div className={menu()? 'providerContent' : null}>
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/wizard" element={<Wizard/>}/>
        
          {loggedUser && <Route path="/events" element={<Events/>}/>}
          {loggedUser && <Route path="/settings" element={<Settings/>}/>}
        
      {loggedUser && <Route path="/signup" element={<SignUpPage/>}/>}
      {loggedUser && <Route path="/availability" element={<Availability/>}/>}
      {loggedUser && <Route path="/availability/:id" element={<Availability/>}/>}
      <Route path="/success" element={<EventSuccess/>}/>
      {loggedUser && <Route path="/bookings/upcoming" element={<Bookings param={1}/>}/> }
      {loggedUser && <Route path="/bookings/past" element={<Bookings param={2}/>}/>}
      {loggedUser && <Route path="/bookings/cancelled" element={<Bookings param={3}/>}/>}
        
      <Route exact path={`/${state.link}`} element={<ConsumerEvent provider = {state.provider}/>}/>
      <Route  exact path={`/${state.link}/:type`} element={<ConsumerCal provider = {state.provider}/>}/>
      {currentDate && <Route exact path={`/${state.link}/:type/${currentDate.date}`} element={<EventComplete provider = {state.provider}/>}/>}

      <Route path="/" exact element={<Login />}/>
      <Route path="*" exact element={<NotFound/>}/>  
      </Routes>
      </div>
    {notify && <Notification/>}
    </div>
  )
}

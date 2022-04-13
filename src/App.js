import {Routes, Route, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
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


export default function App() {
  
  const location=(useLocation()).pathname
  const loggedUser = localStorage.getItem('user')
  const currentDate = useSelector(state=>state.chosenDate)

  const [state, setState] = useState({
    providers:[],
    provider:null,
    link:null,
    path:location.substring(1)
  })
  

  function loadUsers() {
    var axios = require('axios');
  
  var config = {
  method: 'get',
  url: 'http://127.0.0.1:5000/users',
  headers: { }
  };

  const dat = axios(config)
    axios(config)
    .then(function (response) {
    setState({...state, providers:response.data.data})
    })
  }
  
  function loadProvider (provider) {
    setState({...state, provider, providers:[], link:provider.username})
  }
  
  useEffect (()=> {
    // create the condition instead to avoid loading data when static links use
    if (state.path) loadUsers()
  },[])

  useEffect (()=> {
      const requiredUser = state.providers.find(user=> user.username==state.path)
      if (requiredUser) loadProvider(requiredUser)
  }, [state.providers])
  
  function menu() {
    if (loggedUser==null) return false
    if (location=='/wizard' || location=='/login') return false
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
        
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/availability" element={<Availability/>}/>
      <Route path="/availability/:id" element={<Availability/>}/>
      {/* <Route path="/availability/new" element={<Availability/>}/> */}
      <Route path="/success" element={<EventSuccess/>}/>
      <Route path="/bookings/upcoming" element={<Bookings param={1}/>}/>
      <Route path="/bookings/past" element={<Bookings param={2}/>}/>
      <Route path="/bookings/cancelled" element={<Bookings param={3}/>}/>
        

      <Route exact path={`/${state.link}`} element={<ConsumerEvent provider={state.provider} />}/>
      <Route exact path={`/${state.link}/:type/`} element={<ConsumerCal provider={state.provider} />}/>
      <Route exact path={`/${state.link}/:type/${currentDate}`} element={<EventComplete provider={state.provider} />}/>

      <Route path="/" exact element={<Login />}/>
      <Route path="*" exact element={<NotFound/>}/>  
      </Routes>
      </div>
    </div>
  )
}

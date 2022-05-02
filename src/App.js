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
import MeetingEdit from './components/MeetingEdit';


export default function App() {
  
  const location=((useLocation()).pathname).substring(1)
  const loggedUser = useSelector(state=>state.user)
  const currentDate = useSelector(state=>state.chosenDate)
  const locations = ['events',
  'availability',
  'settings',
  'bookings/upcoming',
  'bookings/past',
  'bookings/cancelled',
]

  // useEffect (()=> {
  //   console.log(location)
  // })

  function menu() {
    if (locations.includes(location)) return true
  }

  return (
    <div className='appContainer'>
      {menu()? <LeftNavbar/>:null}
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/wizard" element={<Wizard/>}/>
        
          
        
      {loggedUser && <Route path="/signup" element={<SignUpPage/>}/>}
      {loggedUser && <Route path="/events" element={<Events/>}/>}
      {loggedUser && <Route path="/settings" element={<Settings/>}/>}
      {loggedUser && <Route path="/availability" element={<Availability/>}/>}
      {loggedUser && <Route path="/availability/:id" element={<Availability/>}/>}
      {currentDate && <Route path="/success" element={<EventSuccess/>}/>}
      {loggedUser && <Route path="/bookings/upcoming" element={<Bookings param={1}/>}/> }
      {loggedUser && <Route path="/bookings/upcoming/:id" element={<MeetingEdit/>}/> }
      {loggedUser && <Route path="/bookings/past" element={<Bookings param={2}/>}/>}
      {loggedUser && <Route path="/bookings/cancelled" element={<Bookings param={3}/>}/>}
        
      {currentDate && <Route exact path={`/:provider/:type/:date`} element={<EventComplete/>}/>}
      <Route exact path={`/:provider/:type`} element={<ConsumerCal/>}/>
      <Route exact path={`/:provider`} element={<ConsumerEvent/>}/>
      
      

      <Route path="/" exact element={<Login />}/>
      <Route path="/404" exact element={<NotFound/>}/>  
      <Route path="*" exact element={<NotFound/>}/>  
      </Routes>
    </div>
  )
}

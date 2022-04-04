import {Routes, Route, useLocation, Navigate, useNavigate, useParams} from 'react-router-dom';
import ConsumerCal from './pages/ConsumerCal';
import NotFound from './pages/NotFound';
import EventSuccess from './components/EventSuccess';
import ConsumerEvent from './pages/ConsumerEvent';
import EventComplete from './pages/EventComplete';
import ProviderEvents from './pages/ProviderEvents';
import Account from './pages/Account';
import Dashboard from './pages/Dashboard';
import { useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage';
import { useState, useEffect } from 'react';
import SignUpPage from './pages/SignUpPage';
import Wizard from './components/Wizard';
import { current } from 'immer';

export default function App() {

  const location=useLocation()

  const [state, setState] = useState({
    providers:[],
    provider:null,
    link:null,
    path:location.pathname.substring(1)
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
    if (state.path) {
      loadUsers()
    }
  },[])

  useEffect (()=> {
      const requiredUser = state.providers.find(user=> user.username==state.path)
      if (requiredUser) loadProvider(requiredUser)
  }, [state.providers])
  
  const loggedUser = localStorage.getItem('user')
  // const currentDate = useSelector(state=>state.chosenDate)
  
  return (
    <div>
      <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/events" element={<ProviderEvents/>}/>
      <Route path="/account" element={<Account/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      
      <Route exact path={`/${state.link}`} element={<ConsumerEvent provider={state.provider} />}/>

      <Route path="/" exact element={<Dashboard loggedUser={loggedUser}/>}/>
      <Route path="*" exact element={<NotFound/>}/>  
      </Routes>
      
    </div>
  )
}

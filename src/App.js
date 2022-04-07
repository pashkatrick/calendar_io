import {Routes, Route, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ConsumerCal from './pages/ConsumerCal';
import NotFound from './pages/NotFound';
import EventSuccess from './components/EventSuccess';
import ConsumerEvent from './pages/ConsumerEvent';
import EventComplete from './pages/EventComplete';
import ProviderEvents from './pages/ProviderEvents';
import Account from './pages/Account';
import SignUpPage from './pages/SignUpPage';
import Wizard from './components/Wizard';
import LeftNavbar from './components/LeftNavbar'
import TopNavbar from './components/TopNavbar';
import Login from './components/Login';

export default function App() {
  
  const location=(useLocation()).pathname

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
  
  const loggedUser = localStorage.getItem('user')
  const currentDate = useSelector(state=>state.chosenDate)
  
  function menu() {
    if (location!=='/wizard') return true
    else return false
  }


  return (
    <div>
      {menu()? <LeftNavbar/> : null}
      {menu()? <TopNavbar loggedUser={loggedUser}/> : null}
      <div className={menu()? 'providerContent' : null}>
      <Routes>
      <Route path="/events" element={<ProviderEvents/>}/>
      <Route path="/account" element={<Account/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/success" element={<EventSuccess/>}/>
      <Route path="/wizard" element={<Wizard/>}/>

      <Route exact path={`/${state.link}`} element={<ConsumerEvent provider={state.provider} />}/>
      <Route exact path={`/${state.link}/:type/`} element={<ConsumerCal provider={state.provider} />}/>
      <Route exact path={`/${state.link}/:type/${currentDate}`} element={<EventComplete provider={state.provider} />}/>

      <Route path="/" exact element={<NotFound loggedUser={loggedUser}/>}/>
      <Route path="*" exact element={<NotFound/>}/>  
      </Routes>
      </div>
    </div>
  )
}

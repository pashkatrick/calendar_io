import {Routes, Route} from 'react-router-dom';
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
import axios from 'axios';
import { useState, useEffect } from 'react';
import SignUpPage from './pages/SignUpPage';

export default function App() {

  const [routes, setRoutes] =useState([])

  useEffect(() => {
    const fetch = async () => {
      try {
        const {data}  = await axios.get("http://localhost:5000/users");
        setRoutes(data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, [])
    

  const providers = [
    {
      id:1, 
      link:'pashkatrick', 
      name:'Pavel Yudin', 
      timezone:'',
      eventTypes:[
        '15min',
        '30min'
      ],
    },
    {
      id:2, 
      link:'a5hot', 
      name: 'Anton Yudin',
      timezone:'',
      eventTypes:[
        '15min',
      ],
    }
  ]

  const currentDate = useSelector(state=>state.chosenDate)
  
  const loggedUser = {
    id:1,
    username:'Pavel Yudin',
    link:'pashkatrick',
    logged:true,
  }

  // const loggedUser = {
  //   id:2,
  //   username:'Anton Iudin',
  //   link:'a5hot',
  //   logged:true,
  // }

  return (
    <div>
      <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/events" element={<ProviderEvents/>}/>
      <Route path="/account" element={<Account/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      
      {routes.map(_provider => 
            <Route key={_provider.name} path={`${_provider.nick_name}`} element={<ConsumerEvent provider={_provider}/>}/>
            )}
      
      {providers.map(provider=> 
        <Route key={provider.link}>
        <Route path={`${provider.link}`} element={<ConsumerEvent provider={provider}/>}/>
        {provider.eventTypes.map(type =>
          <Route key={provider.link}>
          <Route path={`/${provider.link}/${type}`} element={<ConsumerCal provider={provider}/>}/>
          <Route path={`/${provider.link}/${type}/${currentDate}`} element={<EventComplete provider={provider}/>}/>
          <Route path={`/success`} element={<EventSuccess/>}/>
          </Route>
          )}
        
        </Route>
        )}
      <Route path="/" exact element={<Dashboard/>}/>  
      <Route path="*" exact element={<NotFound/>}/>  
      </Routes>
      
    </div>
  )
}

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

export default function App() {

  
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
      week: [
        {
            id:1,
            value:'Sunday',
            available:true,
            timeFrames: [
                {id:1, from:0, to:45},
                {id:2, from:60, to:120}
            ],
            },
            {
            id:2,
            value:'Monday',
            available:true,
            timeFrames: [
                {id:1, from:540, to:1020}
            ]
            },
            {
            id:3,
            value:'Tuesday',
            available:true,
            timeFrames: [
                {id:1, from:540, to:1020}
            ]
            },
            {
            id:4,
            value:'Wednesday',
            available:true,
            timeFrames: [
                {id:1, from:540, to:1020}
            ]
            },
            {
            id:5,
            value:'Thursday',
            available:true,
            timeFrames: [
                {id:1, from:540, to:1020}
            ]
            },
            {
            id:6,
            value:'Friday',
            available:true,
            timeFrames: [
                {id:1, from:540, to:1020}
            ]
            },
            {
            id:7,
            value:'Saturday',
            available:false,
            timeFrames: [
                {id:1, from:540, to:1020}
            ]
            }
    ]
    },
    {
      id:2, 
      link:'a5hot', 
      name: 'Anton Yudin',
      timezone:'',
      eventTypes:[
        '15min',
      ],
      week: [
        {
            id:1,
            value:'Sunday',
            available:false,
            timeFrames: [
                {id:1, from:0, to:45},
                {id:2, from:60, to:120}
            ],
            },
            {
            id:2,
            value:'Monday',
            available:true,
            timeFrames: [
                {id:1, from:540, to:1020}
            ]
            },
            {
            id:3,
            value:'Tuesday',
            available:true,
            timeFrames: [
                {id:1, from:540, to:1020}
            ]
            },
            {
            id:4,
            value:'Wednesday',
            available:true,
            timeFrames: [
                {id:1, from:540, to:1020}
            ]
            },
            {
            id:5,
            value:'Thursday',
            available:true,
            timeFrames: [
                {id:1, from:540, to:1020}
            ]
            },
            {
            id:6,
            value:'Friday',
            available:true,
            timeFrames: [
                {id:1, from:540, to:1020}
            ]
            },
            {
            id:7,
            value:'Saturday',
            available:false,
            timeFrames: [
                {id:1, from:540, to:1020}
            ]
            }
    ]
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
      {loggedUser.logged && <Route path={`/login/${loggedUser.link}`} element={<Dashboard user={loggedUser}/>}/>}
      {loggedUser.logged && <Route path={`/login/${loggedUser.link}/dashboard`} element={<Dashboard user={loggedUser}/>}/>}
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/events" element={<ProviderEvents/>}/>
      <Route path="/account" element={<Account/>}/>
      {providers.map(provider=> 
        <Route>
        <Route path={`${provider.link}`} element={<ConsumerEvent provider={provider}/>}/>
        {provider.eventTypes.map(type =>
          <Route>
          <Route path={`/${provider.link}/${type}`} element={<ConsumerCal provider={provider}/>}/>
          <Route path={`/${provider.link}/${type}/${currentDate}`} element={<EventComplete provider={provider} />}/>
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

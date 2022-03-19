import FAQ from './pages/FAQ';
import MAIN from './pages/MAIN';
import Explore from './pages/Explore';
import {Routes, Route} from 'react-router-dom';
import ConsumerCal from './pages/ConsumerCal';
import NotFound from './pages/NotFound';
import EventForm from './components/EventForm';
import ConsumerEvent from './pages/ConsumerEvent';
import ProviderEvents from './pages/ProviderEvents';
import Account from './pages/Account';
import Dashboard from './pages/Dashboard';

export default function App() {

  const providers = [
    {id:1, link:'pashkatrick', name:'Pavel Yudin', timezone:''},
    {id:2, link:'a5hot', name: 'Anton Yudin'}
  ]

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
      <Route path="/explore:id" element={<Explore home={'test'}/>}/>
      <Route path="/explore" element={<Explore home={'test'}/>}/>
      {loggedUser.logged && <Route path={`/login/${loggedUser.link}`} element={<Dashboard user={loggedUser}/>}/>}
      {loggedUser.logged && <Route path={`/login/${loggedUser.link}/dashboard`} element={<Dashboard user={loggedUser}/>}/>}
      <Route path="/cons" element={<ConsumerCal/>}/>
      <Route path="/faq" element={<FAQ/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/events" element={<ProviderEvents/>}/>
      <Route path="/account" element={<Account/>}/>
      {providers.map(provider=> 
        <Route>
        <Route path={`${provider.link}`} element={<ConsumerEvent provider={provider}/>}/>
        <Route path={`/${provider.link}/:yourEvent`} element={<ConsumerCal/>}/>
        <Route path={`/${provider.link}/:yourEvent/:yourDate`} element={<EventForm/>}/>
        </Route>
        )}
      <Route path="/" exact element={<MAIN/>}/>  
      <Route path="*" exact element={<NotFound/>}/>  
      </Routes>
    </div>
  )
}

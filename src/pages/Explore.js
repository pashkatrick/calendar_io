import React, { useState, useEffect } from 'react'
import '../navigation.css'
import NavBar from '../components/NavBar'
import Buttons from '../components/Buttons'
import Portrait from '../components/Portrait'
import Calendar from '../components/Calendar'

export default function Explore(props) {
  
  const [toggle, setToggle] = useState('Artists')

  const persons = [
    {id:1, name:'Jane', text:'she does somethin on youtube', num: 256, link: 'photo'},
    {id:2, name:'Christina', text:'nobody', num: 132, link: 'photo2'},
    {id:3, name:'Olga', text:'lorem ipsum', num: 445, link: 'photo3'},
    {id:4, name:'Natasha', text:'text text text', num: 227, link: 'photo4'}
  ]


  function func (event) {
    setToggle(event.target.id)
    
  }

  return (
    <div className='page'>
        <NavBar/>
        {/* <p>{props.home}</p> */}

        <Buttons action={func} active={toggle}/>
        {toggle=='Artists' && <div className="horizontal">
          {persons.map(person=> <Portrait key={person.id} name={person.name} text={person.text} num={person.num} class={person.link}/>)}
        </div>}

        {toggle=='Writers' && <div className="horizontal">
          Writers are here
        </div>}

        {toggle=='Musicians' && <div className="horizontal">
        Musicians are here
        </div>}

        {toggle=='Developers' && <div className="horizontal">        

        <Calendar/>

        </div>}
    </div>
  )
}

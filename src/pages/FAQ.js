import React, { useEffect } from 'react'
import '../navigation.css'
import NavBar from '../components/NavBar'
import FACTS from '../components/FACTS'
import {useLocation} from 'react-router-dom';

export default function FAQ() {
  
const location = useLocation()

  useEffect (()=> {
    console.log(location)
  })
  
  
  return (
    <div className='page'>
        <NavBar pressed={1}/>
        <FACTS/>
    </div>
  )
}

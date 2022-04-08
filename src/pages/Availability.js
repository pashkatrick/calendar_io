import React, {useState} from 'react'
import AvailableDays from '../components/AvailableDays'

export default function Availability() {
  
const [title, setTitle] = useState()


  return (
    <div className="">
        <input className="flex_title" value="Text" type="text"/>
        <AvailableDays/>
    </div>
  )
}

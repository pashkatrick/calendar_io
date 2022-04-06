import React, {Fragment, useEffect} from 'react'
import EventForm from '../components/EventForm'
import TimeForConsumer from '../components/TimeForConsumer'
import store from '../redux/store'
import { useSelector } from 'react-redux';
import timeBuilder from '../services/timeBuilder';

export default function EventComplete(props) {

  const date = useSelector(state=>state.chosenDate)  
  const week = useSelector(state=>state.week)
  
  useEffect (()=> {
    console.log(date)
    console.log(week)
  },[])

  // const id = date.substr(date.length-1, 1)
  // const day = week.find(d=>d.id-1==id)
  // const frm = fillFrames(day.timeFrames)

  // function fillFrames (givenFrames) {
  // let frames = []
  // givenFrames.forEach(element => {
  // const time=timeBuilder(element.from, element.to)
  // frames = [...frames, ...time]  
  // });
  // return frames
  // }

  return (
    <div className="page">
    <p>You are booking the event with {props.provider.link} on {date.substr(0,9)}</p>
    <div className="row">
    <EventForm/>
    {/* <TimeForConsumer frames={frm}/> */}
    </div>
    </div>
  )
}

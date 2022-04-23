import React, { useEffect } from 'react'
import {NavLink, useParams } from 'react-router-dom';
import { useState } from 'react'
import TimeSlot from '../components/TimeSlot'
import * as variables from '../services/variables'

export default function AvailableDays(props) {
      
    const week = variables.CALENDAR_DAYS
    const weekDays = variables.CALENDAR_WEEKDAYS_FULL
    const id = props.id
    
    const [timeFrames, setTimeFrames] = useState(props.slots)
    
    useEffect (()=> {
        
    },[])

    // const [timeFrames, setTimeFrames] = useState(props.slots)
    

    function handleDay(day) {
        const currentFrame = timeFrames.find(frame=> frame.day===day)
        if (!currentFrame) addFrame(day)
        else {
           const frames = timeFrames.filter(frame=> frame.day!==day)
           setTimeFrames([...frames])
        }
    }

    function showDay (day) {
        const frames = timeFrames.filter(frame=> frame.day===day)
        if (frames.length>0) return true
        else return false
    }

    function showDayName (day) {
        return weekDays[day]
    }

    function setTime (time, frameId, where) {
        const currentFrame = timeFrames.find(frame=> frame.id===frameId)
        if (where=='to') currentFrame.time_to=time
        else currentFrame.time_from=time
        setTimeFrames([...timeFrames].map(obj=> {
            if (obj.id === frameId) {
                return {
                  ...obj,
                  currentFrame
                }
              }
              else return obj; 
        }))
    }

    function addFrame (day) {
        let newId = 1
        timeFrames.forEach(frame=> {
            if (frame.id>newId) newId=frame.id
        })
        newId++
        const newFrame = {
            id:newId,
            day:day,
            time_from:540,
            time_to:1020,
        }
        setTimeFrames([...timeFrames, newFrame])
    }

    function deleteFrame (frameId) {
        const frames = timeFrames.filter(frame=> frame.id!==frameId)
        setTimeFrames([...frames])
    }

    return (
    <div className="_outtest">
    <div className="AvailableDays">
            <div className="dayContainer">
            <div className="_title">Change the start and end times of your day {id}</div>
            </div>
        {week.map(day=> 
            <div key={day} className="dayFrame">
            <div className="dayContainer">
                <div>
                    <input className='checkbox' type="checkbox" onChange={()=>handleDay(day)} id={day} name={day} value={day} checked={showDay(day)}/>
                    <label htmlFor={day}>{showDayName(day)}</label>
                </div>
            </div>
                <div>
                {timeFrames.map(frame=> {
                if (showDay(day) && frame.day===day) {
                    return <div key={frame.id} className="dayTimeFrame">
                    <TimeSlot from={frame.time_from} to={frame.time_to} setTime={(time, where)=>setTime(time, frame.id, where)}/>
                    <div className="frameDelete" onClick={()=>{deleteFrame(frame.id)}} key={frame.id}></div>
                    </div>
                }
            }
            )}
                </div>

                <div className="dayContainer">
                    {showDay(day)==true ? <div className="frameAdd" onClick={()=>addFrame(day)}></div >:<div>Unavailable</div>}
                </div>
            </div>
        )}
        
        </div>
        <div className="row_right">
            <NavLink className="wizard_button_light" to={`/availability`}>Cancel</NavLink>
            <div className="wizard_button" to="/availability">Save</div>
        </div>
        </div>
  )
}
import React from 'react'
import { useState } from 'react'
import TimeSlot from '../components/TimeSlot'

export default function AvailableDays() {
  
    const loggedUser = ''
    
    const [week, setWeek] = useState([
        {
            id:1,
            value:'Sunday',
            avaliable:false,
            timeFrames: [
                {id:1, from:540, to:1020}
            ],
            },
            {
            id:2,
            value:'Monday',
            avaliable:true,
            timeFrames: [
                {id:1, from:540, to:1020}
            ]
            },
            {
            id:3,
            value:'Tuesday',
            avaliable:true,
            timeFrames: [
                {id:1, from:540, to:1020}
            ]
            },
            {
            id:4,
            value:'Wednesday',
            avaliable:true,
            timeFrames: [
                {id:1, from:540, to:1020}
            ]
            },
            {
            id:5,
            value:'Thursday',
            avaliable:true,
            timeFrames: [
                {id:1, from:540, to:1020}
            ]
            },
            {
            id:6,
            value:'Friday',
            avaliable:true,
            timeFrames: [
                {id:1, from:540, to:1020}
            ]
            },
            {
            id:7,
            value:'Saturday',
            avaliable:false,
            timeFrames: [
                {id:1, from:540, to:1020}
            ]
            }
    ])

    function updateWeek (id, timeFrames) {
        setWeek([...week].map(obj => {
            if(obj.id === id) {
              return {
                ...obj,
                timeFrames
              }
            }
            else return obj;          
        }))
    }

    function handleDay (value) {
        let currentDay = week.find(day=> day.value==value)
        const avaliable=!currentDay.avaliable        
        const item = {
            id:1,
            from:540,
            to:1020
        }
        currentDay.timeFrames=[]
        currentDay.timeFrames.push(item)
        setWeek([...week].map(object => {
            if(object.value === value) {
              return {...object,
                  avaliable
              }
            }
            else return object;          
        }))
    }
    
    function setTime (time, id, frame, where) {
        const day = week.find(day=> day.id==id)
        const timeFrames = day.timeFrames
        timeFrames.map(f=> {
            if (f.id==frame) {
                if (where=='from') f.from=time
                else f.to=time
            }
        })
        updateWeek(id, timeFrames)
    }
  
    function addTimeFrame (id) {
        const day = week.find(day=> day.id==id)
        const timeFrames = day.timeFrames
        let newId = 1
        timeFrames.forEach(frame=> {
            if (frame.id>newId) newId=frame.id
        })
        newId++
        const newTime = {
            id:newId,
            from:540,
            to:1020,
        }
        timeFrames.push(newTime)
        updateWeek(id, timeFrames)
    }

    function deleteFrame (id, frame) {
        const day = week.find(day => day.id==id)
        const timeFrames = day.timeFrames.filter(gap => gap.id!=frame)
        if (day.timeFrames.length<2) day.avaliable=false
        updateWeek(id, timeFrames)
    }

    return (
    <div className="AvailableDays">
        {week.map(day=> 
            <div className="dayFrame">
            <div className="dayContainer">
            <input type="checkbox" onChange={()=>handleDay(day.value)} id={day.value} name={day.value} value={day.value} checked={day.avaliable}/>
            <label htmlFor={day.value}>{day.value}</label>
            {day.avaliable && <button className="frameAdd" onClick={()=>addTimeFrame(day.id)}></button>}
            </div>
                {day.avaliable && day.timeFrames.map(frame => 
                    <div className="dayTimeFrame">  
                    <TimeSlot from={frame.from} to={frame.to} setTime={(time, where)=>setTime(time, day.id, frame.id, where)}/>
                    <div className="frameDelete" onClick={()=>{deleteFrame(day.id, frame.id)}} key={frame.id}></div>
                    </div>
                    )}
                {!day.avaliable && <div>This day is unavailable</div>}      
            </div>
            )}
            <button className="weekSaveButton buttonBright">Save</button>
    </div>
  )
}


import React, { useEffect } from 'react'
import { useState } from 'react'
import TimeFrames from './TimeFrames'

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

    function getAvaliableDays () {
        const busyDays = []
        week.forEach(day=>{
            if (day.avaliable) busyDays.push(day.id)
        })
        return busyDays
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
    
    function setTime (from, to, id, frame) {
        const day = week.find(day=> day.id==id)
        const timeFrames = day.timeFrames
        timeFrames.map(f=> {
            if (f.id==frame) {
                f.from=from;
                f.to=to
            }
        })

        setWeek([...week].map(object => {
            if(object.id === id) {
              return {
                ...object,
                timeFrames
              }
            }
            else return object;          
        }))
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
        setWeek([...week].map(object => {
            if(object.id === id) {
              return {
                ...object,
                timeFrames
              }
            }
            else return object;          
        }))
    }

    useEffect (()=> {

    })

    function deleteFrame (id, frame) {
        const day = week.find(day => day.id==id)
        const timeFrames = day.timeFrames.filter(gap => gap.id!=frame)
        if (day.timeFrames.length<2) day.avaliable=false
        setWeek([...week].map(object => {
            if(object.id === id) {
              return {
                ...object,
                timeFrames
              }
            }
            else return object;          
        }))
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
                    <TimeFrames from={frame.from} to={frame.to} time={(from, to)=>setTime(from, to, day.id, frame.id)}/>
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

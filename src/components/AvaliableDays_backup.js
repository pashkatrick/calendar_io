import React, { useEffect } from 'react'
import { useState } from 'react'
import TimeFrames from './TimeFrames'

export default function AvaliableDays() {
  
    const loggedUser = ''
    
    const [week, setWeek] = useState([
        {
            id:1,
            value:'Sunday',
            avaliable:true,
            timeFrames: [
                {id:1, from:0, to:0}
            ],
            },
            {
            id:2,
            value:'Monday',
            avaliable:false,
            timeFrames: [{id:1, from:0, to:0}]
            },
            {
            id:3,
            value:'Tuesday',
            avaliable:false,
            timeFrames: [{id:1, from:0, to:0}]
            },
            {
            id:4,
            value:'Wednesday',
            avaliable:false,
            timeFrames: [{id:1, from:0, to:0}]
            },
            {
            id:5,
            value:'Thursday',
            avaliable:false,
            timeFrames: [{id:1, from:0, to:0}]
            },
            {
            id:6,
            value:'Friday',
            avaliable:false,
            timeFrames: [{id:1, from:0, to:0}]
            },
            {
            id:7,
            value:'Saturday',
            avaliable:false,
            timeFrames: [{id:1, from:0, to:0}]
            }
    ])

    function handlePrint () {
    }

    function handleDay (value) {
        let currentDay = week.find(day=> day.value==value)
        const avaliable=!currentDay.avaliable        
        const item = {
            id:1,
            from:0,
            to:0
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
            from:0,
            to:0,
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
    <div className="">
        {week.map(day=> 
            <div className="dayFrame">
            <input type="checkbox" onChange={()=>handleDay(day.value)} id={day.value} name={day.value} value={day.value} checked={day.avaliable}/>
            <label htmlFor={day.value}>{day.value}</label>            
                
                {day.avaliable && day.timeFrames.map(frame => 
                    <div className="dayTimeFrame">
                    <TimeFrames from={frame.from} to={frame.to} time={(from, to)=>setTime(from, to, day.id, frame.id)}/>
                    <button onClick={()=>{deleteFrame(day.id, frame.id)}} key={frame.id}>del</button>
                    </div>
                    )}
                
                {day.avaliable? <button onClick={()=>addTimeFrame(day.id)}>+</button> : <p>This day is unavaliable</p>}
            </div>
            )}
            <button className="buttonBright" onClick={()=>handlePrint()}>Save</button>
    </div>
  )
}

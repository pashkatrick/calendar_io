import React from 'react'
import Button from './Button'

export default function Buttons(props) {
  
  const persons = ['Artists','Writers','Musicians','Developers']
  
  return <div className="horizontal">
      {persons.map(person=> 
      <Button action={props.action} class={props.active==person? "buttonActive" : "button"} text={person} key={person} id={person}/>  
      )}
  </div>
}
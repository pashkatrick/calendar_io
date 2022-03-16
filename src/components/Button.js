import React from 'react'

export default function Button(props) {
  return <div id={props.id} onClick={props.action} className={props.class}>{props.text}</div>
}
import React, { useState } from 'react'
import Input from '../components/Input'
import Notification from '../components/Notification'


export default function Settings() {
  
  const [state, setName] = useState({
    name:'',
    email:'',
    bio:''
  })

  function change (field, value) {
    setName({...state, [field]:value})
  }



  return (
    <div className='_page'>
    <div className="_title">Page</div>
    <div className="_subtitle">Edit your profile information, which shows on your scheduling link.</div>

    <Input placeholder={'name'} name={'Name'} type={'text'} width={'485px'} value={state.name} change={(value)=>change('name',value)}/>
    <br />
    <Input placeholder={'email'} name={'Email'} type={'email'} width={'485px'} value={state.email} change={(value)=>change('email',value)}/>
    <br />
    <textarea  className="textarea" placeholder={'about'} name='about' id="" cols="59" rows="10"></textarea>
    <Notification/>
    </div>
  )
}

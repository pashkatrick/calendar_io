import React, {Fragment, useState} from 'react'
import Joi from 'joi'
import Input from './Input'
import TimeZones from './TimeZones'

export default function WizardFirstScreen() {
  
    const [state, setState] = useState({
        value:'',
    })

    function setValue (value) {
        setState({value})
    }

    function next () {
        if (state.value!='') console.log('hurray!')
    }

    function time () {
        const date = new Date()
        const result ='Time now: ' + date.getHours() + ':' + date.getMinutes()
        return result
    }
    
    const schema = Joi.object({
        value: Joi.string().min(5),
    })
  
    return (
    <div className='wizardFirst'>
        <Input set={(value)=>setValue(value)} value={state.value} placeholder={'placeholder'} width={'350px'} type={'text'} schema={schema} name={'Name'}/>
        <br />
        <div className='row'>
            <div>{time()}</div>
        </div>
        <TimeZones/>
        <div className='wizard_button' onClick={()=>next()}>Go next</div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import * as variables from '../services/variables'
import Calendar from './Calendar'
import WizardFirstScreen from '../components/WizardFirstScreen'
import AvailableDays from '../components/AvailableDays'



export default function Wizard() {
  
    const location = useLocation()
    const navigate = useNavigate()

    const {id} = useParams()    
    const [step, setStep] = useState(1)
    const titles = variables.WIZARD_TITLES
    const descriptions = variables.WIZARD_PHRASES
    const lines = [0,1,2,3]

    function stepCnange (param) {
        setStep(step+param)
    }

    return (
    <div className='page dark'>
        
        <div className="wizard">
            <p>{id}</p>
            <div className="wizardHeader">
            <h2 className='wizardTitle'>{titles[step]}</h2>
            <div className='wizardDiscription'>{descriptions[step]}</div>
            <h5 className='wizardDiscription'>Step {step} of 4</h5>
            </div>

        <div className='row'>
            {lines.map(id=> 
                <div key={id} className={`${id<step? 'wizardLineActive':'wizardLine'}`}></div>
            )}
        </div>
        
        <div className='wizardContent'>
            {step==1 && <WizardFirstScreen/>}
            {step==2 && <AvailableDays/>}
            {step==3 && <div>More Content</div>}
        </div>
        
        <div className={`${step==1? 'wizardButtons' : "btw"}`}>
            {step>1 && <div className='wizardButton' onClick={()=>stepCnange(-1)}>Previous Step</div>}
            {step<=4 && <div className='wizardButton' onClick={()=>stepCnange(1)}>Skip this Step</div>}
        </div>
        
        </div>
    </div>
  )
}


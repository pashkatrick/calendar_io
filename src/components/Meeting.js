import React from 'react'
import { timeDecoder } from '../services/timeBuilder'

export default function Meeting(props) {
  return (
    <div className="_meeting">
            <div className="column">
            <div className="_subtitle">May 9</div>
            <div className="_subtitle">May 9</div>
            </div>
            <div className="column">
              <div className="_subtitle">{props.meeting.title}</div>
              <div className="_subtitle">{props.meeting.title}</div>
            </div>
            <div className="row">
              <div className="button_icon">
                <div className="icon_settings"></div>
                Cancel</div>
                <div className="button_icon">
                <div className="icon_clock"></div>
                Reschedule</div>
            </div>
            
    </div>
  )
}

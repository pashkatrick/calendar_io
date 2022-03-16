import { Fragment } from "react/cjs/react.development";
import React from 'react';
import Subscribers from "./Subscribers";
 
 export default function Portrait(props) {
    
    return <Fragment>    
    <div className="person">
            <div className="portrait">
                <div className={props.class}></div>
            </div>
            <div className="description"><span className="name">{props.name}</span> {props.text}</div>
            <Subscribers num={props.num}/>
        </div>
    </Fragment>
 }

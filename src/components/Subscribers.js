import React from 'react';
 
 export default function Subscribers(props) {
    return <div className="horizontal likes">
        <div className="iconHeart"></div>
        {props.num} supporters
    </div>;
 }
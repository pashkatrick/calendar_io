import React, { useEffect, useState } from 'react';
import '../navigation.css'
import icon1 from '../img/icon1.svg'
import icon2 from '../img/icon2.svg'
import icon3 from '../img/icon3.svg'

export default function FloatButton() {

    const [toggle, setToggle] = useState(false)

    useEffect (()=> {
        document.addEventListener("mousedown", clickOut);
    },) 


    function clickOut (event) {
        console.log(event.target)
    }

    return (
        <div onClick={()=>setToggle(true)} className="carrotQuest">
            {toggle && <div className="carrotQuestMenu">
                    <div className="carrotQuestMenuItem">
                        <img className="carritQuestIcon" src={icon1} alt=""/>
                        About</div>
                    <div className="carrotQuestMenuItem">
                    <img className="carritQuestIcon" src={icon2} alt="" />
                        Whats Up</div>
                    <div className="carrotQuestMenuItem">
                    <img className="carritQuestIcon" src={icon3} alt="" />
                        Support</div>
                </div>}
                ?
            </div>
);
}
 
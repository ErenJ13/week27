

import React from 'react';
import './Card.css'

export default (props) => {

    const handleClick = () => props.onClick(props.id);

    return (


        < div onClick={handleClick} className={"card " + (props.isChecked ? "checked" : "")} >
           
                
                <div className="cardName"  style = {{backgroundColor: props.color}}>{props.name}</div>
                <div className="cardPrice" style={{ backgroundColor: props.color }}><span className="rub">руб </span>{props.price}<span className="mes"> /мес</span></div>
                <div className="cardMbit">{props.scor}</div>
                <div className="cardText">{props.info}</div>
               
            
           
        </div>
    )
}

import React from 'react'
import { PiCursorClick } from "react-icons/pi";
import '../styles/card.css'


const Card = (props) => {
  return (
    <div className='main-card'>
        <div className='card-icon'>
          <props.icon className="col"/>
        </div>
        <h3>{props.title}</h3>
        <p>{props.des}</p>
    </div>
  )
}

export default Card
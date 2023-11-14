import React from 'react'
import './style.scss'

const MiniCard = (props) => {
  return (
    <div className={`miniCard-wrapper ${props.bgColor}`}>
        <img src={props.img} alt="" />
        <h3>{props.name}</h3>
        <span>{props.stockCount}</span>
    </div>
  )
}

export default MiniCard
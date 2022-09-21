import React from 'react'

function CardSingle(props) {
  return (
    <div className='card-single' >
        <img  className='card-image' src={props.img} />
        <div className='card-score' >
            <img className='card-star' src="Star 1.png" alt="" />
            <h1>{props.score}</h1>
            <h1>{props.reviewNo}</h1>
            <h1>{props.country}</h1>
        </div>
        <h1 className='card-text' >{props.description}</h1>
        <h1>{props.price}</h1>
    </div>
  )
}

export default CardSingle;
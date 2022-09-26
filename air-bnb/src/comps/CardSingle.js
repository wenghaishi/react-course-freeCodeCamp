import React from 'react'

function CardSingle(props) {

  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT" 
  } else if (props.item.location === "Online") {
    badgeText = "Online"
  }

  return (
    <div className='card-single' >
        {badgeText && <div className='card-badge'>{badgeText}</div>}
        <img  className='card-image' src={props.item.coverImg} />
        <div className='card-score' >
            <img className='card-star' src='Star 1.png' alt="" />
            <h1>{props.item.stats.rating}</h1>
            <h1>({props.item.stats.reviewCount})</h1>
            <h1>{props.item.location}</h1>
        </div>
        <h1 className='card-text' >{props.item.description}</h1>
        <h1>Price: ${props.item.price}</h1>
    </div>
  )
}

export default CardSingle;
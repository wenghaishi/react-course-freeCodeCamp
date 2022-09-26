import React from 'react'
import CardSingle from './CardSingle'
import data from './data.js'

const card = data.map(item => {
    return (
        <CardSingle
            key={item.key}
            item={item}
        />
    )
}) 

function Card() {
  return (
    <div className='card' >
        {card}
    </div>
  )
}

export default Card
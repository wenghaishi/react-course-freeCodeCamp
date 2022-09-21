import React from 'react'
import CardSingle from './CardSingle'



function Card() {
  return (
    <div className='card' >
        <div className='card-single' >
                <CardSingle 
                    img='card1.png'
                    score="4.4"
                    reviewNo="(7)"
                    country="USA"
                    description="He will teach you to swim"
                    price="$50"       
                />
        </div>
        <div  className='card-single' >
            <CardSingle
                img='card2.png'
                score='4.9'
                reviewNo='(22)'
                country='USA'
                description='Learn wedding photography'
                price='$80'
            />
        </div>
        <div className='card-single' >
        <CardSingle
                img='card3.png'
                score='4.6'
                reviewNo='(82)'
                country='USA'
                description='Learn to bike'
                price='$70'
            />

        </div>
    </div>
  )
}

export default Card
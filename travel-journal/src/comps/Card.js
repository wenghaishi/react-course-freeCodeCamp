import React from 'react'

function Card(props) {

  return (
    <div>
        <div className='card-main' >
            <img className='card-img' src={props.img} alt="" />
            <div className='card-text' >
                <div className='card-pin-country' >
                <img className='pin-icon' src="pin.svg" alt="" />
                <h1 className='card-text-country' >{props.country}</h1>
                
                <a className='card-google-maps' href={props.link} target="_blank">View on Google Maps</a>
                </div>
                <h1 className='card-location' >{props.location}</h1>
                <h1 className='card-duration' >{props.duration}</h1>
                <h2 className='card-description' >{props.description}</h2>
            </div>
        </div>
        <img className='card-line' src="line.svg" alt="" />
    </div>
  )
}

export default Card
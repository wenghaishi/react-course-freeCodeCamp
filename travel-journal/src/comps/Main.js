import React from 'react'
import Card from './Card'
import data from './data'

function Main() {

    const card = data.map(item => {
        return (
            <Card 
                img={item.img}
                country={item.country}
                location={item.location}
                duration={item.duration}
                description={item.description}
                link={item.link}
            />
        )
    })

    return (
    <div>
        <div className='main-box' >
            {card}
        </div>
    </div>
  )
}

export default Main
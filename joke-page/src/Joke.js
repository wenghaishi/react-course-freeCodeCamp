import React, {useState} from 'react'

function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)

    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }

  return (
    <div>
        {props.setup && <h3>{props.setup}</h3>}
        {isShown && <p>{props.punchline}</p>}
        {!isShown && <button onClick={toggleShown}>Show Punchline</button>}
        {isShown && <button onClick={toggleShown}>Hide Punchline</button>}
        
    </div>
  )
}

export default Joke
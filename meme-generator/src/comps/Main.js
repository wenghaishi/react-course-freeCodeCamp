import React from 'react'
import memesData from './memesData'

function Main() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    

  return (
    <div>
        <div  className='main-input-box'>
            <form className='form' action="">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button className='form-button' onClick={getMemeImage}>
                    Generate New Meme
                </button>
            </form>
            <img src={meme.randomImage} />
        </div>


    </div>
  )
}

export default Main
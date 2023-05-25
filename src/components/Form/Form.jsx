import { useState } from 'react'
import memesData from '../../utils/memesData.js'
import './Form.scss'

const Form = () => {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1ihzfe.jpg"
})

  const [allMemeImages, setAllMemeImages] = useState(memesData)
  let url

  const getMemeImage = () => {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    
    url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))

  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
        {/* <p>{url}</p> */}
        <div className="form">
            <input  
                className="form__input" 
                type="text"
                placeholder="Top text" 
                name='topText'
                value={meme.topText}
                onChange={handleChange}
            />
            <input  
                className="form__input" 
                type="text"
                placeholder="Bottom Text"
                name='bottomText'
                value={meme.bottomText}
                onChange={handleChange} 
            />
            <button 
                className="form__button"
                onClick={getMemeImage}
            >
                Get a new meme image 🖼️
            </button>
        </div>

        <div className="meme">
          <img src={meme.randomImage} className="meme--image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </main>
  )
}

export default Form
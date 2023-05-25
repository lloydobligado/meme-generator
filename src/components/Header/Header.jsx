import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
        <div className="header__logo">
            <img className="header__logo__image" src="./src/assets/icons/troll-face.svg" alt="Meme Logo" />
            <h3 className="header__logo__name">Meme Generator</h3>
        </div>
        <h5 className="header__side">React Course - Project 3</h5>
    </header>
  )
}

export default Header
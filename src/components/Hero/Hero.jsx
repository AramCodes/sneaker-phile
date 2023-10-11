import React from 'react'
import './Hero.css'
import handIcon from '../../assets/images/hand_icon.png'
import arrowIcon from '../../assets/images/arrow.png'
import heroImg from '../../assets/images/hero_image.png'

const Hero = () => {
  return (
    <main className='hero'>
        <div className='hero-left'>
            <h2>Fresh Kicks All Time</h2>

            <div>
                <div className='hero-hand-icon'>
                    <p>New</p>
                    <img src={handIcon} alt="waving hand" />
                </div>

                <p>Collections</p>
                <p>for Men</p>
            </div>

            <div className='hero-latest-btn'>
                <div>Latest Collection</div>
                <img src={arrowIcon} alt="arrow icon" />
            </div>
        </div>

        <div className='hero-right'>
            <img src={heroImg} alt="banner image of a man" />
        </div>
    </main>
  )
}

export default Hero

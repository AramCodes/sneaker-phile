import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Exclusive Offers and Discounts to Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>

        <div>
            <input name="email" type="email" placeholder='enter your email address' autoComplete='email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter



import React from 'react'
import './Offers.css'
import exclusiveImg from '../../assets/images/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive<br/>
                Offers For You
            </h1>

            <p>Offer does include limited editions and popular items</p>

            <button>Check Now</button>
        </div>

        <div className="offers-right">
            <img src={exclusiveImg} alt="picture of a rebel" />
        </div>
    </div>
  )
}

export default Offers

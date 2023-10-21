import React from 'react'
import './MidProduct.css'
import Service from '../../assets/images/Service.png'
import Delivery from '../../assets/images/Delivery.png'
import Collection from '../../assets/images/Collection.png'
import Authentic from '../../assets/images/Authentic.png'
import Gift from '../../assets/images/Gift.png'

const MidProduct = () => {
  return (
    <div className='mid-box'>
      <div className="mid-bx-navigator">
        <div className="mid-box-navbox">Benefits</div>
        <div className="mid-box-navbox fade">Reviews (325)</div>
      </div>
      <div className="mid-box-description">
        <div className='benefit-box'>
          <img src={Service} alt="premium service" />
          <h4>Premium Services</h4>
          <p>Explore the world of SneakerPhile with ease.</p>
        </div>

        <div className='benefit-box'>
        <img src={Delivery} alt="fast delivery" />
          <h4>Free Shipping</h4>
          <p>Free shipping on orders over $50.</p>
          <small>happens automatically on check out</small>
        </div>

        <div className='benefit-box'>
        <img src={Gift} alt="fast delivery" />
          <h4>Free Gift</h4>
          <p>Free gift on orders over $500.</p>
          <small>happens automatically on check out</small>
        </div>

        <div className='benefit-box'>
          <img src={Collection} alt="stamp book" />
          <h4>Collections</h4>
          <p>Complete our colletion book of the month and get a free trophy.</p>
          <a href="#">Learn More</a>
        </div>

        <div className='benefit-box'>
          <img src={Authentic} alt="Authenticated kicks" />
          <h4>Authenticated</h4>
          <p>We only by from verified sources.</p>
          <a href="#">Learn More</a>
        </div>

      </div>
    </div>
  )
}

export default MidProduct


{/* <a href="https://www.freepik.com/search?format=search&query=Premium%20Service&type=icon">Icon by Icongeek26</a> */}
{/* <a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=Shipping&query=Shipping&type=icon">Icon by Uniconlabs</a> */}
// <a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=Collection&query=Collection&type=icon">Icon by Payungkead</a>
// <a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=Stamp&query=Stamp&type=icon">Icon by Smashicons</a>
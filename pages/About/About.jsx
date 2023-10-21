import React from 'react'
import './About.css'


const About = () => {

  return (
    <main>
      <div className="about-section">
        <h1>About Us</h1>

        <p>Our shoe company was founded in 2014 by 2 college roommates. We started with the humble mission of being the go to spot for high quality
        shoes, within five years of operating we expanded to to sell jackets and, we've built a portfolio we're very proud of  and we have become 
        one of the most-trusted athletic footwear chains in the United States. With such success, we are happy to share our plan to launch 5 brick 
        and mortar stores in 2024 and increase our e-commerce division footprint.</p>

        <h4>Our Mission Statement</h4>
        <p>To provide the highest quality craftsmanship and best customer service possible every day, with every customer, and with every pair of shoes.</p>

        
        <h2>Meet Our Team</h2>  

      </div>

      <div className="outer-container">

        <div className="container">
          <div className="column">
            <div className="card">
              <img src="https://ca.slack-edge.com/T01HL7SPH3J-U04NM4Z3V09-4fa85889b9ca-512" alt="picture of founder Aram" className='pic' />
              <div className="container">
                <h2>Aram Valcourt</h2>
                <p className="title">CEO, CTO & Founder</p>
                <p>Get on my level!</p>
                <p>avalcourt<span className="email">@sneakerphile.com</span></p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>
  
        </div>
  
      </div>
      
    </main>
  )
}

export default About

import React from 'react'
import './Footer.css'
import footerLogo from '../../assets/images/logo.png'
import instagramIcon from '../../assets/images/instagram_icon.png'
import pinterestIcon from '../../assets/images/pinterest_icon.png'
import whatsappIcon from '../../assets/images/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footerLogo} alt="SneakerPhile's Logo" className='footer-logo-img' />
            <p>SneakerPhile</p>
        </div>
        <ul className="footer-links">
            <li>About</li>
            <li>Products</li>
            <li>Offices</li>
            <li>Company</li>
            <li>Contact Us</li>
        </ul>

        <div className="footer-social-icons">

            <div className="footer-icon-container">
                <img src={instagramIcon} alt="our Instgram account" />
            </div>

            <div className="footer-icon-container">
                <img src={pinterestIcon} alt="our Pinterest account" />
            </div>

            <div className="footer-icon-container">
                <img src={whatsappIcon} alt="our Whats App account" />
            </div>

        </div>

        <div className="footer-copyright">
            <hr />
            <p>Copyright &copy; 2023; Made by <span className="designer">AramCodes</span></p>
        </div>
    </div>
  )
}

export default Footer

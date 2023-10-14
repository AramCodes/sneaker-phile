import React from 'react'
import './Navbar.css'

import logo from '../../assets/images/logo.png'
import cartIcon from '../../assets/images/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [active, setActive] = React.useState("Main")

  const style = { textDecoration: "none"}

  return (
    <header className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="sneakerphile's logo" className='logo' />
            <p>SneakerPhile</p>
        </div>

        <ul className="nav-menu">
        <li onClick={() => {setActive("Main")}}><Link to="/" style={style} className='link'>Main</Link>{active === "Main"? <hr/> : null}</li>
          <li onClick={() => {setActive("Men's Shoes")}}><Link to="/shoes" style={style} className='link'>Men's Shoes</Link> {active === "Men's Shoes"? <hr/> : null}</li>
          <li onClick={() => {setActive("Men's Jackets")}}><Link to="/jackets" style={style} className='link'>Men's Jackets</Link>{active === "Men's Jackets"? <hr/> : null}</li>
          <li onClick={() => {setActive("About")}}><Link to="/about-us" style={style} className='link'>About</Link> {active === "About"? <hr/> : null}</li>
        </ul>

        <div className="nav-login-cart">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cartIcon} alt="your shopping cart" /></Link>
            <span className='nav-cart-count'>0</span>
        </div>
      
    </header>
  )
}

export default Navbar

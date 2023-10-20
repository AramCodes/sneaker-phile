import React from 'react'
import './Navbar.css'
import  { useCart } from 'react-use-cart'
import logo from '../../assets/images/logo.png'
import cartIcon from '../../assets/images/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const { totalItems } = useCart();
  const [active, setActive] = React.useState("Main")
  const [menuOpen, setMenuOpen] = React.useState(false)
  const style = { textDecoration: "none"}

  return (
    <header className='navbar'>
        <Link to="/" style={style}>
          <div className='nav-logo'>
              <img src={logo} alt="sneakerphile's logo" className='logo' />
              <p>SneakerPhile</p>
          </div>
        </Link>

      
        <ul className={`nav-menu ${menuOpen ? "active": null}`}>
          <li onClick={() => {setActive("Men's Shoes")}}><Link to="/shoes" style={style} className='link'>Shoes</Link> {active === "Men's Shoes"? <hr/> : null}</li>
          <li onClick={() => {setActive("Men's Jackets")}}><Link to="/jackets" style={style} className='link'>Jackets</Link>{active === "Men's Jackets"? <hr/> : null}</li>
          <li onClick={() => {setActive("About")}}><Link to="/about-us" style={style} className='link'>About</Link> {active === "About"? <hr/> : null}</li>
        </ul>

        <div className={`nav-login-cart ${menuOpen ? "active": null}`}>
            <Link className='login' to="/login" onClick={() => {setActive("")}}><button>Login</button></Link>
            <Link className='cart' to="/cart" onClick={() => {setActive("")}}><img src={cartIcon} alt="your shopping cart" /></Link>
            <span className='nav-cart-count'>{totalItems}</span>
        </div>

        <a href="#" className='toggle-button' onClick={() => {
          setMenuOpen(prevMenuOpen => !prevMenuOpen)
        }}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </a>
      
    </header>
  )
}

export default Navbar

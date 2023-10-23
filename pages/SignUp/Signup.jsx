import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form className='loginsignup-fields'>

          <label className='form-labels' htmlFor="firstName">Fist Name</label>
          <input type="text" name="first-name" id="firstName" placeholder='enter your first name' autoComplete='given-name'/>

          <label className='form-labels' htmlFor="lastName">Last Name</label>
          <input type="text" name="last-name" id="lastName" placeholder='enter your last name' autoComplete='family-name'/>

          <label className='form-labels' htmlFor="emailAddress">Email</label>
          <input type="email" name="email-address" id="emailAddress" placeholder='enter your email address' autoComplete="email"/>

          <label className='form-labels' htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder='enter your password' autoComplete="new-password"/>

          <button>Continue</button>
        </form>

        <p className="loginsignup-login">Already have an account? <Link to="/login"><span>Login here</span></Link></p>
        <div className='loginsignup-agree'>
          <input type="checkbox" name="agree" id="agreeBox" className='check-box'/>
          <p>By continuing, I agree to the ToS & Privacy Policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Signup

import React from 'react'
import './LoginSignUp.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form className='loginsignup-fields'>

          <input type="text" name="first-name" id="firstName" placeholder='enter your first name'/>
          <input type="text" name="last-name" id="lastName" placeholder='enter your first name'/>
          <input type="email" name="email-address" id="emailAddress" placeholder='enter your email address'/>
          <input type="password" name="password" id="password" placeholder='enter your password'/>

        </form>

        <button>Continue</button>

        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className='loginsignup-agree'>
          <input type="checkbox" name="agree" id="agreeBox" className='check-box'/>
          <p>By continuing, I agree to the ToS & Privacy Policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup

import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <div className='loginsignup'>
            <div className="signup-container">
                <h1>Sign In</h1>

                <form className='loginsignup-fields'>

                    <label className='form-labels' htmlFor="userName">Username</label>
                    <input type="email" name="email-address" id="userName" placeholder='enter your username' autoComplete="email"/>
                    <label className='form-labels' htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='enter your password'autoComplete="current-password"/>

                    <button>Login</button>

                    <p className="loginsignup-login">Don't have an account? <Link to="/sign-up"><span>Signup here</span></Link></p>

                </form>

            </div>
        </div>
    </div>
  )
}

export default Login

import React from 'react'
import './LoginSignup.css'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className='form-container'>
        <h1>Login</h1>
        <form action="">
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder='Enter your email' requires />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder='Enter your password' requires />
            </div>
            <button className="loginBtn">Login</button>
        </form>
        <p>Don't have an account? <Link to = '/Signup'>SignUp</Link></p>
      
    </div>
  )
}

export default Login

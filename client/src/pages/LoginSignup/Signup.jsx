import React from 'react'
import './LoginSignup.css'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <div className='form-container'>
    <h1>SignUp</h1>
    <form action="">
    <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder='Provide full-name' requires />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder='Provide email' requires />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder='Provide password' requires />
        </div>
        <div className="form-group">
            <label htmlFor="confirm_password">Confirm_Password:</label>
            <input type="password" placeholder='Confirm password' requires />
        </div>
        <button className="loginBtn">Login</button>
    </form>
    <p>Already have an account? <Link to = '/Login'>Login</Link></p>
  
</div>
  )
}

export default Signup

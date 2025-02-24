import React from 'react'
import '../Navbar.css'
import logo from '../../assets/logo.png'
import cart from "../../assets/cart_icon.png"
import logout from "../../assets/logout_icon.png"
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav-menu">
        <ul>
            <Link to = '/'><li>Home</li></Link>
            <Link to = '/Products' ><li>Products</li></Link>
            <Link to ='/Services' ><li>Services</li></Link>
            <Link to ='/Contact'><li>contact</li></Link>
        </ul>
      </div>
      <div className="nav-cart-login">
       <Link to = '/Cart'> <div className="cart-icon">
        <img src={cart} alt="" />
        <div className="cart-counter">0</div>
        </div></Link>
        <Link to = '/Login'><button className="loginBtn">Login</button></Link>
        <div className="logout">
        <img src={logout} alt="" />
        <p>Logout</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar

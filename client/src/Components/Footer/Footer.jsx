import React from 'react'
import "./Footer.css"
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are committed to providing the best quality products to our customers. Our goal is to ensure customer satisfaction with every purchase.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:info@tomato.com"> info@tomato.com</a></p>
          <p>Phone: +254 798 654 321</p>
        </div>
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <img src={facebook_icon} alt="facebook" />
          <img src={twitter_icon} alt="twitter" />
        </div>
        </div> 
        <div className="copyright-section">
          <p>&copy;2025 Tomato | All Rights Reserved</p>
          </div>     
    </div>
  )
}

export default Footer

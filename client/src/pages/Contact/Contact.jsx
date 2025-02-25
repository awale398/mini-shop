import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
   <>
     <div className="contact-page">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you.</p>

         <div className='contact-form-container'>
        
        <form action="">
        <h2>Contact Us</h2>
        <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder='Provide full-name' requires />
        </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder='Enter your email' requires />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
               <textarea name="message" id="message"  rows='8' placeholder='Send your message ...'></textarea>
            </div>
            <button className='contactBtn'>Send</button>
        </form>

        <div className="contact-info">
      <h2>Our Address</h2>
      <p>1621 Tomato Street, Nairobi Town, FL 20116</p>

      <h2>Phone</h2>
      <p>Phone: +254 798 654 321</p>

      <h2>Email</h2>
      <p><a href="mailto:info@tomato.com"> info@tomato.com</a></p>
    </div>
        </div>
 
        
     </div>
        
  </>
  )
}

export default Contact

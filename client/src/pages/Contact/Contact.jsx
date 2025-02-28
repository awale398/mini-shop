import { useEffect, useState } from "react";
import './Contact.css'
import axios from "axios";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post("http://localhost:4000/contact", formData);
      setStatus(response.data.success);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message. Try again.");
    }
  };
  return (
   <>
     <div className="contact-page">
          <h1>Contact Us</h1>
         
          <p>We'd love to hear from you.</p>

         <div className='contact-form-container'>
          
        
        <form onSubmit={handleSubmit}>
        {status && <p className={`mb-6 text-sm text-center ${status.includes("Failed") ? "text-red-500" : "text-green-500"}`}>{status}</p>}

        <h2>Contact Us</h2>
        <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          /> </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-40"
            required
          ></textarea>
            </div>
            <button type="submit" className='contactBtn'>Send message</button>
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

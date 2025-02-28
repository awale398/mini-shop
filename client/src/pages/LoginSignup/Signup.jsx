// Import necessary dependencies
import React, { useState } from 'react'; // Import React and useState for managing component state
import './LoginSignup.css'; // Importing the CSS file for styling
import { Link } from 'react-router-dom'; // Importing Link for navigation to the login page

const Signup = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: '', // Stores the user's name
    email: '', // Stores the user's email
    password: '', // Stores the user's password
    confirm_password: '', // Stores the password confirmation
  });

  // Function to handle changes in input fields
  const changeHandler = (e) => {
    // Updates the state dynamically based on input name and value
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    console.log('Signup function executed', formData); // Logs the current form data for debugging

    let responseData;
    try {
      // Sending a POST request to the server for signup
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Converts form data into JSON format
      });

      responseData = await response.json(); // Parses the response into JSON
    } catch (error) {
      console.error('Error during signup:', error); // Logs error if request fails
      alert('Something went wrong. Please try again.'); // Alerts user about the error
      return; // Stops further execution
    }

    // Checking if signup was successful based on the server response
    if (responseData.success) {
      // If successful, store authentication token in localStorage
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/'); // Redirect user to the homepage
    } else {
      // If signup fails, display an error message
      alert(responseData.errors || 'Signup failed');
    }
  };

  return (
    <div className="form-section">
      <div className="form-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          {/* Name input field */}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Provide full name"
              required
              value={formData.name}
              onChange={changeHandler}
            />
          </div>

          {/* Email input field */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Provide email"
              required
              value={formData.email}
              onChange={changeHandler}
            />
          </div>

          {/* Password input field */}
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Provide password"
              required
              value={formData.password}
              onChange={changeHandler}
            />
          </div>

          {/* Confirm password input field */}
          <div className="form-group">
            <label htmlFor="confirm_password">Confirm Password:</label>
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm password"
              required
              value={formData.confirm_password}
              onChange={changeHandler}
            />
          </div>

          {/* Signup button */}
          <button type="submit" className="loginBtn">
            Signup
          </button>
        </form>

        {/* Link to navigate to login page if the user already has an account */}
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup; // Exporting the Signup component for use in other parts of the app

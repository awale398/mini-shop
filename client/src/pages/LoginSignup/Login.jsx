import { useState } from "react"; // Importing useState for managing form data state
import './LoginSignup.css' // Importing styles for the login form
import { Link } from 'react-router-dom' // Importing Link for navigation

const Login = () => {
    // State to store user input for email and password
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    // Function to handle changes in input fields and update state
    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    // Function to handle login when the user submits the form
    const login = async () => {
        console.log("Login function executed", formData); // Debugging user input
    
        try {
            // Sending login credentials to the backend
            const response = await fetch('http://localhost:4000/login', {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData) // Converting form data to JSON format
            });
    
            console.log("Raw Response:", response); // Debugging raw server response
    
            if (!response.ok) {
                throw new Error("Login failed: " + response.status);
            }
    
            const data = await response.json();
            console.log("Server Response:", data); // Debugging parsed response
            if (!data.token) {
                console.error("Token missing in response:", data);
            }
    
            if (data.token) {
                // Storing authentication token in local storage
                localStorage.setItem('auth-token', data.token);
                console.log("Stored Token:", localStorage.getItem('auth-token')); 
                window.location.replace('/'); // Redirecting user after login
            } else {
                alert(data.errors || "Invalid login credentials"); // Showing error message
            }
    
        } catch (error) {
            console.error("Fetch error:", error);
            alert("An error occurred while logging in."); // Alerting user on error
        }
    };
    
    return (
        <div className="form-section">
            <div className='form-container'>
                <h1>Login</h1>
                <form>
                    {/* Input fields for email and password */}
                    <div className="flex flex-col gap-4 mt-7 form-group">
                        <input
                            name="email"
                            value={formData.email}
                            onChange={changeHandler}
                            type="text"
                            placeholder="Your Email"
                            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
                        />
                        <input
                            name="password"
                            value={formData.password}
                            onChange={changeHandler}
                            type="password"
                            placeholder="Password"
                            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
                        />
                    </div>

                    {/* Button to trigger login function */}
                    <button className="loginBtn" type="button" onClick={login}>
                        Login
                    </button>
                </form>

                {/* Link to navigate to the signup page if the user doesn’t have an account */}
                <p>Don't have an account? <Link to='/Signup'>Sign Up</Link></p>
            </div>
        </div>
    );
}

export default Login; // Exporting Login component

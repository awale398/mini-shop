import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaOpencart, FaBars, FaTimes } from "react-icons/fa"; // Importing icons for the cart and mobile menu
import { ShopContext } from "../Context/ShopContext"; // Importing context for cart functionality
import logo from "../assets/logo.png";
import logout from "../assets/logout_icon.png";
import user from "../assets/user.svg";

const Navbar = () => {
  const navigate = useNavigate(); // Hook to navigate between pages
  const { getTotalCartItems } = useContext(ShopContext); // Get total cart items from context
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track user authentication
  const [isMobileOpen, setIsMobileOpen] = useState(false); // State to track mobile menu visibility

  useEffect(() => {
    // Function to check if the user is authenticated
    const checkAuth = () => {
      setIsAuthenticated(!!localStorage.getItem("auth-token")); // Check if auth token exists
    };

    checkAuth(); // Run authentication check on component mount
    window.addEventListener("storage", checkAuth); // Listen for storage changes to update auth status

    return () => {
      window.removeEventListener("storage", checkAuth); // Cleanup event listener on component unmount
    };
  }, []);

  // Function to handle user logout
  const handleLogout = () => {
    localStorage.removeItem("auth-token"); // Remove auth token
    navigate("/"); // Redirect to home page
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Brand Logo" />
        </Link>
      </div>

      {/* Mobile Menu Icon (Hamburger Menu) */}
      <div className="mobile-menu-icon" onClick={() => setIsMobileOpen(!isMobileOpen)}>
        {isMobileOpen ? <FaTimes /> : <FaBars />} {/* Toggle between open/close icon */}
      </div>

      {/* Navigation Links */}
      <div className={`nav-menu ${isMobileOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Display">Products</Link></li>
          <li><Link to="/Service">Services</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </div>

      {/* Cart & Authentication Section */}
      <div className="nav-cart-login">
        {/* Cart Icon with Item Count */}
        <NavLink to="/cart" className="relative flex">
          <FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full" />
          <span className="absolute -top-2 right-0 flexCenter w-5 h-5 rounded-full bg-secondary text-white text-sm">
            {getTotalCartItems()} {/* Display total cart items */}
          </span>
        </NavLink>

        {/* Login / Logout Button */}
        {isAuthenticated ? (
          <button onClick={handleLogout} className="logout-btn">
            <img src={logout} alt="Logout Icon" />
            Logout
          </button>
        ) : (
          <NavLink
              to="/login"
              className="btn_secondary_rounded flexCenter gap-x-2 medium-16"
            >
              <img src={user} alt="User Icon" height={19} width={19} />
              Login
            </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

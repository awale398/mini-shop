import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import addproduct from '../assets/addproduct.png';
import listproduct from '../assets/productlist.png';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="py-10 flex flex-col items-center gap-6 w-full bg-white shadow-lg lg:pt-20 lg:max-w-64 lg:h-screen lg:pl-8 backdrop-blur-md border-r border-gray-200">
      <Link to="/addproduct" className="w-full">
        <button
          className={`flex items-center gap-3 rounded-xl transition-all duration-300 h-14 w-48 px-4 shadow-md text-lg font-semibold ${
            location.pathname === "/addproduct"
              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <img src={addproduct} alt="Add Product" className="h-8 w-8" />
          <span>Add Product</span>
        </button>
      </Link>
      <Link to="/listproduct" className="w-full">
        <button
          className={`flex items-center gap-3 rounded-xl transition-all duration-300 h-14 w-48 px-4 shadow-md text-lg font-semibold ${
            location.pathname === "/listproduct"
              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <img src={listproduct} alt="Product List" className="h-8 w-8" />
          <span>Product List</span>
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            🛒 MERN Store
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="hover:text-blue-200 transition duration-200"
            >
              Home
            </Link>
            <Link 
              to="/cart" 
              className="hover:text-blue-200 transition duration-200"
            >
              Cart
            </Link>
            <Link 
              to="/add-product" 
              className="hover:text-blue-200 transition duration-200"
            >
              Add Product
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white hover:text-blue-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden pb-4">
          <Link 
            to="/" 
            className="block py-2 hover:text-blue-200 transition duration-200"
          >
            Home
          </Link>
          <Link 
            to="/cart" 
            className="block py-2 hover:text-blue-200 transition duration-200"
          >
            Cart
          </Link>
          <Link 
            to="/add-product" 
            className="block py-2 hover:text-blue-200 transition duration-200"
          >
            Add Product
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
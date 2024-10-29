import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function Nav() {
    return (
      <nav className="navbar flex justify-between items-center py-4 border-b border-gray-200">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image 
            alt="logo" 
            src="/logo.png" 
            width={100} 
            height={30} 
            className="logo-image" 
          />
          <span className="brand text-2xl font-semibold">Foodieland.</span>
        </div>
        
        {/* Navigation Links */}
        <ul className="nav-links flex space-x-8 text-gray-700">
          <li><a href="/" className="hover:text-orange-500">Home</a></li>
          <li><a href="/recipes" className="hover:text-orange-500">Recipes</a></li>
          <li><a href="/blog" className="hover:text-orange-500">Blog</a></li>
          <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
          <li><a href="/about" className="hover:text-orange-500">About us</a></li>
        </ul>
  
        {/* Social Media Icons */}
        <div className="social-icons flex space-x-4 text-gray-700">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </nav>
    );
  }
  
  export default Nav;

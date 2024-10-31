import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../pages/index';
import Recipes from '../pages/recipes/index';
import Blog from '../pages/blog';
import Contact from '../pages/contact';
import AboutUs from '../pages/about';
import NotFound from '../pages/404-notfound';


function Nav() {
    return (
        <Router>
            <nav className="navbar flex justify-between items-center py-4 border-b">
                {/* Logo Section */}
                <div class="logo">
                    <Link to="/" className="hover:text-white">
                        <div className="flex items-center">
                            <img
                                alt="logo"
                                src="/logo.png"
                                className="logo-image mr-2"
                            />
                        </div>
                    </Link>
                </div>

                {/* Navigation Links */}
                <ul className="nav-links flex space-x-8 text-gray-700">
                    <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
                    <li><Link to="/recipes" className="hover:text-orange-500">Recipes</Link></li>
                    <li><Link to="/blog" className="hover:text-orange-500">Blog</Link></li>
                    <li><Link to="/contact" className="hover:text-orange-500">Contact</Link></li>
                    <li><Link to="/about" className="hover:text-orange-500">About us</Link></li>
                </ul>

                {/* Social Media Icons */}
                <div className="social-icons flex space-x-4 text-gray-700">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                    <img
                            alt="facebook"
                            src="/facebook.svg"
                        />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                    <img
                            alt="x-icon"
                            src="/x-icon.svg"
                        />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                        <img
                            alt="Instagram"
                            src="/instagram-icon.svg"
                        />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                        <img
                            alt="YouTube"
                            src="/youtube.svg"
                        />
                    </a>
                </div>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default Nav;

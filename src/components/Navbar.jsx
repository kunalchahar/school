// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">  
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/about" className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
            <Link to="/academics" className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Academics</Link>
            <Link to="/admissions" className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Admissions</Link>
            <Link to="/faculty" className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Faculty</Link>
            <Link to="/students" className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Students</Link>
            <Link to="/gallery" className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Gallery</Link>
            <Link to="/contact" className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Contact Us</Link>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="text-gray-900 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link to="/about" className="text-gray-900 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
          <Link to="/academics" className="text-gray-900 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Academics</Link>
          <Link to="/admissions" className="text-gray-900 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Admissions</Link>
          <Link to="/faculty" className="text-gray-900 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Faculty</Link>
          <Link to="/students" className="text-gray-900 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Students</Link>
          <Link to="/gallery" className="text-gray-900 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Gallery</Link>
          <Link to="/contact" className="text-gray-900 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
